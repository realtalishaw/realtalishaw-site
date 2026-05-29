export type SocialLink = {
  platform: string;
  handle: string;
  url: string;
};

export type Project = {
  title: string;
  url?: string;
  description: string;
  tags: string[];
};

export type PressItem = {
  title: string;
  source: string;
  url: string;
  date?: string;
  description: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  publishedAt: string;
};

export type Profile = typeof profile;

export type Research = typeof research;

export type SiteContent = {
  profile: Profile;
  focusAreas: string[];
  projects: Project[];
  research: Research;
  nowItems: string[];
  press: PressItem[];
  socials: SocialLink[];
  posts: BlogPost[];
};

export const profile = {
  name: "Talisha White",
  handle: "@realtalishaw",
  headline:
    "Founder, AI builder, and Miss Grand Georgia 2026 working at the intersection of agentic commerce, community, fashion, and pageantry.",
  shortBio:
    "Talisha White is a Georgia-based founder, AI builder, community operator, fashion designer, and Miss Grand Georgia 2026. She is building Kalosa and is the founder of Alcemi Labs, an agentic commerce research lab. Her background spans Lovable, Shopl, Techstars, New York Fashion Week, pageantry, and community-led AI product education.",
  bio: [
    "Talisha White is a founder, AI builder, community operator, fashion designer, and titleholder based in Georgia. She is Miss Grand Georgia 2026, the founder of Alcemi Labs, and is currently building Kalosa.",
    "White previously served as Community Lead at Lovable, where she helped grow the company's Discord community from 14,000 to 75,000 members, launched its first ambassador program, organized hackathons, and led hands-on AI product-building workshops, including at Stanford Graduate School of Business. Her work sits at the intersection of startup building, community, artificial intelligence, commerce, and making technical tools more accessible to more people.",
    "Before her current work in AI and commerce, White built across fashion and pageantry. She founded Pageant Girl University and the Talisha White fashion brand, showed work at New York Fashion Week, and received press for inclusive runway casting that featured models across ability, age, race, and body type. She has also written about startups and shopping search, participated in Founder.University, and built Shopl, a shopping search company associated with Techstars Global and Build in Tulsa.",
  ],
  image: "/assets/talisha-hero.jpg",
};

export const focusAreas = [
  "Agentic commerce",
  "AI product building",
  "Community-led growth",
  "Shopping, discovery, and consumer commerce",
  "Women in technology and startups",
  "Pageantry, fashion, and public storytelling",
  "Building in public",
];

export const projects: Project[] = [
  {
    title: "Kalosa",
    url: "https://kalosa.us",
    description: "A new commerce project currently being built by Talisha White.",
    tags: ["Commerce", "AI", "Building"],
  },
  {
    title: "Alcemi Labs",
    url: "https://alcemi-labs.com",
    description:
      "An agentic commerce research lab founded by Talisha White, exploring how AI agents will change product discovery, shopping, customer journeys, and internet-native business.",
    tags: ["Research", "Agentic commerce", "AI"],
  },
  {
    title: "The Crown List",
    url: "https://thecrownlist.com",
    description:
      "A pageant directory built by Talisha, connecting the pageant ecosystem through discoverable listings and resources.",
    tags: ["Pageantry", "Directory", "Community"],
  },
  {
    title: "Shopl",
    url: "https://www.f6s.com/shopl",
    description:
      "A shopping search company founded in Atlanta in 2022 and associated with Techstars Global and Build in Tulsa.",
    tags: ["Shopping search", "Techstars", "Ecommerce"],
  },
  {
    title: "Pageant Girl University",
    url: "http://pageantgirluniversity.com",
    description:
      "A pageant education and community project combining entrepreneurship, pageantry, and resources for titleholders.",
    tags: ["Pageantry", "Education", "Community"],
  },
  {
    title: "Talisha White Fashion Brand",
    url: "https://www.papermag.com/marian-avila-nyfw-talisha-white",
    description:
      "A special occasion and evening wear brand shown at New York Fashion Week and covered for inclusive runway casting.",
    tags: ["Fashion", "NYFW", "Inclusive design"],
  },
];

export const nowItems = [
  "Building Kalosa at kalosa.us.",
  "Building Alcemi Labs, an agentic commerce research lab.",
  "Preparing for Miss Grand USA 2026 as Miss Grand Georgia 2026.",
  "Writing about AI, commerce, startups, community, and building in public.",
  "Developing this personal site and blog as a home base for public work.",
];

export const press: PressItem[] = [
  {
    title: "A Model With Down Syndrome Walked NYFW",
    source: "PAPER Magazine",
    url: "https://www.papermag.com/marian-avila-nyfw-talisha-white",
    date: "September 10, 2018",
    description:
      "PAPER covered Talisha White's New York Fashion Week show and its inclusive casting, including Marian Avila and Tae McKenzie.",
  },
  {
    title: "The Life of a Queenpreneur with Talisha White",
    source: "Krystle Clear Pageantry",
    url: "https://www.krystleclearpageantry.com/the-life-of-a-queenpreneur-with-talisha-white/",
    date: "March 6, 2018",
    description:
      "An interview on entrepreneurship, pageantry, Pageant Girl University, fashion, and learning to code.",
  },
  {
    title: "Vibe Coding Workshop Series - Lovable",
    source: "Stanford GSB",
    url: "https://luma.com/ozluvlad",
    description: "Talisha led a hands-on Lovable workshop at Stanford Graduate School of Business.",
  },
  {
    title: "Fireside Chat with Lovable at The 1097",
    source: "Luma",
    url: "https://luma.com/kt2r4m60",
    description:
      "A conversation on AI tools, community-building, and making product creation more accessible.",
  },
];

export const socials: SocialLink[] = [
  { platform: "Instagram", handle: "@realtalishaw", url: "https://www.instagram.com/realtalishaw/" },
  { platform: "X / Twitter", handle: "@realtalishaw", url: "https://x.com/realtalishaw" },
  { platform: "Facebook", handle: "@realtalishaw", url: "https://www.facebook.com/realtalishaw" },
  { platform: "TikTok", handle: "@realtalishaw", url: "https://www.tiktok.com/@realtalishaw" },
  { platform: "YouTube", handle: "@realtalishaw", url: "https://www.youtube.com/@realtalishaw" },
  { platform: "LinkedIn", handle: "Talisha White", url: "https://www.linkedin.com/in/realtalishaw" },
  { platform: "GitHub", handle: "@realtalishaw", url: "https://github.com/realtalishaw" },
];

export const posts: BlogPost[] = [];

export const research = {
  title: "Alcemi Labs",
  url: "https://alcemi-labs.com",
  description:
    "Alcemi Labs is an agentic commerce research lab founded by Talisha White. The lab studies what happens when AI agents become part of how people discover, compare, buy, and interact with products and businesses, with a focus on shopping behavior, AI-native interfaces, commerce workflows, and the new business models that may emerge around agent-driven buying.",
};

export const siteContent: SiteContent = {
  profile,
  focusAreas,
  projects,
  research,
  nowItems,
  press,
  socials,
  posts,
};
