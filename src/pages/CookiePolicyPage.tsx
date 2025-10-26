import { Box, Container, Typography, Chip, Divider, Card, CardContent, Alert } from '@mui/material';
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

const CookieTypeCard = ({
  title,
  description,
  examples,
  color,
}: {
  title: string;
  description: string;
  examples: string[];
  color: string;
}) => (
  <Box
    sx={{
      p: 3,
      mb: 2,
      borderRadius: 2,
      border: '1px solid',
      borderColor: `${color}`,
      bgcolor: `${color}10`,
      transition: 'all 0.3s ease',
      '&:hover': {
        bgcolor: `${color}20`,
        transform: 'translateX(8px)',
      },
    }}
  >
    <Typography
      variant="h6"
      sx={{
        color: color,
        fontWeight: 700,
        mb: 1,
      }}
    >
      {title}
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
      {description}
    </Typography>
    <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 600, mb: 1, display: 'block' }}>
      Examples:
    </Typography>
    <BulletList items={examples} />
  </Box>
);

export default function CookiePolicyPage() {
  const lastUpdated = "October 27, 2025";

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <StandardHero
        title="Cookie Policy"
        subtitle="Legal"
        description="Learn how we use cookies and similar technologies to improve your experience on Smartslate."
        accentWords={['Cookie', 'technologies']}
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
          <SectionTitle>1. What Are Cookies?</SectionTitle>
          <SectionText>
            Cookies are small text files that are placed on your device (computer, smartphone, or tablet)
            when you visit a website. They are widely used to make websites work more efficiently, provide
            a better user experience, and provide information to website owners.
          </SectionText>
          <SectionText>
            This Cookie Policy explains how Smartslate ("we," "us," or "our") uses cookies and similar
            technologies on our platform and services. By using Smartslate, you consent to the use of
            cookies as described in this policy.
          </SectionText>
          <Alert
            severity="info"
            sx={{
              mt: 3,
              bgcolor: 'rgba(79, 70, 229, 0.1)',
              border: '1px solid rgba(79, 70, 229, 0.3)',
              color: 'text.primary',
            }}
          >
            Cookies help us remember your preferences, understand how you use our platform, and improve
            your learning experience. Most browsers allow you to control cookies through their settings.
          </Alert>
        </ContentCard>

        {/* Types of Cookies */}
        <ContentCard delay={0.2}>
          <SectionTitle>2. Types of Cookies We Use</SectionTitle>
          <SectionText>
            We use several types of cookies on Smartslate, each serving different purposes:
          </SectionText>

          <CookieTypeCard
            title="Essential Cookies"
            description="These cookies are necessary for the platform to function properly. They enable core functionality such as security, network management, and accessibility."
            examples={[
              'Authentication cookies to verify your identity',
              'Session cookies to maintain your login state',
              'Security cookies to prevent fraud and protect your account',
              'Load balancing cookies to distribute traffic across servers',
            ]}
            color="#22c55e"
          />

          <CookieTypeCard
            title="Performance & Analytics Cookies"
            description="These cookies help us understand how visitors interact with our platform by collecting and reporting information anonymously."
            examples={[
              'Google Analytics to track page views and user interactions',
              'Performance monitoring to identify and fix technical issues',
              'A/B testing cookies to optimize features and user experience',
              'Heatmap tracking to understand navigation patterns',
            ]}
            color="#3b82f6"
          />

          <CookieTypeCard
            title="Functional Cookies"
            description="These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings."
            examples={[
              'Language and region preferences',
              'Theme preferences (dark mode/light mode)',
              'Video player settings and playback preferences',
              'Accessibility settings and customizations',
            ]}
            color="#a7dadb"
          />

          <CookieTypeCard
            title="Targeting & Advertising Cookies"
            description="These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns."
            examples={[
              'Retargeting cookies to show relevant ads on other platforms',
              'Social media cookies for sharing and social features',
              'Conversion tracking to measure campaign performance',
              'Interest-based advertising to personalize content',
            ]}
            color="#f59e0b"
          />
        </ContentCard>

        {/* First-Party vs Third-Party */}
        <ContentCard delay={0.3}>
          <SectionTitle>3. First-Party and Third-Party Cookies</SectionTitle>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            3.1 First-Party Cookies
          </Typography>
          <SectionText>
            First-party cookies are set directly by Smartslate and are used to provide essential services
            and improve your experience on our platform. We have full control over these cookies.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            3.2 Third-Party Cookies
          </Typography>
          <SectionText>
            Third-party cookies are set by external services that we use on our platform, such as analytics
            providers, advertising networks, and social media platforms. These cookies are subject to the
            privacy policies of the respective third parties:
          </SectionText>
          <BulletList
            items={[
              'Google Analytics - for website analytics and performance monitoring',
              'Stripe - for payment processing and fraud prevention',
              'Intercom - for customer support and communication',
              'YouTube - for embedded video content',
              'Social media platforms (Facebook, Twitter, LinkedIn) - for social sharing features',
            ]}
          />
        </ContentCard>

        {/* Cookie Duration */}
        <ContentCard delay={0.4}>
          <SectionTitle>4. How Long Cookies Last</SectionTitle>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            4.1 Session Cookies
          </Typography>
          <SectionText>
            Session cookies are temporary and are deleted when you close your browser. They help maintain
            your session as you navigate through our platform.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            4.2 Persistent Cookies
          </Typography>
          <SectionText>
            Persistent cookies remain on your device for a set period (ranging from a few days to several
            years) or until you manually delete them. They help us remember your preferences and provide a
            personalized experience across sessions.
          </SectionText>
        </ContentCard>

        {/* Purpose of Using Cookies */}
        <ContentCard delay={0.5}>
          <SectionTitle>5. Why We Use Cookies</SectionTitle>
          <SectionText>
            We use cookies for several important purposes:
          </SectionText>
          <BulletList
            items={[
              'Authentication: To verify your identity and maintain your login session securely',
              'Security: To protect against fraud, abuse, and unauthorized access',
              'Preferences: To remember your settings, language, and customization choices',
              'Analytics: To understand how users interact with our platform and identify areas for improvement',
              'Performance: To optimize page loading times and ensure smooth functionality',
              'Personalization: To provide tailored content recommendations and learning paths',
              'Marketing: To measure the effectiveness of our campaigns and deliver relevant advertisements',
              'Compliance: To ensure we meet legal and regulatory requirements',
            ]}
          />
        </ContentCard>

        {/* Managing Cookies */}
        <ContentCard delay={0.6}>
          <SectionTitle>6. Managing Your Cookie Preferences</SectionTitle>
          <SectionText>
            You have several options to manage and control cookies on our platform:
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            6.1 Cookie Consent Banner
          </Typography>
          <SectionText>
            When you first visit Smartslate, you'll see a cookie consent banner allowing you to accept or
            customize your cookie preferences. You can change these preferences at any time through your
            account settings.
          </SectionText>

          <Typography variant="h6" sx={{ color: 'primary.light', mt: 3, mb: 2, fontWeight: 600 }}>
            6.2 Browser Settings
          </Typography>
          <SectionText>
            Most web browsers allow you to control cookies through their settings. You can typically:
          </SectionText>
          <BulletList
            items={[
              'View and delete existing cookies',
              'Block all cookies (though this may affect website functionality)',
              'Block third-party cookies only',
              'Clear cookies when you close your browser',
              'Set exceptions for specific websites',
            ]}
          />

          <Alert
            severity="warning"
            sx={{
              mt: 3,
              bgcolor: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: 'text.primary',
            }}
          >
            Important: Blocking or deleting essential cookies may prevent you from accessing certain
            features of Smartslate or impact your overall experience on the platform.
          </Alert>
        </ContentCard>

        {/* Browser-Specific Instructions */}
        <ContentCard delay={0.7}>
          <SectionTitle>7. Browser-Specific Cookie Settings</SectionTitle>
          <SectionText>
            Here's how to manage cookies in popular web browsers:
          </SectionText>

          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ color: 'text.primary', mb: 2, fontWeight: 600 }}>
              Google Chrome:
            </Typography>
            <SectionText>
              Settings → Privacy and security → Cookies and other site data → Manage cookies and site data
            </SectionText>

            <Typography variant="body1" sx={{ color: 'text.primary', mb: 2, fontWeight: 600 }}>
              Mozilla Firefox:
            </Typography>
            <SectionText>
              Settings → Privacy & Security → Cookies and Site Data → Manage Data
            </SectionText>

            <Typography variant="body1" sx={{ color: 'text.primary', mb: 2, fontWeight: 600 }}>
              Safari:
            </Typography>
            <SectionText>
              Preferences → Privacy → Manage Website Data
            </SectionText>

            <Typography variant="body1" sx={{ color: 'text.primary', mb: 2, fontWeight: 600 }}>
              Microsoft Edge:
            </Typography>
            <SectionText>
              Settings → Cookies and site permissions → Manage and delete cookies and site data
            </SectionText>
          </Box>
        </ContentCard>

        {/* Do Not Track */}
        <ContentCard delay={0.8}>
          <SectionTitle>8. Do Not Track Signals</SectionTitle>
          <SectionText>
            Some browsers offer a "Do Not Track" (DNT) signal that you can enable to indicate that you
            don't want to be tracked. However, there is currently no industry standard for how websites
            should respond to DNT signals.
          </SectionText>
          <SectionText>
            While we respect your privacy choices, we do not currently respond to DNT signals. Instead, we
            encourage you to use our cookie consent management tools to control your preferences.
          </SectionText>
        </ContentCard>

        {/* Updates to Policy */}
        <ContentCard delay={0.9}>
          <SectionTitle>9. Changes to This Cookie Policy</SectionTitle>
          <SectionText>
            We may update this Cookie Policy from time to time to reflect changes in our practices,
            technology, legal requirements, or for other operational reasons. We will notify you of any
            material changes by:
          </SectionText>
          <BulletList
            items={[
              'Posting the updated policy on our website',
              'Updating the "Last Updated" date at the top of this page',
              'Sending you an email notification (for significant changes)',
              'Displaying a prominent notice on our platform',
            ]}
          />
          <SectionText>
            We encourage you to review this Cookie Policy periodically to stay informed about how we use
            cookies.
          </SectionText>
        </ContentCard>

        {/* Contact Information */}
        <ContentCard delay={1.0}>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionText>
            If you have any questions, concerns, or requests regarding this Cookie Policy or our use of
            cookies, please contact us:
          </SectionText>
          <Divider sx={{ my: 3, borderColor: 'rgba(167, 218, 219, 0.2)' }} />
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ color: 'text.primary', mb: 1 }}>
              <strong>Email:</strong> privacy@smartslate.io
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary', mb: 1 }}>
              <strong>Cookie Preferences:</strong> Manage your preferences through your{' '}
              <Typography
                component="span"
                sx={{
                  color: 'primary.main',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  '&:hover': { color: 'primary.light' },
                }}
              >
                account settings
              </Typography>
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              <strong>Mailing Address:</strong> Smartslate Inc., 123 Education Lane, San Francisco, CA
              94102, USA
            </Typography>
          </Box>
        </ContentCard>
      </Container>

      <Footer />
    </Box>
  );
}
