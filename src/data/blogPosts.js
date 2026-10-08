/**
 * Sample Blog Posts & CMS Data Structure
 * 
 * Ready to be connected to Headless CMS (Sanity, Strapi, Contentful) or MDX files.
 */

export const blogCategories = [
  { id: "all", label: "All Articles" },
  { id: "parenting", label: "Mindful Parenting" },
  { id: "screen-time", label: "Screen-Time Guides" },
  { id: "education", label: "Early Learning" },
  { id: "game-updates", label: "Game Updates" },
];

export const blogPosts = [
  {
    id: "screen-time-without-meltdowns",
    slug: "screen-time-without-meltdowns",
    title: "How to End Screen-Time Sessions Without Meltdowns: 5 Pediatrician-Approved Tips",
    excerpt: "Transitioning away from tablets doesn't have to trigger tears. Discover the science of gentle wind-down cues and how to build predictable digital routines.",
    category: "screen-time",
    readTime: "4 min read",
    date: "October 3, 2026",
    author: {
      name: "Dr. Elena Vasquez, Ph.D.",
      role: "Pediatric Neuropsychologist",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    content: `
Screen-time meltdowns are not a sign of bad parenting or a 'difficult' child. When a young child is immersed in an interactive game, their nervous system is actively engaged. An abrupt command to shut off the tablet feels jarring to a developing brain.

### 1. Give Advance Sensory Warnings
Instead of "5 minutes left" (which abstract concepts mean little to a 4-year-old), use visual and narrative markers: "When Pippin puts on his pajamas, it will be dinner time."

### 2. Choose Calm, Non-Dopaminergic Apps
Apps that use flashing neon lights, ticking countdown clocks, and loud alarms over-stimulate children. Opt for slower-paced, story-led games with acoustic audio.

### 3. Establish an Immediate Physical Bridge
Transition directly into a warm tactile activity: pouring bubbles into the bath, stretching like a bear, or reading a paper picture book together.
    `,
    tags: ["Screen Time", "Toddlers", "Emotional Regulation"],
  },
  {
    id: "why-play-based-learning-works",
    slug: "why-play-based-learning-works",
    title: "Why Play-Based Learning Beats Flashcards for Toddler Phonics and Math",
    excerpt: "Neuroscience reveals that children retain 3x more phonics knowledge when lessons are embedded into playful exploration rather than repetitive testing.",
    category: "education",
    readTime: "5 min read",
    date: "September 28, 2026",
    author: {
      name: "Claire Dupont",
      role: "Montessori Educator",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    content: `
Children are natural pattern seekers. When letters and numbers are presented as lifeless black-and-white flashcards, children memorize symbols by rote without building neural connections to their physical world.

By placing phonics inside a sensory island where tapping a raindrop plays the musical sound of 'R', learning becomes an organic joy rather than a classroom chore.
    `,
    tags: ["Montessori", "Phonics", "Early Math"],
  },
  {
    id: "inside-wonderquest-calm-tech",
    slug: "inside-wonderquest-calm-tech",
    title: "Building 'Calm Tech' for Kids: How We Designed WonderQuest v2.0",
    excerpt: "An inside look at our sound design, color choices, and non-punitive UI philosophy from lead game designer Julian Vance.",
    category: "game-updates",
    readTime: "6 min read",
    date: "September 15, 2026",
    author: {
      name: "Julian Vance",
      role: "Head of Game Design",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    content: `
When designing WonderQuest, our guiding question was simple: 'Would Fred Rogers be proud of this software?'

We stripped away red failure buzzers, eliminated timers that induce anxiety, and recorded real acoustic instruments—ukuleles, kalimbas, and cellos—so the background music relaxes children rather than overexcites them.
    `,
    tags: ["Design", "Behind the Scenes", "Game Dev"],
  },
];
