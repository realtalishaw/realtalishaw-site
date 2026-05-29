import { queryGeneric as query } from "convex/server";

export const homepage = query({
  args: {},
  handler: async (ctx) => {
    const [profile] = await ctx.db.query("profile").collect();
    const socials = await ctx.db
      .query("socials")
      .withIndex("by_visibility", (q) => q.eq("isVisible", true))
      .collect();
    const projects = await ctx.db
      .query("projects")
      .withIndex("by_featured", (q) => q.eq("isFeatured", true))
      .collect();
    const research = await ctx.db.query("research").withIndex("by_order").collect();
    const nowItems = await ctx.db
      .query("nowItems")
      .withIndex("by_visibility", (q) => q.eq("isVisible", true))
      .collect();
    const press = await ctx.db
      .query("press")
      .withIndex("by_visibility", (q) => q.eq("isVisible", true))
      .collect();
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_status_published", (q) => q.eq("status", "published"))
      .order("desc")
      .take(3);

    return { profile, socials, projects, research, nowItems, press, posts };
  },
});

export const posts = query({
  args: {},
  handler: async (ctx) =>
    ctx.db
      .query("posts")
      .withIndex("by_status_published", (q) => q.eq("status", "published"))
      .order("desc")
      .collect(),
});
