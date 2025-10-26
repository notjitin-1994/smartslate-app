import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  TextField,
  Snackbar,
  Alert,
  Typography,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import StandardHero from '@/components/ui/StandardHero';
import {
  PageWrapper,
  SectionWrapper,
  ContentCard,
  PrimaryButton,
  AnimatedChip,
  AccentText,
} from '@/components/landing/styles/LandingStyles';
import { submitModalForm } from '@/lib/api/modal-submission';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '12px',
    color: theme.palette.text.primary,
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(167, 218, 219, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)',
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiOutlinedInput-input': {
    color: theme.palette.text.primary,
  },
}));

const ContactMethodCard = styled(ContentCard)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, rgba(167, 218, 219, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
}));

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Company validation (optional but if provided must be valid)
    if (formData.company.trim() && formData.company.trim().length < 2) {
      newErrors.company = 'Company name must be at least 2 characters';
    }

    // Phone validation (optional but if provided must be valid)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      } else if (formData.phone.replace(/\D/g, '').length < 10) {
        newErrors.phone = 'Phone number must be at least 10 digits';
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: 'Please fix the errors in the form',
        severity: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitModalForm({
        modalType: 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        formData: {
          subject: formData.subject,
          message: formData.message,
        },
      });

      if (result.success) {
        setSnackbar({
          open: true,
          message: 'Thank you for contacting us! We will get back to you soon.',
          severity: 'success',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setSnackbar({
          open: true,
          message: result.error || 'Failed to submit form. Please try again.',
          severity: 'error',
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'An unexpected error occurred. Please try again.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <PageWrapper>
      <StandardHero
        title="Get in Touch With Us"
        subtitle="We're here to help you transform learning"
        description="Have questions about SmartSlate? Want to transform your educational approach? We're here to help you every step of the way. Reach out to us and let's start a conversation about revolutionizing learning together."
        accentWords={['Get in Touch', 'Transform', 'Help']}
      />

      <SectionWrapper>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {/* Contact Methods */}
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={itemVariants}>
                  <Box sx={{ mb: 4 }}>
                    <AnimatedChip label="Contact Information" sx={{ mb: 2 }} />
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      Let's <AccentText>Connect</AccentText>
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 4,
                        lineHeight: 1.7,
                      }}
                    >
                      Choose your preferred way to reach us. We're always ready to
                      assist you with any questions or feedback.
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <motion.div variants={itemVariants}>
                      <ContactMethodCard
                        onClick={() =>
                          window.open('mailto:jitin@smartslate.io', '_blank')
                        }
                      >
                        <IconWrapper>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </IconWrapper>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: 'text.secondary',
                              fontSize: '0.875rem',
                              mb: 0.5,
                            }}
                          >
                            Email Us
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'primary.main',
                              fontWeight: 600,
                            }}
                          >
                            jitin@smartslate.io
                          </Typography>
                        </Box>
                      </ContactMethodCard>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <ContactMethodCard
                        onClick={() => window.open('tel:+919008898642', '_blank')}
                      >
                        <IconWrapper>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </IconWrapper>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: 'text.secondary',
                              fontSize: '0.875rem',
                              mb: 0.5,
                            }}
                          >
                            Call Us
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'primary.main',
                              fontWeight: 600,
                            }}
                          >
                            +91 9008898642
                          </Typography>
                        </Box>
                      </ContactMethodCard>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <ContentCard sx={{ p: 3 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: 'text.secondary',
                            mb: 2,
                            fontSize: '0.875rem',
                          }}
                        >
                          Business Hours
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ color: 'text.primary' }}
                            >
                              Monday - Friday
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: 'primary.main', fontWeight: 600 }}
                            >
                              9:00 AM - 6:00 PM
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ color: 'text.primary' }}
                            >
                              Saturday - Sunday
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: 'text.secondary' }}
                            >
                              Closed
                            </Typography>
                          </Box>
                        </Box>
                      </ContentCard>
                    </motion.div>
                  </Box>
                </motion.div>
              </Grid>

              {/* Contact Form */}
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={itemVariants}>
                  <ContentCard sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: 'text.primary',
                      }}
                    >
                      Send Us a Message
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 4,
                      }}
                    >
                      Fill out the form below and we'll get back to you as soon as
                      possible.
                    </Typography>

                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <StyledTextField
                            fullWidth
                            label="Name"
                            value={formData.name}
                            onChange={handleChange('name')}
                            error={!!errors.name}
                            helperText={errors.name}
                            required
                            disabled={isSubmitting}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <StyledTextField
                            fullWidth
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange('email')}
                            error={!!errors.email}
                            helperText={errors.email}
                            required
                            disabled={isSubmitting}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <StyledTextField
                            fullWidth
                            label="Company"
                            value={formData.company}
                            onChange={handleChange('company')}
                            error={!!errors.company}
                            helperText={errors.company}
                            disabled={isSubmitting}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <StyledTextField
                            fullWidth
                            label="Phone"
                            value={formData.phone}
                            onChange={handleChange('phone')}
                            error={!!errors.phone}
                            helperText={errors.phone}
                            disabled={isSubmitting}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <StyledTextField
                            fullWidth
                            label="Subject"
                            value={formData.subject}
                            onChange={handleChange('subject')}
                            error={!!errors.subject}
                            helperText={errors.subject}
                            required
                            disabled={isSubmitting}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <StyledTextField
                            fullWidth
                            label="Message"
                            multiline
                            rows={6}
                            value={formData.message}
                            onChange={handleChange('message')}
                            error={!!errors.message}
                            helperText={errors.message}
                            required
                            disabled={isSubmitting}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <PrimaryButton
                            type="submit"
                            fullWidth
                            disabled={isSubmitting}
                            sx={{ height: '48px' }}
                          >
                            {isSubmitting ? (
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <CircularProgress size={20} sx={{ color: '#000000' }} />
                                <span>Sending...</span>
                              </Box>
                            ) : (
                              'Send Message'
                            )}
                          </PrimaryButton>
                        </Grid>
                      </Grid>
                    </form>
                  </ContentCard>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </SectionWrapper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            width: '100%',
            backgroundColor:
              snackbar.severity === 'success'
                ? 'rgba(76, 175, 80, 0.9)'
                : 'rgba(244, 67, 54, 0.9)',
            color: '#ffffff',
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </PageWrapper>
  );
}
