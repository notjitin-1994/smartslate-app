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
  Card,
  CardContent,
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

const PartnerTypeCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: theme.spacing(4),
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-8px)',
    border: '1px solid rgba(167, 218, 219, 0.3)',
    boxShadow: '0 8px 32px rgba(167, 218, 219, 0.2)',
  },
}));

const BenefitCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-4px)',
    border: '1px solid rgba(167, 218, 219, 0.3)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '56px',
  height: '56px',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, rgba(167, 218, 219, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const SmallIconWrapper = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, rgba(167, 218, 219, 0.15) 0%, rgba(79, 70, 229, 0.15) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  partnershipType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  partnershipType?: string;
  message?: string;
}

const partnerTypes = [
  {
    title: 'Technology Partners',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    description: 'Integrate your technology with SmartSlate to create seamless learning experiences.',
    features: [
      'API integration support',
      'Co-marketing opportunities',
      'Technical documentation access',
      'Joint product development'
    ]
  },
  {
    title: 'Content Partners',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    description: 'Contribute your educational content to reach millions of learners worldwide.',
    features: [
      'Revenue sharing model',
      'Content distribution platform',
      'Quality assurance support',
      'Analytics and insights'
    ]
  },
  {
    title: 'Implementation Partners',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    description: 'Help organizations implement and optimize SmartSlate for their unique needs.',
    features: [
      'Implementation training',
      'Referral commissions',
      'Marketing resources',
      'Priority support access'
    ]
  },
  {
    title: 'Reseller Partners',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    description: 'Distribute SmartSlate solutions and earn competitive margins on every sale.',
    features: [
      'Competitive pricing tiers',
      'Sales enablement tools',
      'Lead generation support',
      'Dedicated partner manager'
    ]
  }
];

const benefits = [
  {
    title: 'Revenue Growth',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    description: 'Access new revenue streams through partnership programs and competitive commission structures.'
  },
  {
    title: 'Market Expansion',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    description: 'Expand your reach into new markets and customer segments with our global platform.'
  },
  {
    title: 'Technical Support',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    description: 'Get dedicated technical support and resources to ensure successful integration and deployment.'
  },
  {
    title: 'Co-Marketing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    description: 'Leverage joint marketing initiatives and brand visibility to reach more customers together.'
  },
  {
    title: 'Training & Certification',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    description: 'Access comprehensive training programs and certification to maximize your partnership potential.'
  },
  {
    title: 'Innovation Access',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    description: 'Get early access to new features, products, and innovations in the learning technology space.'
  }
];

export default function PartnerPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    partnershipType: '',
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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    } else if (formData.company.trim().length < 2) {
      newErrors.company = 'Company name must be at least 2 characters';
    }

    if (formData.phone.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      } else if (formData.phone.replace(/\D/g, '').length < 10) {
        newErrors.phone = 'Phone number must be at least 10 digits';
      }
    }

    if (!formData.partnershipType.trim()) {
      newErrors.partnershipType = 'Partnership type is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more details (at least 20 characters)';
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
        modalType: 'partnership',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        formData: {
          partnershipType: formData.partnershipType,
          message: formData.message,
        },
      });

      if (result.success) {
        setSnackbar({
          open: true,
          message: 'Thank you for your interest! Our partnership team will contact you soon.',
          severity: 'success',
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          partnershipType: '',
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
        title="Partner with Smartslate"
        subtitle="Build the future of learning together"
        description="Join our ecosystem of innovative partners and help transform education globally. Together, we can create powerful learning experiences that empower millions of students and educators worldwide."
        accentWords={['Partner', 'Future', 'Together']}
      />

      {/* Partnership Types Section */}
      <SectionWrapper>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <motion.div variants={itemVariants}>
                <AnimatedChip label="Partnership Opportunities" sx={{ mb: 2 }} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Choose Your <AccentText>Partnership Type</AccentText>
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: 'text.secondary',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.7,
                  }}
                >
                  We offer flexible partnership models designed to match your business goals
                  and expertise. Select the partnership type that aligns with your vision.
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={4}>
              {partnerTypes.map((partner, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <PartnerTypeCard>
                      <CardContent>
                        <IconWrapper>{partner.icon}</IconWrapper>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: 'text.primary',
                          }}
                        >
                          {partner.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.secondary',
                            mb: 3,
                            lineHeight: 1.7,
                          }}
                        >
                          {partner.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                          {partner.features.map((feature, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                              }}
                            >
                              <Box
                                sx={{
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #a7dadb 0%, #4F46E5 100%)',
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{ color: 'text.primary' }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </CardContent>
                    </PartnerTypeCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper sx={{ background: 'rgba(167, 218, 219, 0.03)' }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <motion.div variants={itemVariants}>
                <AnimatedChip label="Why Partner With Us" sx={{ mb: 2 }} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Partnership <AccentText>Benefits</AccentText>
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: 'text.secondary',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.7,
                  }}
                >
                  Unlock exclusive advantages and resources that will help your business
                  grow and succeed in the education technology market.
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={3}>
              {benefits.map((benefit, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <BenefitCard>
                      <CardContent>
                        <SmallIconWrapper>{benefit.icon}</SmallIconWrapper>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1.5,
                            color: 'text.primary',
                          }}
                        >
                          {benefit.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.7,
                          }}
                        >
                          {benefit.description}
                        </Typography>
                      </CardContent>
                    </BenefitCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* Application Form Section */}
      <SectionWrapper>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <motion.div variants={itemVariants}>
                <AnimatedChip label="Get Started" sx={{ mb: 2 }} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Apply for <AccentText>Partnership</AccentText>
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: 'text.secondary',
                    maxWidth: '700px',
                    mx: 'auto',
                    lineHeight: 1.7,
                  }}
                >
                  Ready to start your partnership journey? Fill out the form below and
                  our team will get in touch with you within 24-48 hours.
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={4} justifyContent="center">
              <Grid size={{ xs: 12, md: 10, lg: 8 }}>
                <motion.div variants={itemVariants}>
                  <ContentCard sx={{ p: { xs: 3, md: 5 } }}>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <StyledTextField
                            fullWidth
                            label="Full Name"
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
                            label="Email Address"
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
                            label="Company Name"
                            value={formData.company}
                            onChange={handleChange('company')}
                            error={!!errors.company}
                            helperText={errors.company}
                            required
                            disabled={isSubmitting}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <StyledTextField
                            fullWidth
                            label="Phone Number"
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
                            label="Partnership Type"
                            value={formData.partnershipType}
                            onChange={handleChange('partnershipType')}
                            error={!!errors.partnershipType}
                            helperText={errors.partnershipType}
                            required
                            disabled={isSubmitting}
                            placeholder="e.g., Technology Partner, Content Partner, Implementation Partner, or Reseller Partner"
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <StyledTextField
                            fullWidth
                            label="Tell us about your interest"
                            multiline
                            rows={6}
                            value={formData.message}
                            onChange={handleChange('message')}
                            error={!!errors.message}
                            helperText={errors.message}
                            required
                            disabled={isSubmitting}
                            placeholder="Please describe your company, partnership goals, and how you envision collaborating with SmartSlate..."
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <PrimaryButton
                            type="submit"
                            fullWidth
                            disabled={isSubmitting}
                            sx={{ height: '56px', fontSize: '1.125rem' }}
                          >
                            {isSubmitting ? (
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <CircularProgress size={24} sx={{ color: '#000000' }} />
                                <span>Submitting Application...</span>
                              </Box>
                            ) : (
                              'Submit Partnership Application'
                            )}
                          </PrimaryButton>
                        </Grid>
                      </Grid>
                    </form>

                    <Box
                      sx={{
                        mt: 4,
                        pt: 4,
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 2 }}
                      >
                        Have questions? Contact our partnership team
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', sm: 'row' },
                          gap: 2,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ color: '#a7dadb' }}
                          >
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                          <Typography
                            variant="body2"
                            sx={{ color: 'primary.main', fontWeight: 500 }}
                          >
                            partners@smartslate.io
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ color: '#a7dadb' }}
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          <Typography
                            variant="body2"
                            sx={{ color: 'primary.main', fontWeight: 500 }}
                          >
                            +91 9008898642
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
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
