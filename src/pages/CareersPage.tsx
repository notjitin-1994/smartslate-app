import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BalanceIcon from '@mui/icons-material/Balance';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SchoolIcon from '@mui/icons-material/School';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StandardHero from '@/components/ui/StandardHero';
import JobApplicationModal from '@/components/careers/JobApplicationModal';
import CultureModal from '@/components/careers/CultureModal';
import { useJobApplicationModal } from '@/hooks/useJobApplicationModal';
import { useCultureModal } from '@/hooks/useCultureModal';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: theme.palette.background.default,
  paddingBottom: theme.spacing(8),
}));

const SectionContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
}));

const ValueCard = styled(motion(Card))(({ theme }) => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 8px 24px rgba(167, 218, 219, 0.15)`,
  },
}));

const BenefitCard = styled(motion(Card))(({ theme }) => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 4px 16px rgba(167, 218, 219, 0.12)`,
  },
}));

const JobCard = styled(Accordion)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px !important',
  marginBottom: theme.spacing(2),
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: `${theme.spacing(2)} 0`,
    borderColor: theme.palette.primary.main,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.main}20 100%)`,
  border: `1px solid ${theme.palette.primary.main}40`,
  marginBottom: theme.spacing(2),
}));

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  equity: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    equity: '0.1% - 0.5%',
    description: 'Join our AI team to build cutting-edge educational technology powered by machine learning and natural language processing.',
    responsibilities: [
      'Design and implement AI-powered learning experiences',
      'Develop and optimize machine learning models for personalized education',
      'Collaborate with product and engineering teams to integrate AI features',
      'Research and experiment with new AI technologies and methodologies',
    ],
    requirements: [
      '3+ years experience in AI/ML engineering',
      'Strong proficiency in Python, TensorFlow, PyTorch, or similar',
      'Experience with NLP and educational technology preferred',
      'MS or PhD in Computer Science, AI, or related field',
    ],
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
    equity: '0.05% - 0.3%',
    description: 'Build scalable, beautiful web applications that empower learners worldwide. Work with modern technologies and help shape the future of education.',
    responsibilities: [
      'Develop and maintain full-stack web applications using React and Node.js',
      'Design and implement RESTful APIs and database schemas',
      'Collaborate with designers to create intuitive user interfaces',
      'Write clean, maintainable code with comprehensive test coverage',
    ],
    requirements: [
      '4+ years full-stack development experience',
      'Expertise in React, TypeScript, Node.js, and modern web technologies',
      'Experience with cloud platforms (AWS, GCP, or Azure)',
      'Strong understanding of web security and performance optimization',
    ],
  },
  {
    id: 'learning-designer',
    title: 'Learning Experience Designer',
    department: 'Product',
    location: 'Remote / Boston',
    type: 'Full-time',
    equity: '0.05% - 0.25%',
    description: 'Create engaging, effective learning experiences that make education accessible and enjoyable for all learners.',
    responsibilities: [
      'Design learning pathways and curriculum structures',
      'Develop engaging educational content and assessments',
      'Conduct user research to understand learner needs',
      'Collaborate with engineering to implement learning features',
    ],
    requirements: [
      '3+ years experience in instructional design or educational technology',
      'Strong understanding of learning theories and pedagogical practices',
      'Experience with UX design and user research methodologies',
      'Portfolio demonstrating successful learning product design',
    ],
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    equity: '0.1% - 0.4%',
    description: 'Lead product strategy and development for our learning platform, working closely with engineering, design, and business teams.',
    responsibilities: [
      'Define product vision and roadmap aligned with business goals',
      'Gather and prioritize product requirements from stakeholders',
      'Work with engineering and design to deliver high-quality features',
      'Analyze product metrics and user feedback to drive improvements',
    ],
    requirements: [
      '5+ years product management experience, preferably in EdTech',
      'Strong analytical and problem-solving skills',
      'Excellent communication and stakeholder management abilities',
      'Technical background or strong technical aptitude',
    ],
  },
];

const values = [
  {
    icon: <GroupsIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Equity & Inclusion',
    description: 'We believe education should be accessible to everyone, regardless of background. Our team reflects the diversity of our learners.',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Innovation & Impact',
    description: 'We push boundaries to create meaningful change in education. Every feature we build has the potential to transform lives.',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Growth Mindset',
    description: 'We embrace challenges and view failures as learning opportunities. Continuous improvement is at our core.',
  },
  {
    icon: <BalanceIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Work-Life Balance',
    description: 'We value sustainable performance. Our team members bring their best selves when they are well-rested and fulfilled.',
  },
];

const benefits = [
  {
    icon: <HealthAndSafetyIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    title: 'Health & Wellness',
    description: 'Comprehensive medical, dental, and vision insurance for you and your family.',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    title: 'Learning Budget',
    description: '$2,000 annual budget for courses, books, conferences, and professional development.',
  },
  {
    icon: <HomeWorkIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    title: 'Remote First',
    description: 'Work from anywhere with flexible hours. We provide a home office setup stipend.',
  },
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    title: 'Competitive Salary',
    description: 'Market-leading compensation with equity participation in our growing company.',
  },
  {
    icon: <CardGiftcardIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    title: 'Generous PTO',
    description: 'Unlimited vacation policy plus company-wide breaks throughout the year.',
  },
  {
    icon: <WorkIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
    title: 'Latest Equipment',
    description: 'MacBook Pro, monitor, and any tools you need to do your best work.',
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const jobModal = useJobApplicationModal();
  const cultureModal = useCultureModal();

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    jobModal.open();
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
    <PageContainer>
      <StandardHero
        title="Build the Future of Learning With Us"
        subtitle="Join a team that values equity, innovation, and results"
        description="We're on a mission to make high-quality education accessible to everyone. Join us in creating the next generation of learning technology."
        accentWords={['Future', 'Learning']}
      >
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
            }}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            View Open Positions
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={cultureModal.open}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.light',
                background: 'rgba(167, 218, 219, 0.1)',
              },
            }}
          >
            Our Culture
          </Button>
        </Stack>
      </StandardHero>

      {/* Company Values Section */}
      <SectionContainer maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Our Values
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            These principles guide everything we do, from product development to team culture.
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <ValueCard variants={itemVariants}>
                  <CardContent sx={{ p: 3 }}>
                    <IconWrapper>{value.icon}</IconWrapper>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </ValueCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Benefits & Perks
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            We invest in our team with comprehensive benefits and perks designed to support your growth and well-being.
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <BenefitCard variants={itemVariants}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        fontSize: '1rem',
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </BenefitCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </SectionContainer>

      {/* Open Positions Section */}
      <SectionContainer maxWidth="lg" id="open-positions">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Open Positions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Join our team and help shape the future of education. We're hiring talented individuals who are passionate about making a difference.
          </Typography>
        </Box>

        <Box>
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <JobCard>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '&:hover': {
                      background: 'rgba(167, 218, 219, 0.05)',
                    },
                  }}
                >
                  <Box sx={{ width: '100%', pr: 2 }}>
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={2}
                      alignItems={{ xs: 'flex-start', sm: 'center' }}
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 0.5,
                          }}
                        >
                          {job.title}
                        </Typography>
                        <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ gap: 1 }}>
                          <Chip
                            icon={<WorkIcon />}
                            label={job.department}
                            size="small"
                            sx={{
                              background: 'rgba(167, 218, 219, 0.1)',
                              border: '1px solid rgba(167, 218, 219, 0.3)',
                            }}
                          />
                          <Chip
                            icon={<LocationOnIcon />}
                            label={job.location}
                            size="small"
                            sx={{
                              background: 'rgba(167, 218, 219, 0.1)',
                              border: '1px solid rgba(167, 218, 219, 0.3)',
                            }}
                          />
                          <Chip
                            icon={<AccessTimeIcon />}
                            label={job.type}
                            size="small"
                            sx={{
                              background: 'rgba(167, 218, 219, 0.1)',
                              border: '1px solid rgba(167, 218, 219, 0.3)',
                            }}
                          />
                        </Stack>
                      </Box>
                    </Stack>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 3 }}>
                  <Box sx={{ px: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.7 }}
                    >
                      {job.description}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}
                    >
                      Responsibilities
                    </Typography>
                    <Box component="ul" sx={{ mb: 3, pl: 2 }}>
                      {job.responsibilities.map((item, idx) => (
                        <Typography
                          component="li"
                          key={idx}
                          variant="body2"
                          sx={{ mb: 1, color: 'text.secondary' }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}
                    >
                      Requirements
                    </Typography>
                    <Box component="ul" sx={{ mb: 3, pl: 2 }}>
                      {job.requirements.map((item, idx) => (
                        <Typography
                          component="li"
                          key={idx}
                          variant="body2"
                          sx={{ mb: 1, color: 'text.secondary' }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>

                    <Stack direction="row" spacing={2} alignItems="center">
                      <Button
                        variant="contained"
                        onClick={() => handleApply(job)}
                        sx={{
                          px: 4,
                          py: 1,
                        }}
                      >
                        Apply Now
                      </Button>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Equity: {job.equity}
                      </Typography>
                    </Stack>
                  </Box>
                </AccordionDetails>
              </JobCard>
            </motion.div>
          ))}
        </Box>

        <Box
          sx={{
            mt: 6,
            p: 4,
            background: 'rgba(167, 218, 219, 0.05)',
            border: '1px solid rgba(167, 218, 219, 0.2)',
            borderRadius: '16px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
            Don't see the right role?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
            We're always looking for talented people. Send us your resume at{' '}
            <Box
              component="a"
              href="mailto:careers@smartslate.io"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              careers@smartslate.io
            </Box>
          </Typography>
        </Box>
      </SectionContainer>

      {/* Modals */}
      {selectedJob && (
        <JobApplicationModal
          isOpen={jobModal.isOpen}
          onClose={jobModal.close}
          jobTitle={selectedJob.title}
          jobDescription={selectedJob.description}
          responsibilities={selectedJob.responsibilities}
          requirements={selectedJob.requirements}
          jobType={selectedJob.type}
          location={selectedJob.location}
          equity={selectedJob.equity}
        />
      )}

      <CultureModal isOpen={cultureModal.isOpen} onClose={cultureModal.close} />
    </PageContainer>
  );
}
