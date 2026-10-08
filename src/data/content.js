/**
 * Centralized Content & Configuration
 * 
 * Separating all content and copy from presentation components ensures that
 * non-technical team members or a Headless CMS (Sanity, Strapi, Contentful, MDX)
 * can plug in without refactoring UI components.
 */

export const siteConfig = {
  name: "WonderQuest",
  fullName: "WonderQuest: Little Explorer",
  tagline: "Where Curious Young Minds Learn, Laugh & Explore",
  description: "An award-winning, 100% ad-free educational adventure game for children aged 3–8. Built with pediatric educators to spark creativity, logic, and phonics.",
  targetAge: "Ages 3–8",
  rating: "4.9",
  reviewCount: "12,400+",
  downloads: "500K+",
  appStoreUrl: "https://apps.apple.com",
  playStoreUrl: "https://play.google.com",
  demoVideoMp4: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  demoVideoYoutube: "https://www.youtube-nocookie.com/embed/jfKfPfyJRdk",
};

export const heroData = {
  badge: "✨ Nominated Best Kids Learning Game of 2026",
  headline: "Where Curious Minds Learn, Laugh & Explore",
  highlightWords: ["Learn,", "Laugh", "& Explore"],
  subheadline: "An enchanting, 100% ad-free adventure world for ages 3–8. Designed with child development specialists to nurture early phonics, problem solving, and creativity—with zero screen-time guilt.",
  primaryCtaText: "Start Free 7-Day Journey",
  secondaryCtaText: "Watch Gameplay (1:30m)",
  trustBadges: [
    { label: "100% Ad-Free", icon: "ShieldCheck" },
    { label: "COPPA & GDPR-K Certified", icon: "Lock" },
    { label: "Teacher Approved", icon: "GraduationCap" },
    { label: "Offline Play Ready", icon: "WifiOff" },
  ],
  stats: [
    { value: "4.9 ★", label: "App Store Rating" },
    { value: "500k+", label: "Happy Little Explorers" },
    { value: "100%", label: "Safe & Ad-Free" },
  ]
};

export const aboutData = {
  sectionTag: "Our Magical World",
  title: "A Story-Rich Wonderland Designed for Gentle Growth",
  description: "Traditional apps often rely on flashing lights and overstimulation. WonderQuest takes the opposite approach: a warm, storybook universe that fosters patience, curiosity, and authentic accomplishment.",
  targetAgeDetail: "Carefully calibrated for toddlers, preschoolers, and early elementary learners (Ages 3 to 8) with adaptive difficulty that grows with your child.",
  storyLore: "Deep inside the Archipelago of Wonder, four unique realms invite little explorers to solve environmental puzzles, rescue friendly forest creatures, and discover the joy of letters, numbers, and art.",
  characters: [
    {
      id: "pippin",
      name: "Pippin the Rabbit",
      role: "The Courageous Explorer",
      trait: "Leads curiosity quests & number puzzles",
      color: "from-amber-400 to-orange-500",
      bgLight: "bg-amber-50 border-amber-200 text-amber-900",
      badge: "Logic & Math",
      soundEffect: "Boing! Let's explore!",
    },
    {
      id: "luna",
      name: "Luna the Red Fox",
      role: "The Creative Painter",
      trait: "Guides colors, patterns & open-ended art",
      color: "from-rose-400 to-pink-500",
      bgLight: "bg-rose-50 border-rose-200 text-rose-900",
      badge: "Art & Creativity",
      soundEffect: "Every color has a story!",
    },
    {
      id: "barnaby",
      name: "Barnaby the Bear",
      role: "The Gentle Astronomer",
      trait: "Unlocks phonics, constellations & rhymes",
      color: "from-sky-400 to-blue-500",
      bgLight: "bg-sky-50 border-sky-200 text-sky-900",
      badge: "Reading & Phonics",
      soundEffect: "Listen closely to the gentle wind!",
    },
    {
      id: "spark",
      name: "Spark the Firefly",
      role: "The Empathy Companion",
      trait: "Helps calm emotions & gentle breathing",
      color: "from-emerald-400 to-teal-500",
      bgLight: "bg-emerald-50 border-emerald-200 text-emerald-900",
      badge: "Social & Emotional",
      soundEffect: "Take a deep breath and glow bright!",
    },
  ],
  pillars: [
    {
      title: "Story-Driven Quests",
      description: "No repetitive rote drills. Every activity is woven into wholesome bedtime-friendly quests.",
      icon: "BookOpen",
    },
    {
      title: "Adaptive Pacing",
      description: "Challenges intelligently adjust so children never feel frustrated or bored.",
      icon: "Sparkles",
    },
    {
      title: "Calm Sensory Design",
      description: "Muted pastel tones and gentle acoustic soundscapes protect developing sensory systems.",
      icon: "HeartHandshake",
    },
  ]
};

export const featuresData = {
  sectionTag: "Core Learning Features",
  title: "Everything Little Explorers Need to Thrive",
  subtitle: "Every mini-game is thoughtfully architected around early childhood learning standards, wrapped in pure interactive delight.",
  ageFilterTabs: [
    { id: "all", label: "All Activities" },
    { id: "preschool", label: "Ages 3–4 (Sprouts)" },
    { id: "kindergarten", label: "Ages 5–6 (Explorers)" },
    { id: "elementary", label: "Ages 7–8 (Navigators)" },
  ],
  items: [
    {
      id: "problem-solving",
      title: "Joyful Problem Solving",
      ageCategory: "all",
      badge: "Cognitive Logic",
      description: "Tangram puzzles, spatial sorting, and gentle cause-and-effect mazes that stimulate spatial reasoning without stressful time limits.",
      color: "from-amber-400 to-orange-400",
      accentBg: "bg-amber-100 text-amber-800",
      icon: "Puzzle",
      benefit: "Develops flexible thinking & patience",
    },
    {
      id: "phonics-rhymes",
      title: "Phonics & Story Worlds",
      ageCategory: "kindergarten",
      badge: "Early Literacy",
      description: "Interactive syllable gardens, letter tracing with starlight trails, and narrations by voice actors in warm, soothing tones.",
      color: "from-sky-400 to-blue-500",
      accentBg: "bg-sky-100 text-sky-800",
      icon: "BookMarked",
      benefit: "Builds phonemic awareness & vocabulary",
    },
    {
      id: "creative-canvas",
      title: "Open Creative Canvas",
      ageCategory: "all",
      badge: "Art & Music",
      description: "Freeform digital finger-painting, sticker collages, and xylophone melody creation that saves high-resolution artwork to parents' gallery.",
      color: "from-pink-400 to-rose-500",
      accentBg: "bg-pink-100 text-pink-800",
      icon: "Palette",
      benefit: "Fosters self-expression & motor coordination",
    },
    {
      id: "safe-bubble",
      title: "100% Ad-Free Safe Bubble",
      ageCategory: "all",
      badge: "Parent Certified",
      description: "Zero external ad networks, zero pop-ups, no tracking cookies, and locked adult gates protecting all account settings.",
      color: "from-emerald-400 to-teal-500",
      accentBg: "bg-emerald-100 text-emerald-800",
      icon: "ShieldAlert",
      benefit: "Uncompromised digital safety guaranteed",
    },
    {
      id: "daily-star-rewards",
      title: "Gentle Star Milestones",
      ageCategory: "elementary",
      badge: "Positive Reinforcement",
      description: "Celebratory badges and customizable stickers celebrate effort rather than speed. No toxic streak mechanics or FOMO traps.",
      color: "from-purple-400 to-indigo-500",
      accentBg: "bg-purple-100 text-purple-800",
      icon: "Trophy",
      benefit: "Cultivates intrinsic motivation & confidence",
    },
    {
      id: "offline-play",
      title: "Full Offline Playability",
      ageCategory: "preschool",
      badge: "Travel Friendly",
      description: "Download once and play anywhere. Zero internet connection required for airplanes, road trips, visits to grandparents, or camping.",
      color: "from-cyan-400 to-blue-600",
      accentBg: "bg-cyan-100 text-cyan-800",
      icon: "Plane",
      benefit: "Flawless performance anywhere, anytime",
    },
  ]
};

export const galleryData = {
  sectionTag: "Screenshots & Gameplay",
  title: "See WonderQuest in Action",
  subtitle: "Peek inside the vibrant interactive landscapes. Designed with tactile responsive controls optimized for both little fingers on phones and expansive tablet screens.",
  screenshots: [
    {
      id: "screen-1",
      title: "Pippin's Number Meadow",
      tag: "Math & Counting",
      caption: "Count glowing fireflies and feed hungry river otters in intuitive interactive arithmetic puzzles.",
      bgGradient: "from-emerald-300 via-teal-200 to-sky-200",
      accentColor: "#10b981",
      previewType: "counting",
    },
    {
      id: "screen-2",
      title: "The Star Constellation Lab",
      tag: "STEM & Logic",
      caption: "Connect celestial stars to form friendly animal constellations while practicing letter shapes.",
      bgGradient: "from-indigo-900 via-purple-900 to-blue-900",
      accentColor: "#8b5cf6",
      previewType: "constellation",
    },
    {
      id: "screen-3",
      title: "Luna's Rainbow Studio",
      tag: "Art & Colors",
      caption: "Mix vibrant watercolors without any real-world mess! Explore shades, textures, and stamps.",
      bgGradient: "from-rose-300 via-amber-200 to-pink-200",
      accentColor: "#f43f5e",
      previewType: "art",
    },
    {
      id: "screen-4",
      title: "The Musical Breeze Grove",
      tag: "Rhythm & Music",
      caption: "Tap singing raindrops and wind chimes to compose sweet lullabies and discover harmonic pitch.",
      bgGradient: "from-sky-300 via-cyan-200 to-teal-100",
      accentColor: "#0284c7",
      previewType: "music",
    },
    {
      id: "screen-5",
      title: "Bedtime Breathing Tree",
      tag: "Calm & Wellness",
      caption: "Sync breathing with glowing leaves to gently unwind nervous energy before sleep time.",
      bgGradient: "from-violet-400 via-purple-300 to-indigo-300",
      accentColor: "#7c3aed",
      previewType: "breathing",
    },
  ]
};

export const parentBenefitsData = {
  sectionTag: "Designed For Parents' Peace Of Mind",
  title: "Guaranteed Screen Time You Can Feel Proud Of",
  subtitle: "We are parents ourselves. We built WonderQuest to solve the exact frustrations we experienced with modern children's apps.",
  benefits: [
    {
      id: "safety-compliance",
      title: "Strict COPPA & GDPR-K Compliance",
      description: "We strictly never collect biometric data, personal names, locations, or voice recordings. Your child's privacy is non-negotiable.",
      icon: "ShieldCheck",
      metric: "0 Trackers",
      highlight: "Certified Kid-Safe Seal",
    },
    {
      id: "bedtime-timer",
      title: "Meltdown-Free Screen Timer",
      description: "Set a custom play timer (e.g., 20 minutes). When time is up, Pippin cuddles into bed with a soothing bedtime lullaby instead of an abrupt cutoff.",
      icon: "Clock",
      metric: "Gentle Wind-down",
      highlight: "No Sudden Tears",
    },
    {
      id: "parent-dashboard",
      title: "Actionable Learning Insights",
      description: "Receive a private weekly digest highlighting the skills your child practiced—phonics mastered, puzzle levels solved, and creative styles explored.",
      icon: "BarChart3",
      metric: "Weekly Digest",
      highlight: "Zero Fluff",
    },
    {
      id: "no-microtransactions",
      title: "No In-App Traps or Ads",
      description: "No paywalls mid-game, no fake gems, and no accidental purchases. Adult security gates require solving multi-step text prompts to access billing.",
      icon: "CreditCard",
      metric: "Zero Surprise Charges",
      highlight: "100% Transparent",
    },
    {
      id: "multi-profile",
      title: "Up to 4 Child Profiles",
      description: "Have children of different ages? Each sibling gets their own personalized explorer avatar and independent learning trajectory under one single license.",
      icon: "Users",
      metric: "Family Friendly",
      highlight: "Multi-Child Support",
    },
    {
      id: "pediatric-review",
      title: "Early Childhood Educator Reviewed",
      description: "Curriculum developed alongside licensed speech therapists and Montessori practitioners to reinforce real-world developmental milestones.",
      icon: "Award",
      metric: "Montessori-Aligned",
      highlight: "Expert Approved",
    },
  ]
};

export const testimonialsData = {
  sectionTag: "Parent & Teacher Love",
  title: "Trusted by Over 500,000 Families Worldwide",
  subtitle: "Read unfiltered feedback from mothers, fathers, homeschoolers, and early learning educators.",
  ratingOverview: {
    score: "4.9",
    totalReviews: "12,400+ reviews",
    recommendationRate: "98% of parents recommend to friends",
  },
  reviews: [
    {
      id: "rev-1",
      name: "Dr. Elena Vasquez, Ph.D.",
      role: "Pediatric Neuropsychologist & Mom of 2",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      childAge: "Kids ages 4 & 6",
      headline: "The only app I wholeheartedly recommend to my patients.",
      quote: "Most games designed for young children flood their brains with high-frequency dopamine loops. WonderQuest does the exact opposite: it encourages sustained focus, deep curiosity, and emotional calm.",
      verified: true,
      location: "Seattle, WA",
    },
    {
      id: "rev-2",
      name: "Marcus Sterling",
      role: "Software Architect & Dad of 3-year-old Leo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      childAge: "Son age 3.5",
      headline: "The bedtime wind-down timer saved our evenings.",
      quote: "Previous apps led to screaming matches when we had to turn off the iPad. With WonderQuest, Pippin the bunny yawns, gets into his hammock, and my son smiles and says 'Goodnight Pippin!' No meltdowns whatsoever.",
      verified: true,
      location: "Austin, TX",
    },
    {
      id: "rev-3",
      name: "Claire Dupont",
      role: "Montessori Kindergarten Educator",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      childAge: "Classroom of 18 kids (ages 4–6)",
      headline: "Beautiful, tactile, and respects a child's natural pace.",
      quote: "We use WonderQuest during our independent exploration stations. The open art canvas and phonics islands allow children to self-correct naturally without any punitive red buzzers.",
      verified: true,
      location: "Montreal, Canada",
    },
    {
      id: "rev-4",
      name: "David & Sarah Chen",
      role: "Frequent Traveling Family",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      childAge: "Daughter age 5",
      headline: "A lifesaver on 12-hour flights without Wi-Fi.",
      quote: "Finding high-quality, completely offline educational content that doesn't constantly bug you for in-app credit cards is nearly impossible today. WonderQuest is worth every single penny.",
      verified: true,
      location: "San Francisco, CA",
    },
  ]
};

export const faqData = {
  sectionTag: "Got Questions?",
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know about safety, subscriptions, devices, and child privacy.",
  items: [
    {
      id: "faq-1",
      question: "What age range is WonderQuest best designed for?",
      answer: "WonderQuest is specifically engineered for children aged 3 to 8 years old. When you create a child profile, the app dynamically calibrates difficulty across three tiers: Sprouts (ages 3–4: tactile sensory matching and spoken prompts), Explorers (ages 5–6: early phonics and arithmetic), and Navigators (ages 7–8: logic puzzles and reading adventures).",
    },
    {
      id: "faq-2",
      question: "Is the app truly 100% ad-free and safe from third-party tracking?",
      answer: "Yes, unconditionally. We are independently certified by the KidSAFE Seal Program and strictly comply with COPPA (Children's Online Privacy Protection Act) and GDPR-K regulations. We do not display third-party advertisements, do not run marketing tracking pixels, and never collect or sell your child's personal information.",
    },
    {
      id: "faq-3",
      question: "Can my child play when offline or in airplane mode?",
      answer: "Absolutely! Once downloaded, all core game worlds, audio stories, and creative labs operate entirely offline without an internet connection. It is ideal for road trips, airplane flights, camping, or doctor waiting rooms.",
    },
    {
      id: "faq-4",
      question: "How does the gentle screen-time timer prevent tantrums?",
      answer: "Traditional timers abruptly freeze the screen with a harsh popup, which triggers understandable frustration. WonderQuest features an organic 'Wind-Down Mode.' Parents can set a session limit (e.g., 15 or 30 minutes). When 3 minutes remain, twilight softly descends on the island, the background music slows into an acoustic lullaby, and the animal pals cuddle into bed. Children feel closure rather than an abrupt shutdown.",
    },
    {
      id: "faq-5",
      question: "Which devices and operating systems are supported?",
      answer: "WonderQuest is fully optimized for iOS devices (iPhones running iOS 14+ and iPads running iPadOS 14+) as well as Android devices (phones and tablets running Android 9.0+). We also support Amazon Fire Kids tablets (2021 models and newer).",
    },
    {
      id: "faq-6",
      question: "Can I share one family account across multiple devices and kids?",
      answer: "Yes. A single family subscription includes up to 4 individual child profiles, each with their own distinct avatar, milestone sticker book, and difficulty curve. Apple Family Sharing and Google Play Family Library are both fully supported.",
    },
    {
      id: "faq-7",
      question: "How does the free trial work and can I cancel anytime?",
      answer: "We offer an unrestricted 7-day free trial so your family can explore all islands and activities. If you decide it's not the right fit, you can cancel in one click directly through your Apple ID or Google Play account settings before the trial ends without being charged.",
    },
    {
      id: "faq-8",
      question: "How can parents get in touch with your curriculum team?",
      answer: "We love hearing from parents and educators! You can reach our dedicated family support and curriculum team anytime via our contact form below or by emailing hello@wonderquestgame.com. We typically respond within 24 business hours.",
    },
  ]
};

export const contactData = {
  sectionTag: "Get In Touch",
  title: "We'd Love to Hear From Your Family",
  subtitle: "Have a question about classroom licensing, curriculum feedback, or need technical help? Send us a message.",
  subjects: [
    { value: "general", label: "General Question" },
    { value: "support", label: "Technical Support" },
    { value: "schools", label: "School & Kindergarten Licensing" },
    { value: "feedback", label: "Feature Idea / Game Suggestion" },
    { value: "press", label: "Press & Media Inquiries" },
  ],
  ageOptions: [
    { value: "under-3", label: "Under 3 years" },
    { value: "3-4", label: "Ages 3–4 (Preschool)" },
    { value: "5-6", label: "Ages 5–6 (Kindergarten)" },
    { value: "7-8", label: "Ages 7–8 (Early Elementary)" },
    { value: "educator", label: "I am an Educator / Teacher" },
  ],
  supportEmail: "support@wonderquestgame.com",
  officeHours: "Monday – Friday, 9:00 AM – 6:00 PM EST",
  responseGuarantee: "Guaranteed human response within 24 hours",
};

export const footerData = {
  quickLinks: [
    { label: "About the World", href: "#about" },
    { label: "Learning Features", href: "#features" },
    { label: "Gameplay Screenshots", href: "#gallery" },
    { label: "Benefits for Parents", href: "#parents" },
    { label: "Parent Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Parent Blog", href: "/blog" },
  ],
  legalLinks: [
    { label: "Privacy Policy", id: "privacy" },
    { label: "Terms of Service", id: "terms" },
    { label: "COPPA & Kid-Safety", id: "coppa" },
    { label: "Parental Consent", id: "consent" },
  ],
  socials: [
    { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
    { name: "YouTube", url: "https://youtube.com", icon: "Youtube" },
    { name: "Pinterest", url: "https://pinterest.com", icon: "Share2" },
    { name: "Twitter/X", url: "https://twitter.com", icon: "Twitter" },
  ],
  badges: [
    "COPPA Certified",
    "KidSAFE Seal",
    "Teacher Approved",
    "Zero In-App Ads",
  ],
  copyright: `© ${new Date().getFullYear()} WonderQuest Studios Inc. All rights reserved.`,
  disclaimer: "Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC."
};
