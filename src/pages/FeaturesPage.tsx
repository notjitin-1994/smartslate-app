import { Box, Container, Grid, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import StandardHero from '@/components/ui/StandardHero';
import Footer from '@/components/layout/Footer';
import { StaticSwirls } from '@/components/StaticSwirls';
import DemoModal from '@/components/landing/DemoModal';
import { useModalManager } from '@/hooks/useModalManager';
import {
  Speed as SpeedIcon,
  AttachMoney as MoneyIcon,
  TrendingUp as TrendingUpIcon,
  Rocket as RocketIcon,
  School as SchoolIcon,
  Create as CreateIcon,
  CloudQueue as CloudIcon,
  Psychology as PsychologyIcon,
  BarChart as BarChartIcon,
  AutoAwesome as AutoAwesomeIcon,
  Groups as GroupsIcon,
  Security as SecurityIcon,
  Language as LanguageIcon,
  Assessment as AssessmentIcon,
  Lightbulb as LightbulbIcon,
} from '@mui/icons-material';

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

const StyledStatCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '1.5rem',
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    border: '1px solid rgba(167, 218, 219, 0.3)',
    boxShadow: '0 12px 40px rgba(167, 218, 219, 0.15)',
  },
}));

const StatCard = motion.create(StyledStatCard);

const StyledProductCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '1.5rem',
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    border: '1px solid rgba(167, 218, 219, 0.3)',
    boxShadow: '0 12px 40px rgba(167, 218, 219, 0.15)',
  },
}));

const ProductCard = motion.create(StyledProductCard);

const StyledFeatureCard = styled(Box)(({ theme }) => ({
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
}));

const FeatureCard = motion.create(StyledFeatureCard);

const StyledMetricCard = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(167, 218, 219, 0.08) 0%, rgba(79, 70, 229, 0.08) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(167, 218, 219, 0.2)',
  borderRadius: '1.5rem',
  padding: theme.spacing(5),
  textAlign: 'center',
  height: '100%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(167, 218, 219, 0.2)',
  },
}));

const MetricCard = motion.create(StyledMetricCard);

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
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
    color: '#a7dadb',
  },
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

const StyledCTAButton = styled('button')(() => ({
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

const CTAButton = motion.create(StyledCTAButton);

const StatusBadge = styled(Chip)<{ status: 'live' | 'coming-soon' }>(({ status }) => ({
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  fontWeight: 600,
  fontSize: '0.75rem',
  height: '28px',
  ...(status === 'live' ? {
    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    color: '#ffffff',
  } : {
    background: 'rgba(167, 218, 219, 0.15)',
    color: '#a7dadb',
    border: '1px solid rgba(167, 218, 219, 0.3)',
  }),
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

export default function FeaturesPage() {
  const { modalStates, actions } = useModalManager();

  const statistics = [
    {
      icon: <SpeedIcon />,
      value: '70%',
      label: 'Faster Learning',
      description: 'Accelerated knowledge retention',
    },
    {
      icon: <MoneyIcon />,
      value: '60%',
      label: 'Cost Reduction',
      description: 'Lower operational expenses',
    },
    {
      icon: <TrendingUpIcon />,
      value: '85%',
      label: 'Student Engagement',
      description: 'Higher participation rates',
    },
    {
      icon: <RocketIcon />,
      value: '10x',
      label: 'Scalability',
      description: 'Efficient growth potential',
    },
  ];

  const platformFeatures = [
    {
      name: 'Solara Polaris',
      status: 'live' as const,
      description: 'Advanced needs analysis powered by AI to identify learning gaps and personalize educational pathways for every student.',
      icon: <SchoolIcon />,
      capabilities: ['AI-driven assessment', 'Learning gap identification', 'Personalized recommendations'],
    },
    {
      name: 'Solara Constellation',
      status: 'coming-soon' as const,
      description: 'Intelligent content structuring that organizes educational materials into coherent, digestible learning modules.',
      icon: <CreateIcon />,
      capabilities: ['Smart content organization', 'Module generation', 'Curriculum mapping'],
    },
    {
      name: 'Solara Nova',
      status: 'coming-soon' as const,
      description: 'Revolutionary content authoring tools that empower educators to create engaging, interactive learning experiences.',
      icon: <LightbulbIcon />,
      capabilities: ['Intuitive authoring', 'Interactive elements', 'Multimedia integration'],
    },
    {
      name: 'Solara Orbit',
      status: 'coming-soon' as const,
      description: 'Seamless learning delivery platform that brings content to students across any device, anywhere, anytime.',
      icon: <CloudIcon />,
      capabilities: ['Cross-platform delivery', 'Offline access', 'Adaptive streaming'],
    },
    {
      name: 'Solara Nebula',
      status: 'coming-soon' as const,
      description: 'AI-powered tutoring system that provides personalized guidance and instant support to learners 24/7.',
      icon: <PsychologyIcon />,
      capabilities: ['Real-time assistance', 'Natural language processing', 'Personalized feedback'],
    },
    {
      name: 'Solara Spectrum',
      status: 'coming-soon' as const,
      description: 'Comprehensive analytics and insights that transform learning data into actionable intelligence for educators.',
      icon: <BarChartIcon />,
      capabilities: ['Advanced analytics', 'Predictive insights', 'Custom reporting'],
    },
  ];

  const coreCapabilities = [
    {
      icon: <AutoAwesomeIcon />,
      title: 'AI-Powered Personalization',
      description: 'Machine learning algorithms that adapt to each student\'s unique learning style, pace, and preferences.',
    },
    {
      icon: <GroupsIcon />,
      title: 'Collaborative Learning',
      description: 'Tools that foster peer-to-peer interaction and enable seamless collaboration across learning communities.',
    },
    {
      icon: <SecurityIcon />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with international data privacy standards to protect sensitive information.',
    },
    {
      icon: <LanguageIcon />,
      title: 'Global Accessibility',
      description: 'Multi-language support and accessibility features ensuring inclusive learning for all students.',
    },
    {
      icon: <AssessmentIcon />,
      title: 'Real-Time Analytics',
      description: 'Instant insights into student performance with predictive analytics and automated progress tracking.',
    },
    {
      icon: <RocketIcon />,
      title: 'Infinite Scalability',
      description: 'Cloud infrastructure designed to support millions of concurrent users with 99.9% uptime guarantee.',
    },
  ];

  const businessValue = [
    {
      metric: 'ROI',
      value: '300%+',
      description: 'Average return on investment within first year',
      color: '#22c55e',
    },
    {
      metric: 'Time Saved',
      value: '15hrs/week',
      description: 'Per educator on administrative tasks',
      color: '#a7dadb',
    },
    {
      metric: 'Student Success',
      value: '92%',
      description: 'Improved course completion rates',
      color: '#4f46e5',
    },
    {
      metric: 'Satisfaction',
      value: '4.8/5',
      description: 'Average user rating across all modules',
      color: '#f59e0b',
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
        title="Solara — The Intelligent Learning Universe"
        subtitle="PLATFORM FEATURES"
        description="Experience the future of education with our comprehensive suite of AI-powered learning solutions designed to transform how knowledge is created, delivered, and experienced."
        accentWords={['Solara', 'Intelligent', 'Universe']}
      />

      {/* Statistics Section */}
      <Section>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <Grid container spacing={4}>
              {statistics.map((stat, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <StatCard
                    custom={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconWrapper sx={{ mx: 'auto' }}>{stat.icon}</IconWrapper>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: '3rem',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #a7dadb 0%, #4F46E5 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: '#ffffff',
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      {stat.description}
                    </Typography>
                  </StatCard>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Platform Features Section */}
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
              The <AccentText>Solara</AccentText> Product Suite
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
              Six interconnected products forming a complete learning ecosystem
            </Typography>

            <Grid container spacing={4}>
              {platformFeatures.map((product, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <ProductCard
                    custom={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <StatusBadge
                      status={product.status}
                      label={product.status === 'live' ? 'Live Now' : 'Coming Soon'}
                    />
                    <IconWrapper>{product.icon}</IconWrapper>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#a7dadb',
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.7,
                        mb: 3,
                        flexGrow: 1,
                      }}
                    >
                      {product.description}
                    </Typography>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#a7dadb',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Key Capabilities:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {product.capabilities.map((capability, i) => (
                          <Chip
                            key={i}
                            label={capability}
                            size="small"
                            sx={{
                              background: 'rgba(167, 218, 219, 0.1)',
                              color: 'rgba(255, 255, 255, 0.7)',
                              border: '1px solid rgba(167, 218, 219, 0.2)',
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </ProductCard>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Core Capabilities Section */}
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
              Core <AccentText>Capabilities</AccentText>
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
              Powerful features that set our platform apart
            </Typography>

            <Grid container spacing={4}>
              {coreCapabilities.map((capability, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <FeatureCard
                    custom={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconWrapper>{capability.icon}</IconWrapper>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#ffffff',
                      }}
                    >
                      {capability.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.7,
                        flexGrow: 1,
                      }}
                    >
                      {capability.description}
                    </Typography>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* Business Value Section */}
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
              Measurable <AccentText>Business Value</AccentText>
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
              Real results from institutions using Solara
            </Typography>

            <Grid container spacing={4}>
              {businessValue.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <MetricCard
                    custom={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontWeight: 600,
                        mb: 2,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {item.metric}
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: '3rem',
                        fontWeight: 800,
                        color: item.color,
                        mb: 2,
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </MetricCard>
                </Grid>
              ))}
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
                Ready to Transform Your <AccentText>Learning Experience</AccentText>?
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
                Join thousands of educators and institutions worldwide who are revolutionizing
                education with Solara
              </Typography>
              <CTAButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={actions.openDemoModal}
              >
                Schedule a Demo
              </CTAButton>
            </CTABox>
          </motion.div>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />

      {/* Demo Modal */}
      <DemoModal isOpen={modalStates.demo} onClose={actions.closeDemoModal} />
    </PageWrapper>
  );
}
