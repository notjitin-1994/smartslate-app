export interface Slide {
  id: number;
  type: 'title' | 'content' | 'stats' | 'comparison' | 'timeline';
  headline: string;
  subheadline?: string;
  body?: string[];
  stats?: Array<{ label: string; value: string; icon?: string }>;
  bullets?: string[];
  backgroundGradient?: string;
  emphasis?: string;
  closing?: string;
}

export const slides: Slide[] = [
  // SLIDE 1: TITLE
  {
    id: 1,
    type: 'title',
    headline: 'SMARTSLATE',
    subheadline: 'Revolutionizing the way the World learns',
    backgroundGradient: 'linear-gradient(135deg, #091521 0%, #0d1b2a 100%)',
  },

  // SLIDE 2: THE DEFINING MOMENT
  {
    id: 2,
    type: 'content',
    headline: "India's $1.2 Trillion Opportunity",
    body: [
      'The future of business is being written in India. Right now.',
      '',
      '1.4 billion people. More than half under 30.',
      "The world's fastest-growing major economy.",
      'A generation hungry for opportunity.',
      '',
      'But beneath this promise lurks a crisis that could derail it all.',
    ],
    backgroundGradient: 'linear-gradient(135deg, #020C1B 0%, #0d1b2a 100%)',
  },

  // SLIDE 3: THE TALENT PARADOX
  {
    id: 3,
    type: 'stats',
    headline: "The Talent Paradox: India's Silent Crisis",
    subheadline: '6.5 million graduates. Only 25% industry-ready.',
    stats: [
      { label: 'GDP impact at risk', value: '$1.2 TRILLION', icon: '💰' },
      { label: 'Productivity loss across organizations', value: '30%', icon: '📉' },
      { label: 'Annual growth threatened', value: '2.5%', icon: '⚠️' },
      { label: 'Workforce needs immediate reskilling', value: '40%', icon: '👥' },
    ],
    closing: "This isn't just India's challenge. It's India's moment. And Smartslate is building the infrastructure to seize it.",
    backgroundGradient: 'linear-gradient(135deg, #0d1b2a 0%, #142433 100%)',
  },

  // SLIDE 4: OUR VISION
  {
    id: 4,
    type: 'content',
    headline: 'Personalized Learning That Unlocks Human Potential',
    subheadline: 'A world where every professional has access to learning that adapts to them—not the other way around.',
    bullets: [
      '✓ Learning adapts to the learner',
      '✓ World-class training for every organization',
      '✓ Skills gaps close faster than they emerge',
      '✓ Talent flows seamlessly from classroom to career',
      "✓ India becomes the world's learning laboratory—then exports globally",
    ],
    backgroundGradient: 'linear-gradient(135deg, #142433 0%, #1a2f3f 100%)',
  },

  // SLIDE 5: OUR MISSION
  {
    id: 5,
    type: 'content',
    headline: 'Democratizing World-Class Education Through AI',
    subheadline: 'To bridge the chasm between emerging talent and industry requirements through AI-powered personalization.',
    bullets: [
      '🌟 SOLARA — The future of learning technology (AI-powered learning platform)',
      '🔥 IGNITE — The talent pipeline (Career-ready certification programs)',
      '⚙️ STRATEGIC SKILLS ARCHITECTURE — Custom enterprise solutions (Bespoke learning)',
    ],
    backgroundGradient: 'linear-gradient(135deg, #0d1b2a 0%, #1a2333 100%)',
  },

  // SLIDE 6: MARKET OPPORTUNITY
  {
    id: 6,
    type: 'stats',
    headline: 'A $117 Billion Market Ready for Transformation',
    stats: [
      { label: 'EdTech market by 2026', value: '$117B', icon: '💰' },
      { label: 'Corporate training market', value: '$5.7B', icon: '🏢' },
      { label: 'Internet users', value: '600M+', icon: '📱' },
      { label: 'Population under age 35', value: '65%', icon: '👥' },
      { label: 'Professionals want to learn', value: '94%', icon: '✅' },
      { label: 'Actively self-learning', value: '67%', icon: '📚' },
    ],
    closing: 'The demand is massive. They just need the right platform.',
    backgroundGradient: 'linear-gradient(135deg, #0d1b2a 0%, #152233 100%)',
  },

  // SLIDE 7: INTRODUCING SOLARA
  {
    id: 7,
    type: 'content',
    headline: 'Solara: Not an Improvement. A Replacement.',
    body: [
      'THE PROBLEM:',
      'Corporate learning is broken. Organizations cobble together 7-15 different tools just to design, deliver, and measure a single learning program.',
      '',
      'The result? Fragmented experiences. Disconnected data. Wasted budgets.',
      "Skills now expire every 2.5 years. Organizations can't afford inefficiency anymore.",
      '',
      'THE SOLUTION:',
      'Solara is a singular, intelligent platform engineered to unify every facet of learning design and delivery.',
      'Not just a tool. An intelligent engine for continuous growth.',
    ],
    backgroundGradient: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f4a 100%)',
  },

  // SLIDE 8: SOLARA ECOSYSTEM
  {
    id: 8,
    type: 'timeline',
    headline: 'Six Products. One Complete Learning Infrastructure.',
    bullets: [
      '⭐ POLARIS [LIVE NOW] — AI-Powered Learning Blueprint Generator',
      'CONSTELLATION [Q2 2026] — Content-to-Blueprint Automation',
      'NOVA [Q3 2026] — AI-Assisted Content Authoring',
      'ORBIT [Q4 2026] — Personalized Learning Delivery Platform',
      'NEBULA [Q1 2027] — Intelligent Learning Assistant & Adaptive Tutoring',
      'SPECTRUM [Q2 2027] — Advanced Learning Analytics & Insights Engine',
    ],
    backgroundGradient: 'linear-gradient(135deg, #091521 0%, #1a2f4a 100%)',
  },

  // SLIDE 9: POLARIS
  {
    id: 9,
    type: 'content',
    headline: '⭐ Polaris: From Idea to Learning Blueprint in Minutes',
    subheadline: 'Available NOW at polaris.smartslate.io',
    body: [
      'Translates business goals into comprehensive learning blueprints—complete with executive summaries, learning objectives, KPIs, and success metrics.',
      '',
      'What used to take weeks now takes 2-3 minutes.',
    ],
    bullets: [
      '✓ AI-powered requirement translation',
      '✓ Comprehensive learning blueprints (2-3 minute generation)',
      '✓ Executive summaries, objectives, KPIs',
      '✓ Enterprise-grade security & encryption',
      '✓ Data privacy guarantee',
    ],
    emphasis: 'PRICING: $19/month individuals | $24/seat teams | Custom for enterprises',
    backgroundGradient: 'linear-gradient(135deg, #1a2f4a 0%, #0d1b2a 100%)',
  },

  // SLIDE 10: IGNITE
  {
    id: 10,
    type: 'content',
    headline: '🔥 Ignite: From Campus to Career in Record Time',
    subheadline: 'THE EMPLOYABILITY CRISIS:',
    body: [
      '6.5 million graduates enter workforce annually',
      'Only 1.6 million are actually job-ready',
      '',
      'Universities teach theory. Businesses need application.',
      '',
      'THE IGNITE SOLUTION:',
      'A talent verification and development system designed to bridge the gap.',
    ],
    bullets: [
      '✓ Rigorous, industry-aligned programs',
      '✓ Specific, job-ready skills',
      '✓ Real-world project demonstrations',
      '✓ Ready to contribute from day one',
    ],
    backgroundGradient: 'linear-gradient(135deg, #2a1810 0%, #0d1b2a 100%)',
  },

  // SLIDE 11: HOW IGNITE WORKS
  {
    id: 11,
    type: 'content',
    headline: 'Three Pillars of Verified Talent',
    bullets: [
      '🤝 INDUSTRY-FORGED CURRICULUM',
      'Built in collaboration with industry leaders. Market-driven, skills-focused, project-based, continuously updated.',
      '',
      '🏆 RIGOROUS, EARNED CERTIFICATION',
      'Not given—earned through real-world projects and strict performance standards.',
      '',
      '🔗 SEAMLESS TALENT PIPELINE',
      'Direct connection between verified talent and employers. Pre-vetted candidates with detailed competency profiles.',
    ],
    backgroundGradient: 'linear-gradient(135deg, #2a1810 0%, #1a2333 100%)',
  },

  // SLIDE 12: SSA
  {
    id: 12,
    type: 'content',
    headline: '⚙️ SSA: Built for Your Business DNA',
    subheadline: 'When off-the-shelf training falls short',
    body: [
      'Custom enterprise learning solutions built from the ground up for your organization, your challenges, your goals.',
      '',
      'Not adapted. Not customized. Built exclusively for you.',
    ],
    bullets: [
      '✓ Signature Content Creation — Custom modules for your actual business challenges',
      '✓ Your Intellectual Property — Content remains exclusively yours, forever',
      '✓ Precision Skill Enhancement — Laser-focused on critical skill gaps',
      '✓ Measurable ROI — Track impact on performance metrics',
    ],
    backgroundGradient: 'linear-gradient(135deg, #1a1a3a 0%, #0d1b2a 100%)',
  },

  // SLIDE 13: ECOSYSTEM INTEGRATION
  {
    id: 13,
    type: 'content',
    headline: 'Three Products. One Complete Learning Infrastructure.',
    bullets: [
      'FOR ENTERPRISES:',
      '→ Design and deliver learning at scale with Solara',
      '→ Build custom, proprietary training with SSA',
      '→ Source verified talent through Ignite',
      '',
      'FOR EDUCATIONAL INSTITUTIONS:',
      '→ Improve graduate employability with Ignite partnerships',
      '→ Accelerate curriculum planning with Solara Polaris',
      '',
      'FOR LEARNERS:',
      '→ Get job-ready through Ignite programs',
      '→ Experience personalized learning via Solara',
    ],
    closing: 'Each product makes the others stronger. Each customer makes the platform more valuable.',
    backgroundGradient: 'linear-gradient(135deg, #0d1b2a 0%, #1a2333 100%)',
  },

  // SLIDE 14: COMPETITIVE ADVANTAGES
  {
    id: 14,
    type: 'content',
    headline: 'Why Smartslate Wins',
    bullets: [
      '🤖 AI-NATIVE, NOT BOLTED-ON — Built from the ground up with AI at the core',
      '🎯 OUTCOME-OBSESSED — Every feature evaluated against results',
      '🌏 INDIA-FOCUSED, GLOBALLY SCALABLE — Built for India, architected for global expansion',
      '🔄 ECOSYSTEM THINKING — Integrated platform where each component strengthens the others',
      '💎 QUALITY OVER VOLUME — Rigorous certification that employers trust',
      '🔒 ENTERPRISE-GRADE FROM DAY ONE — Security, compliance, scalability built in',
    ],
    closing: 'Traditional competitors cobble together fragmented tools. Smartslate delivers unified infrastructure.',
    backgroundGradient: 'linear-gradient(135deg, #091521 0%, #1a2f4a 100%)',
  },

  // SLIDE 15: TRACTION
  {
    id: 15,
    type: 'stats',
    headline: 'Real Products. Real Revenue. Real Growth.',
    stats: [
      { label: 'Active Learners', value: '100K+', icon: '📊' },
      { label: 'Enterprise Clients in Pipeline', value: '500+', icon: '🏢' },
      { label: 'Completion Rate on Polaris', value: '95%', icon: '✨' },
      { label: 'Countries Served', value: '50+', icon: '🌍' },
    ],
    bullets: [
      '2025: FOUNDATION — Scale Polaris, Launch Constellation',
      '2026: ACCELERATION — Launch Nova & Orbit, 200K+ users',
      '2027: DOMINANCE — Complete ecosystem, 1M+ learners, 5K+ clients',
    ],
    backgroundGradient: 'linear-gradient(135deg, #0d1b2a 0%, #1a3320 100%)',
  },

  // SLIDE 16: WHY NOW
  {
    id: 16,
    type: 'content',
    headline: "The Perfect Storm: Why This is Smartslate's Moment",
    bullets: [
      "🇮🇳 INDIA'S MOMENT — Fastest-growing economy, massive young population, government push",
      '🚀 TECHNOLOGY MATURITY — AI/ML enables true personalization at scale',
      '📈 MARKET READINESS — Digital learning acceptance at all-time high, talent shortage is C-suite priority',
      "🎯 GAP IN MARKET — No comprehensive, India-focused solution exists. Opportunity for category creation",
    ],
    closing: 'The conditions will never be better. This is our moment to define the category.',
    backgroundGradient: 'linear-gradient(135deg, #0d1b2a 0%, #2a1f10 100%)',
  },

  // SLIDE 17: COMPETITIVE LANDSCAPE
  {
    id: 17,
    type: 'comparison',
    headline: "The Competition: Why They Can't Win",
    body: [
      'TRADITIONAL EDTECH: ❌ Generic, 3-6% completion, no employer integration',
      'CORPORATE LMS: ❌ Rigid legacy tech, poor UX, expensive',
      'POINT SOLUTIONS: ❌ Fragmented, integration nightmares',
      '',
      'SMARTSLATE: THE UNIFIED ALTERNATIVE',
      "✅ India-focused, globally scalable",
      '✅ 95% completion rates',
      '✅ Direct employer partnerships',
      '✅ Modern, AI-native platform',
      '✅ Unified ecosystem, predictable pricing',
    ],
    backgroundGradient: 'linear-gradient(135deg, #1a1010 0%, #0d1b2a 100%)',
  },

  // SLIDE 18: FINANCIAL OPPORTUNITY
  {
    id: 18,
    type: 'stats',
    headline: 'The Path to Unicorn Status',
    stats: [
      { label: 'Indian EdTech Market', value: '$117B', icon: '💰' },
      { label: '2025 ARR Target', value: '$5M', icon: '📈' },
      { label: '2026 ARR Target', value: '$25M', icon: '📈' },
      { label: '2027 ARR Target', value: '$100M+', icon: '🚀' },
    ],
    bullets: [
      'SOLARA: SaaS subscriptions + Enterprise licenses',
      'IGNITE: Enrollment fees + Corporate partnerships',
      'SSA: Custom enterprise pricing + Multi-year contracts',
    ],
    closing: 'Multiple revenue streams. Diversified customer base. Path to $100M+ ARR by 2027.',
    backgroundGradient: 'linear-gradient(135deg, #0d1b2a 0%, #1a3320 100%)',
  },

  // SLIDE 19: THE ASK
  {
    id: 19,
    type: 'content',
    headline: 'Join Us in Building the Future of Learning',
    subheadline: 'FOR INVESTORS:',
    body: [
      "Build the learning infrastructure for the world's fastest-growing economy",
      '',
      'Series A: $10-15M to scale Solara, expand Ignite, build SSA enterprise motion',
      '',
      'THE RETURN: Category-defining company | Unicorn potential | Path to IPO by 2028',
    ],
    bullets: [
      '',
      'FOR PARTNERS: Educational institutions, technology, industry, implementation',
      '',
      'FOR CUSTOMERS: Enterprises, L&D professionals, institutions, learners',
    ],
    emphasis: 'THE TRACTION: 100K+ users | 500+ enterprise pipeline | Live revenue | 95% completion',
    backgroundGradient: 'linear-gradient(135deg, #0d1b2a 0%, #2a1f30 100%)',
  },

  // SLIDE 20: CLOSING
  {
    id: 20,
    type: 'content',
    headline: 'The Future of Learning Starts Here',
    body: [
      'The future of business is being written in India.',
      '',
      'Smartslate exists to solve the Talent Paradox that threatens this future.',
      '',
      "Through Solara, Ignite, and SSA, we're building a complete learning ecosystem—AI-powered, outcome-focused, and built for this moment.",
      '',
      "This isn't incremental improvement. This is transformation.",
    ],
    subheadline: 'SMARTSLATE — Build Your Future-Ready Workforce',
    emphasis: '🔗 smartslate.io | ⭐ polaris.smartslate.io',
    backgroundGradient: 'linear-gradient(135deg, #091521 0%, #1a2f4a 100%)',
  },
];