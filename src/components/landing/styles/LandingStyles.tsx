import { styled } from '@mui/material/styles';
import { Box, Chip, Button, Card } from '@mui/material';

export const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export const SectionWrapper = styled(Box)(() => ({
  position: 'relative',
  overflow: 'hidden',
  '&.visible': {
    opacity: 1,
  },
}));

export const ContentCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: `1px solid rgba(255, 255, 255, 0.08)`,
  borderRadius: '20px',
  padding: theme.spacing(4),
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    borderColor: 'rgba(167, 218, 219, 0.2)',
    boxShadow: '0 12px 40px rgba(167, 218, 219, 0.15)',
  },
}));

export const PrimaryButton = styled(Button)(() => ({
  background: 'linear-gradient(135deg, #a7dadb 0%, #4F46E5 100%)',
  color: '#000000',
  fontWeight: 700,
  padding: '12px 32px',
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 14px rgba(167, 218, 219, 0.4)',
  '&:hover': {
    background: 'linear-gradient(135deg, #c5e8e9 0%, #6366F1 100%)',
    boxShadow: '0 6px 20px rgba(167, 218, 219, 0.6)',
    transform: 'translateY(-2px)',
  },
  '&:disabled': {
    background: 'rgba(167, 218, 219, 0.3)',
    color: 'rgba(0, 0, 0, 0.5)',
  },
}));

export const AccentText = styled('span')(() => ({
  background: 'linear-gradient(135deg, #a7dadb 0%, #4F46E5 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 700,
}));

export const AnimatedChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(167, 218, 219, 0.15)',
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  fontWeight: 600,
  fontSize: '0.875rem',
  padding: '8px 16px',
  height: 'auto',
}));

export const StatCard = styled(ContentCard)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  minHeight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StatNumber = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 700,
  background: 'linear-gradient(135deg, #a7dadb 0%, #4F46E5 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: theme.spacing(1),
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
}));

export const Section = SectionWrapper;

export const BackgroundVariants = {
  primary: {
    background: 'linear-gradient(180deg, rgba(167, 218, 219, 0.05) 0%, transparent 100%)',
  },
  secondary: {
    background: 'linear-gradient(180deg, rgba(79, 70, 229, 0.05) 0%, transparent 100%)',
  },
};
