import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import StandardHero from '@/components/ui/StandardHero';
import Footer from '@/components/layout/Footer';
import { StaticSwirls } from '@/components/StaticSwirls';

// Styled Components
const PageWrapper = styled(Box)(() => ({
  minHeight: '100vh',
  background: '#020c1b',
  color: '#e0e0e0',
  position: 'relative',
  overflow: 'hidden',
}));

const Section = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(12)} 0`,
  position: 'relative',
  zIndex: 10,
  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(8)} 0`,
  },
}));

const ComparisonCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '1.5rem',
  padding: theme.spacing(4),
  height: '100%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    border: '1px solid rgba(167, 218, 219, 0.3)',
    boxShadow: '0 12px 40px rgba(167, 218, 219, 0.15)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
}));

const FeatureCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '1.25rem',
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    border: '1px solid rgba(167, 218, 219, 0.3)',
    boxShadow: '0 12px 40px rgba(167, 218, 219, 0.15)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
}));

const IconWrapper = styled(Box)(() => ({
  width: '64px',
  height: '64px',
  borderRadius: '1rem',
  background: 'linear-gradient(135deg, rgba(167, 218, 219, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)',
  border: '1px solid rgba(167, 218, 219, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.5rem',
  fontSize: '2rem',
}));

const AccentText = styled('span')(() => ({
  background: 'linear-gradient(135deg, #a7dadb 0%, #4F46E5 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 700,
}));

const CTABox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(167, 218, 219, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%)',
  border: '1px solid rgba(167, 218, 219, 0.2)',
  borderRadius: '2rem',
  padding: theme.spacing(8),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6),
  },
}));

const CTAButton = styled(motion.button)(() => ({
  background: 'linear-gradient(135deg, #5b4ff7 0%, #4f46e5 100%)',
  color: '#ffffff',
  border: 'none',
  borderRadius: '0.875rem',
  padding: '1rem 2.5rem',
  fontSize: '1.125rem',
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: '0 4px 16px rgba(79, 70, 229, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(79, 70, 229, 0.4)',
  },
}));

const VsIndicator = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#a7dadb',
  margin: `${theme.spacing(3)} 0`,
  [theme.breakpoints.down('md')]: {
    margin: `${theme.spacing(2)} 0`,
  },
}));

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function DifferencePage() {
  const comparisons = [
    {
      traditional: {
        title: 'Static Content',
        description: 'One-size-fits-all approach with limited personalization and rigid learning paths',
        icon: '📚',
      },
      smartslate: {
        title: 'Adaptive Learning',
        description: 'AI-powered personalization that adapts to each student\'s pace, style, and needs',
        icon: '🎯',
      },
    },
    {
      traditional: {
        title: 'Manual Tracking',
        description: 'Time-consuming progress monitoring with delayed feedback and insights',
        icon: '📊',
      },
      smartslate: {
        title: 'Real-Time Analytics',
        description: 'Instant insights with automated tracking and predictive performance metrics',
        icon: '⚡',
      },
    },
    {
      traditional: {
        title: 'Isolated Learning',
        description: 'Students work independently with minimal collaboration opportunities',
        icon: '👤',
      },
      smartslate: {
        title: 'Connected Community',
        description: 'Seamless collaboration tools and peer-to-peer learning networks',
        icon: '🤝',
      },
    },
    {
      traditional: {
        title: 'Limited Accessibility',
        description: 'Restricted access to resources with time and location constraints',
        icon: '🔒',
      },
      smartslate: {
        title: 'Anytime, Anywhere',
        description: '24/7 cloud-based access across all devices with offline capabilities',
        icon: '🌐',
      },
    },
  ];

  const differentiators = [
    {
      icon: '🧠',
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms that understand student behavior and optimize learning paths in real-time',
    },
    {
      icon: '🎨',
      title: 'Engaging Experience',
      description: 'Gamified learning modules and interactive content that boost engagement and knowledge retention',
    },
    {
      icon: '📈',
      title: 'Data-Driven Insights',
      description: 'Comprehensive analytics dashboard providing actionable insights for educators and administrators',
    },
    {
      icon: '🔐',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with international education data privacy standards',
    },
    {
      icon: '🌍',
      title: 'Global Scalability',
      description: 'Built to support millions of concurrent users with 99.9% uptime guarantee',
    },
    {
      icon: '💡',
      title: 'Continuous Innovation',
      description: 'Regular updates with new features based on educator feedback and educational research',
    },
  ];

  return (
    <PageWrapper>
      {/* Background Swirls */}
      <StaticSwirls
        imageSrc="/images/logos/logo-swirl.png"
        count={150}
        minSize={20}
        maxSize={100}
        opacityMin={0.02}
        opacityMax={0.15}
        areaPadding={24}
      />

      {/* Hero Section */}
      <StandardHero
        title="The Smartslate Difference"
        subtitle="WHY CHOOSE US"
        description="Transforming learning through innovation - See how Smartslate revolutionizes education with cutting-edge technology and student-centered design"
        accentWords={['Smartslate', 'innovation', 'revolutionizes']}
      />

      {/* Comparison Section */}
      <Section>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 800,
                mb: 2,
                textAlign: 'center',
              }}
            >
              Traditional Learning <AccentText>vs</AccentText> Smartslate
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'rgba(255, 255, 255, 0.7)',
                textAlign: 'center',
                maxWidth: '700px',
                mx: 'auto',
                mb: 8,
              }}
            >
              See how we're redefining the educational experience
            </Typography>

            <Box sx={{ mt: 6 }}>
              {comparisons.map((comparison, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeInUp}
                  style={{ marginBottom: '3rem' }}
                >
                  <Grid container spacing={3} alignItems="center">
                    {/* Traditional */}
                    <Grid size={{ xs: 12, md: 5 }}>
                      <ComparisonCard
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Box sx={{ textAlign: 'center', opacity: 0.7 }}>
                          <Typography sx={{ fontSize: '3rem', mb: 2 }}>
                            {comparison.traditional.icon}
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              mb: 1.5,
                              color: 'rgba(255, 255, 255, 0.8)',
                            }}
                          >
                            {comparison.traditional.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.6)',
                              lineHeight: 1.7,
                            }}
                          >
                            {comparison.traditional.description}
                          </Typography>
                        </Box>
                      </ComparisonCard>
                    </Grid>

                    {/* VS Indicator */}
                    <Grid size={{ xs: 12, md: 2 }}>
                      <VsIndicator>VS</VsIndicator>
                    </Grid>

                    {/* Smartslate */}
                    <Grid size={{ xs: 12, md: 5 }}>
                      <ComparisonCard
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          background: 'linear-gradient(135deg, rgba(167, 218, 219, 0.08) 0%, rgba(79, 70, 229, 0.08) 100%)',
                          border: '1px solid rgba(167, 218, 219, 0.3)',
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography sx={{ fontSize: '3rem', mb: 2 }}>
                            {comparison.smartslate.icon}
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              mb: 1.5,
                              color: '#a7dadb',
                            }}
                          >
                            {comparison.smartslate.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.85)',
                              lineHeight: 1.7,
                            }}
                          >
                            {comparison.smartslate.description}
                          </Typography>
                        </Box>
                      </ComparisonCard>
                    </Grid>
                  </Grid>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Section>

      {/* Key Differentiators Section */}
      <Section sx={{ background: 'rgba(167, 218, 219, 0.02)' }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 800,
                mb: 2,
                textAlign: 'center',
              }}
            >
              What Makes Us <AccentText>Different</AccentText>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'rgba(255, 255, 255, 0.7)',
                textAlign: 'center',
                maxWidth: '700px',
                mx: 'auto',
                mb: 8,
              }}
            >
              Six core pillars that set Smartslate apart from the rest
            </Typography>

            <Grid container spacing={4}>
              {differentiators.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <FeatureCard
                    custom={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconWrapper>{item.icon}</IconWrapper>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#ffffff',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.7,
                        flexGrow: 1,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Mission/Vision Section */}
      <Section>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={6}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    background: 'rgba(167, 218, 219, 0.05)',
                    border: '1px solid rgba(167, 218, 219, 0.2)',
                    borderRadius: '1.5rem',
                    p: 5,
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.75rem', md: '2.5rem' },
                      fontWeight: 800,
                      mb: 3,
                      color: '#a7dadb',
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.125rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: 1.8,
                    }}
                  >
                    To democratize quality education by providing innovative, accessible,
                    and personalized learning experiences that empower students worldwide
                    to achieve their full potential. We believe every learner deserves
                    tools that adapt to their unique needs and learning style.
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    background: 'rgba(79, 70, 229, 0.05)',
                    border: '1px solid rgba(79, 70, 229, 0.2)',
                    borderRadius: '1.5rem',
                    p: 5,
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.75rem', md: '2.5rem' },
                      fontWeight: 800,
                      mb: 3,
                      color: '#4f46e5',
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.125rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: 1.8,
                    }}
                  >
                    To become the world's leading educational technology platform,
                    transforming how millions learn and grow. We envision a future where
                    technology seamlessly enhances human potential, making lifelong
                    learning engaging, effective, and accessible to all.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CTABox>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Ready to Experience the <AccentText>Difference</AccentText>?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: 4,
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Join thousands of educators and students who are already transforming
                their learning experience with Smartslate
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <CTAButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/auth'}
                >
                  Get Started Free
                </CTAButton>
                <CTAButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/contact'}
                  style={{
                    background: 'transparent',
                    border: '2px solid #a7dadb',
                    color: '#a7dadb',
                  }}
                >
                  Schedule a Demo
                </CTAButton>
              </Box>
            </CTABox>
          </motion.div>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </PageWrapper>
  );
}
