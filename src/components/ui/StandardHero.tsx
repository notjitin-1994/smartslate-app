import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { ReactNode } from 'react';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: `${theme.spacing(15)} 0 ${theme.spacing(10)}`,
  overflow: 'hidden',
  background: 'linear-gradient(180deg, rgba(167, 218, 219, 0.1) 0%, transparent 50%)',
  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(10)} 0 ${theme.spacing(6)}`,
  },
}));

const AccentText = styled('span')(() => ({
  background: 'linear-gradient(135deg, #a7dadb 0%, #4F46E5 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 700,
}));

interface StandardHeroProps {
  title: string;
  subtitle: string;
  description: string;
  accentWords: string[];
  children?: ReactNode;
}

export default function StandardHero({
  title,
  subtitle,
  description,
  accentWords,
  children
}: StandardHeroProps) {
  const highlightText = (text: string) => {
    let result = text;
    accentWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, '<accent>$1</accent>');
    });

    return result.split('<accent>').map((part, index) => {
      if (accentWords.some(word => part.toLowerCase() === word.toLowerCase())) {
        return <AccentText key={index}>{part}</AccentText>;
      }
      return part;
    });
  };

  return (
    <HeroSection>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'left', maxWidth: '900px' }}>
          <Typography
            variant="body1"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              mb: 2,
              fontSize: '1.125rem',
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              mb: 3,
              lineHeight: 1.1,
            }}
          >
            {highlightText(title)}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.25rem',
              color: 'text.secondary',
              maxWidth: '800px',
              lineHeight: 1.7,
              mb: 4,
            }}
          >
            {highlightText(description)}
          </Typography>
          {children}
        </Box>
      </Container>
    </HeroSection>
  );
}
