import { mutationGeneric as mutation } from "convex/server";

const now = Date.now();

export const initialContent = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("profile").first();
    if (existing) {
      return { skipped: true };
    }

    await ctx.db.insert("profile", {
      name: "Talisha White",
      handle: "@realtalishaw",
      headline:
        "Founder, AI builder, and Miss Grand Georgia 2026 working at the intersection of agentic commerce, community, fashion, and pageantry.",
      bio: [
        "Talisha White is a founder, AI builder, community operator, fashion designer, and titleholder based in Georgia. She is Miss Grand Georgia 2026, the founder of Alcemi Labs, and is currently building Kalosa.",
        "White previously served as Community Lead at Lovable, where she helped grow the company's Discord community from 14,000 to 75,000 members, launched its first ambassador program, organized hackathons, and led hands-on AI product-building workshops, including at Stanford Graduate School of Business.",
        "Before her current work in AI and commerce, White built across fashion and pageantry. She founded Pageant Girl University and the Talisha White fashion brand, showed work at New York Fashion Week, and received press for inclusive runway casting that featured models across ability, age, race, and body type.",
      ],
      photoUrl: "/assets/talisha-hero.jpg",
      location: "Georgia",
      updatedAt: now,
    });

    const socials = [
      ["Instagram", "@realtalishaw", "https://www.instagram.com/realtalishaw/"],
      ["X / Twitter", "@realtalishaw", "https://x.com/realtalishaw"],
      ["Facebook", "@realtalishaw", "https://www.facebook.com/realtalishaw"],
      ["TikTok", "@realtalishaw", "https://www.tiktok.com/@realtalishaw"],
      ["YouTube", "@realtalishaw", "https://www.youtube.com/@realtalishaw"],
      ["LinkedIn", "Talisha White", "https://www.linkedin.com/in/realtalishaw"],
      ["GitHub", "@realtalishaw", "https://github.com/realtalishaw"],
    ];

    for (const [index, social] of socials.entries()) {
      await ctx.db.insert("socials", {
        platform: social[0],
        handle: social[1],
        url: social[2],
        sortOrder: index,
        isVisible: true,
      });
    }

    const projects = [
      [
        "Kalosa",
        "kalosa",
        "A new commerce project currently being built by Talisha White.",
        "https://kalosa.us",
        ["Commerce", "AI", "Building"],
      ],
      [
        "Alcemi Labs",
        "alcemi-labs",
        "An agentic commerce research lab founded by Talisha White, exploring how AI agents will change product discovery, shopping, customer journeys, and internet-native business.",
        "https://alcemi-labs.com",
        ["Research", "Agentic commerce", "AI"],
      ],
      [
        "The Crown List",
        "the-crown-list",
        "A pageant directory built by Talisha, connecting the pageant ecosystem through discoverable listings and resources.",
        "https://thecrownlist.com",
        ["Pageantry", "Directory", "Community"],
      ],
      [
        "Shopl",
        "shopl",
        "A shopping search company founded in Atlanta in 2022 and associated with Techstars Global and Build in Tulsa.",
        "https://www.f6s.com/shopl",
        ["Shopping search", "Techstars", "Ecommerce"],
      ],
      [
        "Pageant Girl University",
        "pageant-girl-university",
        "A pageant education and community project combining entrepreneurship, pageantry, and resources for titleholders.",
        "http://pageantgirluniversity.com",
        ["Pageantry", "Education", "Community"],
      ],
      [
        "Talisha White Fashion Brand",
        "talisha-white-fashion-brand",
        "A special occasion and evening wear brand shown at New York Fashion Week and covered for inclusive runway casting.",
        "https://www.papermag.com/marian-avila-nyfw-talisha-white",
        ["Fashion", "NYFW", "Inclusive design"],
      ],
    ] as const;

    for (const [index, project] of projects.entries()) {
      await ctx.db.insert("projects", {
        title: project[0],
        slug: project[1],
        description: project[2],
        url: project[3],
        tags: [...project[4]],
        isFeatured: true,
        sortOrder: index,
      });
    }

    await ctx.db.insert("research", {
      title: "Alcemi Labs",
      slug: "alcemi-labs",
      organization: "Alcemi Labs",
      description:
        "Alcemi Labs is an agentic commerce research lab founded by Talisha White, focused on what happens when AI agents become part of how people discover, compare, buy, and interact with products and businesses.",
      url: "https://alcemi-labs.com",
      tags: ["Agentic commerce", "AI", "Research"],
      sortOrder: 0,
    });

    const nowItems = [
      "Building Kalosa at kalosa.us.",
      "Building Alcemi Labs, an agentic commerce research lab.",
      "Preparing for Miss Grand USA 2026 as Miss Grand Georgia 2026.",
      "Writing about AI, commerce, startups, community, and building in public.",
      "Developing this personal site and blog as a home base for public work.",
    ];

    for (const [index, item] of nowItems.entries()) {
      await ctx.db.insert("nowItems", {
        title: item,
        description: item,
        sortOrder: index,
        isVisible: true,
      });
    }

    const press = [
      [
        "A Model With Down Syndrome Walked NYFW",
        "PAPER Magazine",
        "https://www.papermag.com/marian-avila-nyfw-talisha-white",
        "September 10, 2018",
        "PAPER covered Talisha White's New York Fashion Week show and its inclusive casting, including Marian Avila and Tae McKenzie.",
      ],
      [
        "The Life of a Queenpreneur with Talisha White",
        "Krystle Clear Pageantry",
        "https://www.krystleclearpageantry.com/the-life-of-a-queenpreneur-with-talisha-white/",
        "March 6, 2018",
        "An interview on entrepreneurship, pageantry, Pageant Girl University, fashion, and learning to code.",
      ],
      [
        "Vibe Coding Workshop Series - Lovable",
        "Stanford GSB",
        "https://luma.com/ozluvlad",
        undefined,
        "Talisha led a hands-on Lovable workshop at Stanford Graduate School of Business.",
      ],
      [
        "Fireside Chat with Lovable at The 1097",
        "Luma",
        "https://luma.com/kt2r4m60",
        undefined,
        "A conversation on AI tools, community-building, and making product creation more accessible.",
      ],
    ] as const;

    for (const [index, item] of press.entries()) {
      await ctx.db.insert("press", {
        title: item[0],
        source: item[1],
        url: item[2],
        date: item[3],
        description: item[4],
        isVisible: true,
        sortOrder: index,
      });
    }

    return { seeded: true };
  },
});
