import {
  ArrowUpRight,
  ChevronLeft,
} from "lucide-react";
import { useQuery } from "convex/react";
import { makeFunctionReference } from "convex/server";
import { useEffect, useState, type ReactNode } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import {
  siteContent,
  type BlogPost,
  type Project,
  type SiteContent,
  type SocialLink,
} from "./data/siteContent";

const convexEnabled = Boolean(import.meta.env.VITE_CONVEX_URL);
const homepageQuery = makeFunctionReference<"query">("site:homepage");
const postsQuery = makeFunctionReference<"query">("site:posts");

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NotebookShell>
            <HomeRoute />
          </NotebookShell>
        }
      />
      <Route
        path="/blog"
        element={
          <NotebookShell compact>
            <BlogIndexRoute />
          </NotebookShell>
        }
      />
      <Route
        path="/blog/:slug"
        element={
          <NotebookShell compact>
            <BlogPostRoute />
          </NotebookShell>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function HomeRoute() {
  return convexEnabled ? <HomeRouteFromConvex /> : <HomePage content={siteContent} />;
}

function HomeRouteFromConvex() {
  const homepage = useQuery(homepageQuery, {});
  const content = homepage ? normalizeHomepage(homepage) : siteContent;

  return <HomePage content={content} />;
}

function BlogIndexRoute() {
  return convexEnabled ? <BlogIndexFromConvex /> : <BlogIndex posts={siteContent.posts} />;
}

function BlogIndexFromConvex() {
  const convexPosts = useQuery(postsQuery, {});
  return <BlogIndex posts={convexPosts ? normalizePosts(convexPosts) : siteContent.posts} />;
}

function BlogPostRoute() {
  return convexEnabled ? <BlogPostFromConvex /> : <BlogPostPage posts={siteContent.posts} />;
}

function BlogPostFromConvex() {
  const convexPosts = useQuery(postsQuery, {});
  return <BlogPostPage posts={convexPosts ? normalizePosts(convexPosts) : siteContent.posts} />;
}

function NotebookShell({
  children,
  compact = false,
}: {
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <div className="min-h-screen bg-[var(--desk)] px-3 py-4 text-ink sm:px-6 lg:px-10 lg:py-10">
      <NotebookIntro />
      <div className="mx-auto max-w-6xl">
        <div className={`notebook-page ${compact ? "notebook-page-compact" : ""}`}>
          <div className="binder-holes" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

function NotebookIntro() {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 900px)").matches;
    const hasPlayed = window.sessionStorage.getItem("talisha-notebook-opened") === "true";

    if (isDesktop && !reduceMotion && !hasPlayed) {
      setShouldPlay(true);
      window.sessionStorage.setItem("talisha-notebook-opened", "true");
    }
  }, []);

  if (!shouldPlay) {
    return null;
  }

  return (
    <div className="notebook-intro" aria-hidden="true">
      <div className="notebook-cover">
        <div className="cover-label">
          <span>notes</span>
          <strong>Talisha White</strong>
        </div>
      </div>
    </div>
  );
}

function HomePage({ content }: { content: SiteContent }) {
  return (
    <>
      <Header />
      <main>
        <Hero profile={content.profile} />
        <NotebookSection id="about" eyebrow="bio" title="About">
          <div className="prose-block">
            {content.profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </NotebookSection>

        <NotebookSection id="projects" eyebrow="work" title="Projects">
          <div className="text-list">
            {content.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </NotebookSection>

        <NotebookSection id="research" eyebrow="research" title="Alcemi Labs">
          <div className="research-block">
            <div>
              <p className="max-w-3xl text-xl leading-9 text-ink">{content.research.description}</p>
              <a className="ink-link mt-5 inline-flex" href={content.research.url} target="_blank" rel="noreferrer">
                Visit Alcemi Labs <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </NotebookSection>

        <NotebookSection id="press" eyebrow="media" title="Press & Appearances">
          <div className="text-list">
            {content.press.map((item) => (
              <a className="press-item" key={item.title} href={item.url} target="_blank" rel="noreferrer">
                <span>{item.source}</span>
                <strong>{item.title}</strong>
                {item.date && <time>{item.date}</time>}
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </NotebookSection>

        <NotebookSection id="blog-preview" eyebrow="writing" title="Blog">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="max-w-xl text-lg leading-8 text-ink-soft">
              Posts coming soon.
            </p>
            <Link className="ink-link hidden sm:inline-flex" to="/blog">
              All posts <ArrowUpRight size={18} />
            </Link>
          </div>
          <BlogGrid posts={content.posts.slice(0, 3)} />
          <Link className="ink-link mt-6 inline-flex sm:hidden" to="/blog">
            All posts <ArrowUpRight size={18} />
          </Link>
        </NotebookSection>

        <SocialFooter socials={content.socials} />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="relative z-10 flex justify-end pb-8">
      <nav className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-sm font-bold uppercase tracking-[0.18em] text-ink-soft">
        <Link className="nav-mark" to="/blog">
          Blog
        </Link>
      </nav>
    </header>
  );
}

function Hero({ profile }: { profile: SiteContent["profile"] }) {
  return (
    <section className="hero-section grid gap-10 pb-12 pt-4 md:grid-cols-[minmax(0,1fr)_360px] md:items-center lg:gap-14">
      <div>
        <p className="section-eyebrow">Miss Grand Georgia 2026</p>
        <h1 className="hero-title mt-3 max-w-4xl">
          Talisha White
        </h1>
        <p className="mt-5 max-w-2xl text-2xl leading-10 text-ink">{profile.headline}</p>
      </div>
      <figure className="photo-note">
        <img src={profile.image} alt="Portrait of Talisha White" />
      </figure>
    </section>
  );
}

function NotebookSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="notebook-section scroll-mt-10">
      <div className="mb-7">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="text-row-title">
        <h3>{project.title}</h3>
        {project.url && <ArrowUpRight className="mt-1 shrink-0" size={19} />}
      </div>
      <p>{project.description}</p>
    </>
  );

  return project.url ? (
    <a className="project-item" href={project.url} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <article className="project-item">{content}</article>
  );
}

function BlogIndex({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <Header />
      <main className="py-10">
        <Link className="ink-link mb-8 inline-flex" to="/">
          <ChevronLeft size={18} /> Back home
        </Link>
        <div className="mb-10">
          <p className="section-eyebrow">field notes</p>
          <h1 className="section-title">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
            Posts coming soon.
          </p>
        </div>
        <BlogGrid posts={posts} />
      </main>
    </>
  );
}

function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) {
    return <p className="empty-note">No posts yet.</p>;
  }

  return (
    <div className="text-list">
      {posts.map((post) => (
        <Link className="blog-card" key={post.slug} to={`/blog/${post.slug}`}>
          <time>{formatDate(post.publishedAt)}</time>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}

function BlogPostPage({ posts }: { posts: BlogPost[] }) {
  const { slug } = useParams();
  const post = posts.find((entry) => entry.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Header />
      <main className="py-10">
        <Link className="ink-link mb-8 inline-flex" to="/blog">
          <ChevronLeft size={18} /> Back to blog
        </Link>
        <article className="post-article">
          <p className="section-eyebrow">{formatDate(post.publishedAt)}</p>
          <h1>{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
          <div className="post-body">
            {post.content.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}

function SocialFooter({ socials }: { socials: SocialLink[] }) {
  return (
    <footer className="social-footer" id="links" aria-label="Social links">
      <div className="footer-rule" aria-hidden="true" />
      <div className="social-grid">
        {socials.map((social) => (
          <SocialAnchor key={social.platform} social={social} />
        ))}
      </div>
      <div className="footer-meta">
        <p>Talisha White</p>
        <span>Founder / AI builder / Miss Grand Georgia 2026</span>
      </div>
    </footer>
  );
}

function SocialAnchor({ social }: { social: SocialLink }) {
  const Icon = getSocialIcon(social.platform);

  return (
    <a href={social.url} target="_blank" rel="noreferrer" aria-label={social.platform} title={social.platform}>
      <Icon size={20} />
    </a>
  );
}

function getSocialIcon(platform: string) {
  if (platform === "Instagram") return FaInstagram;
  if (platform === "X / Twitter") return FaXTwitter;
  if (platform === "Facebook") return FaFacebookF;
  if (platform === "TikTok") return FaTiktok;
  if (platform === "YouTube") return FaYoutube;
  if (platform === "LinkedIn") return FaLinkedinIn;
  return FaGithub;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

function normalizeHomepage(homepage: any): SiteContent {
  const convexProfile = homepage.profile;
  const normalizedPosts = normalizePosts(homepage.posts ?? []);
  const normalizedResearch = homepage.research?.[0]
    ? {
        title: homepage.research[0].title,
        url: homepage.research[0].url ?? siteContent.research.url,
        description: homepage.research[0].description,
      }
    : siteContent.research;

  return {
    profile: convexProfile
      ? {
          ...siteContent.profile,
          name: convexProfile.name,
          handle: convexProfile.handle,
          headline: convexProfile.headline,
          bio: convexProfile.bio,
          image: convexProfile.photoUrl ?? siteContent.profile.image,
        }
      : siteContent.profile,
    focusAreas: siteContent.focusAreas,
    projects: (homepage.projects ?? siteContent.projects).map((project: any) => ({
      title: project.title,
      url: project.url,
      description: project.description,
      tags: project.tags ?? [],
    })),
    research: normalizedResearch,
    nowItems: (homepage.nowItems ?? []).length
      ? homepage.nowItems.map((item: any) => item.description || item.title)
      : siteContent.nowItems,
    press: (homepage.press ?? siteContent.press).map((item: any) => ({
      title: item.title,
      source: item.source,
      url: item.url,
      date: item.date,
      description: item.description,
    })),
    socials: (homepage.socials ?? siteContent.socials).map((item: any) => ({
      platform: item.platform,
      handle: item.handle,
      url: item.url,
    })),
    posts: normalizedPosts.length ? normalizedPosts : siteContent.posts,
  };
}

function normalizePosts(items: any[]): BlogPost[] {
  return items.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    tags: post.tags ?? [],
    publishedAt:
      typeof post.publishedAt === "number"
        ? new Date(post.publishedAt).toISOString().slice(0, 10)
        : post.publishedAt,
  }));
}

export default App;
