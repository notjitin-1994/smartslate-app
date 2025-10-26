import { Box, Container, Typography, Chip, Divider, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import StandardHero from '@/components/ui/StandardHero';
import Footer from '@/components/layout/Footer';

const ContentCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Card
      sx={{
        mb: 3,
        background: 'rgba(26, 26, 26, 0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(167, 218, 219, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 24px rgba(167, 218, 219, 0.15)',
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>{children}</CardContent>
    </Card>
  </motion.div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="h4"
    sx={{
      mb: 2,
      color: 'primary.main',
      fontWeight: 700,
    }}
  >
    {children}
  </Typography>
);

const SectionText = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="body1"
    sx={{
      mb: 2,
      color: 'text.secondary',
      lineHeight: 1.8,
    }}
  >
    {children}
  </Typography>
);

const BulletList = ({ items }: { items: string[] }) => (
  <Box component="ul" sx={{ pl: 3, mb: 2 }}>
    {items.map((item, index) => (
      <Typography
        component="li"
        key={index}
        variant="body1"
        sx={{
          mb: 1,
          color: 'text.secondary',
          lineHeight: 1.8,
        }}
      >
        {item}
      </Typography>
    ))}
  </Box>
);

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 27, 2025";

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <StandardHero
        title="Privacy Policy"
        subtitle="Legal"
        description="Your privacy matters to us. Learn how we collect, use, and protect your personal information."
        accentWords={['Privacy', 'protect']}
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Chip
              label={`Last Updated: ${lastUpdated}`}
              sx={{
                bgcolor: 'rgba(167, 218, 219, 0.1)',
                color: 'primary.main',
                border: '1px solid',
                borderColor: 'primary.main',
                fontWeight: 600,
                px: 2,
                py: 1,
                fontSize: '0.95rem',
              }}
            />
          </Box>
        </motion.div>

        {/* Introduction */}
        <ContentCard delay={0.1}>
          <SectionTitle>1. Introduction</SectionTitle>
          <SectionText>
            Welcome to Smartslate ("we," "our," or "us"). We are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our educational technology platform
            and services.
          </SectionText>
          <SectionText>
            By accessing or using Smartslate, you agree to the collection and use of information in
            accordance with this Privacy Policy. If you do not agree with our policies and practices,
            please do not use our services.
          </SectionText>
        </ContentCard>

        {/* Information We Collect */}
        <ContentCard delay={0.2}>
          <SectionTitle>2. Information We Collect</SectionTitle>
          <SectionText>
            We collect several types of information from and about users of our services:
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            2.1 Personal Information
          </Typography>
          <SectionText>
            Information that identifies you as an individual, including:
          </SectionText>
          <BulletList
            items={[
              'Name, email address, and contact information',
              'Username and password for your account',
              'Profile information and preferences',
              'Educational institution and professional details',
              'Payment and billing information (processed securely through third-party providers)',
            ]}
          />

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            2.2 Usage Information
          </Typography>
          <SectionText>
            Information about how you interact with our platform:
          </SectionText>
          <BulletList
            items={[
              'Course progress, quiz results, and learning activities',
              'Time spent on various features and content',
              'Search queries and content preferences',
              'Device information, IP address, and browser type',
              'Log data and analytics information',
            ]}
          />

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            2.3 User-Generated Content
          </Typography>
          <SectionText>
            Content you create or share on our platform, including notes, assignments, discussions, and
            uploaded files.
          </SectionText>
        </ContentCard>

        {/* How We Use Your Information */}
        <ContentCard delay={0.3}>
          <SectionTitle>3. How We Use Your Information</SectionTitle>
          <SectionText>
            We use the information we collect for various purposes, including:
          </SectionText>
          <BulletList
            items={[
              'Providing, maintaining, and improving our educational services',
              'Personalizing your learning experience and content recommendations',
              'Processing transactions and sending service-related communications',
              'Responding to your inquiries and providing customer support',
              'Analyzing usage patterns to enhance platform functionality',
              'Detecting, preventing, and addressing technical issues and security threats',
              'Complying with legal obligations and enforcing our terms of service',
              'Sending promotional communications (with your consent)',
            ]}
          />
        </ContentCard>

        {/* Information Sharing and Disclosure */}
        <ContentCard delay={0.4}>
          <SectionTitle>4. Information Sharing and Disclosure</SectionTitle>
          <SectionText>
            We do not sell your personal information. We may share your information in the following
            circumstances:
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            4.1 Service Providers
          </Typography>
          <SectionText>
            We work with third-party service providers who perform services on our behalf, such as
            hosting, analytics, payment processing, and customer support. These providers have access to
            your information only to perform specific tasks and are obligated to protect it.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            4.2 Educational Institutions
          </Typography>
          <SectionText>
            If you access Smartslate through an educational institution, we may share relevant progress
            and performance data with authorized personnel at your institution.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            4.3 Legal Requirements
          </Typography>
          <SectionText>
            We may disclose your information if required by law, court order, or governmental regulation,
            or if we believe disclosure is necessary to protect our rights, your safety, or the safety of
            others.
          </SectionText>
        </ContentCard>

        {/* Data Security */}
        <ContentCard delay={0.5}>
          <SectionTitle>5. Data Security</SectionTitle>
          <SectionText>
            We implement industry-standard security measures to protect your personal information from
            unauthorized access, disclosure, alteration, and destruction. These measures include:
          </SectionText>
          <BulletList
            items={[
              'Encryption of data in transit and at rest using SSL/TLS protocols',
              'Regular security assessments and vulnerability testing',
              'Strict access controls and authentication mechanisms',
              'Secure data centers with 24/7 monitoring',
              'Employee training on data privacy and security best practices',
            ]}
          />
          <SectionText>
            However, no method of transmission over the internet or electronic storage is 100% secure.
            While we strive to protect your information, we cannot guarantee its absolute security.
          </SectionText>
        </ContentCard>

        {/* Your Rights and Choices */}
        <ContentCard delay={0.6}>
          <SectionTitle>6. Your Rights and Choices</SectionTitle>
          <SectionText>
            You have the following rights regarding your personal information:
          </SectionText>
          <BulletList
            items={[
              'Access and review your personal information in your account settings',
              'Update or correct inaccurate information',
              'Request deletion of your account and associated data',
              'Opt-out of marketing communications at any time',
              'Export your data in a portable format',
              'Object to certain processing of your information',
              'Lodge a complaint with a data protection authority',
            ]}
          />
          <SectionText>
            To exercise these rights, please contact us at privacy@smartslate.io. We will respond to your
            request within 30 days.
          </SectionText>
        </ContentCard>

        {/* Data Retention */}
        <ContentCard delay={0.7}>
          <SectionTitle>7. Data Retention</SectionTitle>
          <SectionText>
            We retain your personal information for as long as necessary to provide our services and
            fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is
            required by law. When you delete your account, we will delete or anonymize your personal
            information within 90 days, except where we are required to retain it for legal or regulatory
            purposes.
          </SectionText>
        </ContentCard>

        {/* Children's Privacy */}
        <ContentCard delay={0.8}>
          <SectionTitle>8. Children's Privacy</SectionTitle>
          <SectionText>
            Smartslate is designed for users aged 13 and older. We do not knowingly collect personal
            information from children under 13 without verifiable parental consent. If we learn that we
            have collected information from a child under 13 without proper consent, we will delete that
            information promptly. If you believe we have collected information from a child under 13,
            please contact us immediately.
          </SectionText>
        </ContentCard>

        {/* International Data Transfers */}
        <ContentCard delay={0.9}>
          <SectionTitle>9. International Data Transfers</SectionTitle>
          <SectionText>
            Your information may be transferred to and processed in countries other than your country of
            residence. These countries may have data protection laws that differ from your jurisdiction.
            When we transfer your information internationally, we implement appropriate safeguards to
            ensure your data is protected in accordance with this Privacy Policy and applicable laws.
          </SectionText>
        </ContentCard>

        {/* Changes to Privacy Policy */}
        <ContentCard delay={1.0}>
          <SectionTitle>10. Changes to This Privacy Policy</SectionTitle>
          <SectionText>
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technology, legal requirements, or other factors. We will notify you of any material changes by
            posting the updated policy on our website and updating the "Last Updated" date. Your continued
            use of Smartslate after such changes constitutes your acceptance of the updated Privacy Policy.
          </SectionText>
        </ContentCard>

        {/* Contact Information */}
        <ContentCard delay={1.1}>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionText>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data
            practices, please contact us:
          </SectionText>
          <Divider sx={{ my: 3, borderColor: 'rgba(167, 218, 219, 0.2)' }} />
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ color: 'text.primary', mb: 1 }}>
              <strong>Email:</strong> privacy@smartslate.io
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary', mb: 1 }}>
              <strong>Mailing Address:</strong> Smartslate Inc., 123 Education Lane, San Francisco, CA
              94102, USA
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              <strong>Data Protection Officer:</strong> dpo@smartslate.io
            </Typography>
          </Box>
        </ContentCard>
      </Container>

      <Footer />
    </Box>
  );
}
