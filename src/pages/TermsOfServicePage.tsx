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

export default function TermsOfServicePage() {
  const lastUpdated = "October 27, 2025";

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <StandardHero
        title="Terms of Service"
        subtitle="Legal"
        description="Please read these terms carefully before using our educational platform and services."
        accentWords={['Terms', 'Service']}
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

        {/* Agreement to Terms */}
        <ContentCard delay={0.1}>
          <SectionTitle>1. Agreement to Terms</SectionTitle>
          <SectionText>
            These Terms of Service ("Terms") constitute a legally binding agreement between you and
            Smartslate Inc. ("Smartslate," "we," "us," or "our") governing your access to and use of the
            Smartslate platform, website, mobile applications, and related services (collectively, the
            "Services").
          </SectionText>
          <SectionText>
            By accessing or using our Services, you acknowledge that you have read, understood, and agree
            to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may
            not access or use the Services.
          </SectionText>
        </ContentCard>

        {/* Eligibility */}
        <ContentCard delay={0.2}>
          <SectionTitle>2. Eligibility</SectionTitle>
          <SectionText>
            You must be at least 13 years old to use Smartslate. If you are between 13 and 18 years old
            (or the age of majority in your jurisdiction), you represent that you have reviewed these Terms
            with your parent or legal guardian and they agree to these Terms on your behalf.
          </SectionText>
          <SectionText>
            By using our Services, you represent and warrant that you have the legal capacity to enter into
            a binding agreement and meet all eligibility requirements. If you are using the Services on
            behalf of an organization, you represent that you have the authority to bind that organization
            to these Terms.
          </SectionText>
        </ContentCard>

        {/* User Accounts */}
        <ContentCard delay={0.3}>
          <SectionTitle>3. User Accounts</SectionTitle>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            3.1 Account Creation
          </Typography>
          <SectionText>
            To access certain features of the Services, you must create an account. You agree to provide
            accurate, current, and complete information during registration and to update such information
            to keep it accurate.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            3.2 Account Security
          </Typography>
          <SectionText>
            You are responsible for maintaining the confidentiality of your account credentials and for all
            activities that occur under your account. You must:
          </SectionText>
          <BulletList
            items={[
              'Use a strong, unique password',
              'Not share your account credentials with others',
              'Notify us immediately of any unauthorized access or security breach',
              'Log out from your account at the end of each session',
            ]}
          />

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            3.3 Account Termination
          </Typography>
          <SectionText>
            We reserve the right to suspend or terminate your account if you violate these Terms or engage
            in conduct that we deem inappropriate or harmful to the Services or other users.
          </SectionText>
        </ContentCard>

        {/* Acceptable Use */}
        <ContentCard delay={0.4}>
          <SectionTitle>4. Acceptable Use Policy</SectionTitle>
          <SectionText>
            You agree to use the Services only for lawful purposes and in accordance with these Terms. You
            agree NOT to:
          </SectionText>
          <BulletList
            items={[
              'Violate any applicable laws, regulations, or third-party rights',
              'Upload or transmit viruses, malware, or other malicious code',
              'Attempt to gain unauthorized access to our systems or other users\' accounts',
              'Interfere with or disrupt the Services or servers',
              'Use automated systems (bots, scrapers) without our written permission',
              'Impersonate others or misrepresent your affiliation with any person or entity',
              'Harass, abuse, threaten, or intimidate other users',
              'Post or share content that is illegal, offensive, or infringes on others\' rights',
              'Share or distribute course content without proper authorization',
              'Use the Services for any commercial purpose without our consent',
            ]}
          />
        </ContentCard>

        {/* Intellectual Property */}
        <ContentCard delay={0.5}>
          <SectionTitle>5. Intellectual Property Rights</SectionTitle>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            5.1 Our Content
          </Typography>
          <SectionText>
            The Services and all content, features, and functionality (including but not limited to text,
            graphics, logos, images, videos, software, and design) are owned by Smartslate or our licensors
            and are protected by copyright, trademark, patent, and other intellectual property laws.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            5.2 Limited License
          </Typography>
          <SectionText>
            We grant you a limited, non-exclusive, non-transferable, revocable license to access and use
            the Services for your personal, non-commercial educational purposes. You may not copy,
            reproduce, distribute, modify, or create derivative works from our content without our express
            written permission.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            5.3 User Content
          </Typography>
          <SectionText>
            You retain ownership of any content you create, upload, or share through the Services ("User
            Content"). By submitting User Content, you grant Smartslate a worldwide, non-exclusive,
            royalty-free license to use, reproduce, modify, and display your content solely for the purpose
            of providing and improving the Services.
          </SectionText>
        </ContentCard>

        {/* Payment and Subscriptions */}
        <ContentCard delay={0.6}>
          <SectionTitle>6. Payment and Subscriptions</SectionTitle>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            6.1 Paid Services
          </Typography>
          <SectionText>
            Some features of the Services require payment. By purchasing a subscription or paid service,
            you agree to pay the fees specified at the time of purchase. All fees are non-refundable except
            as required by law or as explicitly stated in our refund policy.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            6.2 Billing and Renewals
          </Typography>
          <SectionText>
            Subscriptions automatically renew at the end of each billing period unless you cancel before
            the renewal date. We will charge your payment method on file for the renewal. You can cancel
            your subscription at any time through your account settings.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            6.3 Price Changes
          </Typography>
          <SectionText>
            We reserve the right to modify our pricing. We will provide advance notice of any price changes
            and give you the opportunity to cancel your subscription before the new pricing takes effect.
          </SectionText>
        </ContentCard>

        {/* Disclaimers and Warranties */}
        <ContentCard delay={0.7}>
          <SectionTitle>7. Disclaimers and Warranties</SectionTitle>
          <SectionText>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
            FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </SectionText>
          <SectionText>
            We do not warrant that the Services will be uninterrupted, error-free, or completely secure. We
            make no guarantees about the accuracy, completeness, or reliability of any content on the
            platform. Your use of the Services is at your own risk.
          </SectionText>
        </ContentCard>

        {/* Limitation of Liability */}
        <ContentCard delay={0.8}>
          <SectionTitle>8. Limitation of Liability</SectionTitle>
          <SectionText>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, SMARTSLATE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND
            AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY
            LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
          </SectionText>
          <BulletList
            items={[
              'Your use or inability to use the Services',
              'Any unauthorized access to or use of your data',
              'Any interruption or cessation of the Services',
              'Any bugs, viruses, or harmful code transmitted through the Services',
              'Any errors or omissions in content',
              'Any conduct or content of third parties on the Services',
            ]}
          />
          <SectionText>
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE
            (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR $100, WHICHEVER IS GREATER.
          </SectionText>
        </ContentCard>

        {/* Indemnification */}
        <ContentCard delay={0.9}>
          <SectionTitle>9. Indemnification</SectionTitle>
          <SectionText>
            You agree to indemnify, defend, and hold harmless Smartslate and its affiliates, officers,
            directors, employees, agents, and licensors from and against any claims, liabilities, damages,
            losses, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to:
          </SectionText>
          <BulletList
            items={[
              'Your use of the Services',
              'Your violation of these Terms',
              'Your violation of any rights of another party',
              'Your User Content',
            ]}
          />
        </ContentCard>

        {/* Dispute Resolution */}
        <ContentCard delay={1.0}>
          <SectionTitle>10. Dispute Resolution</SectionTitle>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            10.1 Informal Resolution
          </Typography>
          <SectionText>
            If you have any dispute with us, you agree to first contact us at legal@smartslate.io and
            attempt to resolve the dispute informally for at least 30 days before initiating any formal
            proceedings.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            10.2 Arbitration
          </Typography>
          <SectionText>
            Any dispute that cannot be resolved informally shall be resolved through binding arbitration in
            accordance with the rules of the American Arbitration Association. The arbitration shall take
            place in San Francisco, California, and judgment on the award may be entered in any court
            having jurisdiction.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            10.3 Class Action Waiver
          </Typography>
          <SectionText>
            You agree that any proceedings to resolve disputes shall be conducted on an individual basis
            and not as part of a class, consolidated, or representative action.
          </SectionText>
        </ContentCard>

        {/* General Provisions */}
        <ContentCard delay={1.1}>
          <SectionTitle>11. General Provisions</SectionTitle>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            11.1 Governing Law
          </Typography>
          <SectionText>
            These Terms shall be governed by and construed in accordance with the laws of the State of
            California, without regard to its conflict of law provisions.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            11.2 Changes to Terms
          </Typography>
          <SectionText>
            We reserve the right to modify these Terms at any time. We will notify you of material changes
            via email or through the Services. Your continued use after such changes constitutes acceptance
            of the updated Terms.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            11.3 Severability
          </Typography>
          <SectionText>
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall
            be limited or eliminated to the minimum extent necessary, and the remaining provisions shall
            remain in full force and effect.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            11.4 Entire Agreement
          </Typography>
          <SectionText>
            These Terms, together with our Privacy Policy and any other legal notices published by us,
            constitute the entire agreement between you and Smartslate regarding the Services.
          </SectionText>
        </ContentCard>

        {/* Contact Information */}
        <ContentCard delay={1.2}>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionText>
            If you have any questions or concerns about these Terms of Service, please contact us:
          </SectionText>
          <Divider sx={{ my: 3, borderColor: 'rgba(167, 218, 219, 0.2)' }} />
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ color: 'text.primary', mb: 1 }}>
              <strong>Email:</strong> legal@smartslate.io
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary', mb: 1 }}>
              <strong>Mailing Address:</strong> Smartslate Inc., 123 Education Lane, San Francisco, CA
              94102, USA
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              <strong>Phone:</strong> +1 (415) 555-0123
            </Typography>
          </Box>
        </ContentCard>
      </Container>

      <Footer />
    </Box>
  );
}
