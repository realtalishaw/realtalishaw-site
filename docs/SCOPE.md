# Personal Website Scope

## Overview

Build a personal website for Talisha White at `@realtalishaw`, designed as a clean, readable piece of college ruled notebook paper with handwritten-feeling typography and small paper details. The site should feel personal, thoughtful, and handmade without becoming overly decorative or hard to scan.

The visual concept is a nod to handwritten notes: the homepage reads like a page in a notebook, and on desktop the first visit can begin with a subtle notebook-opening animation before settling into the main page. Mobile should skip heavy animation and prioritize fast loading, legibility, and simple navigation.

See [CONTENT_BRIEF.md](./CONTENT_BRIEF.md) for researched bio, projects, press, social links, placeholder photo, and seed content.

## Goals

- Present Talisha clearly: photo, short bio, focus areas, projects, research, current work, press/media, social links, and blog.
- Make the notebook-paper theme the core visual system without making the site feel gimmicky.
- Optimize for both mobile and desktop, with a desktop-only notebook opening animation.
- Create a maintainable TypeScript, Vite, Tailwind, and Convex foundation.
- Support a blog and future content updates without hardcoding everything in React.

## Non-Goals for V1

- No complex CMS admin experience unless added later.
- No heavy 3D notebook interaction.
- No overdesigned portfolio case-study system in the first version.
- No authentication unless required for a private writing/admin workflow.
- No advanced newsletter, ecommerce, course, or gated-content system.

## Reference Direction

- Greg Isenberg's site is useful for simple personal positioning, blog prominence, social links, and founder/project sections.
- Surya Maddula's site is useful as a minimal personal/research-oriented site reference.
- The notebook CSS references are useful for ruled paper, red margin line, paper texture, hole punches, tape, shadow, and a notebook-cover visual language.

Reference links:

- <https://www.gregisenberg.com/>
- <https://suryamaddula.com/>
- <https://codepen.io/fyildiz1974/pen/VYjLvrX>
- <https://codepen.io/oliviale/pen/bLYQQE>

## Audience

Primary audiences:

- People discovering Talisha through social media.
- Potential collaborators, readers, founders, researchers, press, and community members.
- People looking for a concise view of Talisha's work, current projects, research interests, and writing.

The site should answer quickly:

- Who is Talisha?
- What does she focus on?
- What is she building or researching?
- Where can someone read more or follow her?
- How can someone contact or learn more?

## Site Structure

### Home

The homepage should be the primary experience and contain all major personal-site sections in a single scrollable page.

Sections:

1. Hero
   - Photo of Talisha.
   - Name and handle.
   - One-line positioning statement.
   - Short intro paragraph.
   - Primary links: blog, social, contact/email.

2. About / Bio
   - A warm, concise biography.
   - A slightly handwritten but readable content style.
   - Optional "margin note" callout with a personal detail about handwritten notes.

3. Focus / Projects
   - Current focus areas.
   - Selected projects.
   - Each project should include name, short description, status, and link when available.

4. Research
   - Highlight Alcemi Labs.
   - Explain what the research is about in plain language.
   - Link out if there is an external home, publication, or project page.

5. Now / Working On
   - A short "currently working on" section.
   - Should feel easy to update.
   - Can include bullets, dated notes, or small index-card style entries.

6. Media / Press
   - Optional but included in the page model.
   - Press mentions, podcasts, interviews, talks, articles, or notable appearances.
   - Empty state can be hidden until there is content.

7. Blog Preview
   - Latest posts or featured posts.
   - Link to full blog index.

8. Social Links
   - Social links using `@realtalishaw`.
   - Likely links: X/Twitter, LinkedIn, Instagram, YouTube, TikTok, GitHub, email, or any subset Talisha wants live.

### Blog Index

- List published posts.
- Show title, date, excerpt, tags, and reading time if available.
- Keep the notebook style but prioritize reading and browsing.

### Blog Post

- Long-form reading page.
- Clean typography with notebook ruled lines used subtly.
- Support headings, links, images, quotes, lists, and code blocks if needed.
- Include back link, social/share links, and related posts if simple.

### Optional Detail Pages

These can be V1.1 unless needed immediately:

- Project detail pages.
- Research detail page for Alcemi Labs.
- Press/media archive.

## Visual Design

### Core Metaphor

The site should look like college ruled notebook paper:

- Warm off-white paper.
- Light blue horizontal ruling.
- Red vertical margin line.
- Handwritten-feeling headings.
- Readable body copy.
- Subtle paper shadow and texture.
- Optional hole punches, binder margin, tape, paperclip, date stamp, or page number.

The design should feel like a real notebook page, but with modern spacing and hierarchy. The content should remain easy to skim.

### Typography

- Use a handwriting-style font for display text, annotations, small notes, and section labels.
- Use a highly readable serif or sans-serif for longer body text if the handwriting font hurts readability.
- Avoid using handwriting typography for dense paragraphs unless it remains accessible on mobile.

Suggested direction:

- Display / annotation: a handwriting-style Google Font such as `Caveat`, `Patrick Hand`, `Kalam`, or `Reenie Beanie`.
- Body: a calm, readable font such as `Inter`, `Lora`, `Literata`, or system UI.

### Color Palette

- Paper: warm off-white.
- Lines: pale college-rule blue.
- Margin: muted red/pink.
- Ink: dark blue, charcoal, or near-black.
- Accent: one or two restrained colors for links, highlights, sticky notes, or stamps.

Avoid a loud pastel scrapbook look. The page should feel personal and sharp, not childish.

### Layout

- Desktop: centered notebook page with enough surrounding space to see the notebook metaphor.
- Mobile: notebook paper fills the viewport width with reduced margins and simplified details.
- Keep the left ruled-paper margin readable without stealing too much mobile space.
- Use section anchors or a compact nav, but do not let navigation overpower the handwritten-page concept.

## Animation

### Desktop Notebook Opening

On desktop only, show a brief opening animation on initial load:

- A closed notebook cover appears.
- It opens or flips to reveal the college ruled page.
- Duration target: 900-1500ms.
- The animation should run once per session or respect user preference.
- It must not delay access to content for users who prefer reduced motion.

Implementation notes:

- Use CSS transforms and perspective, likely with a lightweight React component.
- Keep it 2D/2.5D rather than full 3D.
- Disable for mobile and for `prefers-reduced-motion: reduce`.
- Ensure content is present in the DOM and not blocked for accessibility.

### Microinteractions

- Small hover states on links, project entries, and blog cards.
- Hand-drawn underline or circle effects can appear on hover.
- Avoid constant motion on the page.

## Technical Stack

- TypeScript
- React
- Vite
- Tailwind CSS
- Convex for database and server functions
- React Router or TanStack Router if routing becomes more than a few pages
- MDX or Convex-stored post content, depending on the desired writing workflow

## Data Model

Convex should support content that changes over time.

Suggested tables:

### profile

- `name`
- `handle`
- `headline`
- `bio`
- `photoUrl`
- `email`
- `location`
- `updatedAt`

### socials

- `platform`
- `handle`
- `url`
- `sortOrder`
- `isVisible`

### projects

- `title`
- `slug`
- `description`
- `status`
- `url`
- `tags`
- `isFeatured`
- `sortOrder`

### research

- `title`
- `slug`
- `organization`
- `description`
- `url`
- `tags`
- `sortOrder`

### nowItems

- `title`
- `description`
- `date`
- `sortOrder`
- `isVisible`

### press

- `title`
- `source`
- `url`
- `date`
- `description`
- `isVisible`

### posts

- `title`
- `slug`
- `excerpt`
- `content`
- `coverImageUrl`
- `tags`
- `publishedAt`
- `updatedAt`
- `status`

## Content Requirements

Initial content needed from Talisha:

- Final approval of the draft third-person bio in [CONTENT_BRIEF.md](./CONTENT_BRIEF.md).
- Final Kalosa positioning for `kalosa.us`.
- Confirmation of placeholder hero image or replacement photo.
- Contact preference: social links only, email, or another method.
- Final Alcemi Labs description if the temporary copy changes.
- Current "working on" notes.
- Existing blog posts, if any.
- Additional press/media links, if any.

## Accessibility

- Maintain strong color contrast between ink and paper.
- Do not rely only on handwriting fonts for critical readability.
- Respect `prefers-reduced-motion`.
- Ensure keyboard navigation works across links, nav, and blog.
- Use semantic HTML landmarks and headings.
- Provide alt text for the hero photo and all meaningful images.

## Performance

- Keep the first page lightweight.
- Optimize the hero photo with responsive image sizes.
- Avoid loading large animation libraries for the notebook opening.
- Use route-level code splitting if the app grows.
- Target good Core Web Vitals on mobile.

## SEO and Sharing

- Add title and meta description.
- Add Open Graph and Twitter card metadata.
- Add structured data where useful for a personal website.
- Blog posts should have unique metadata and canonical URLs.
- Use human-readable routes:
  - `/`
  - `/blog`
  - `/blog/:slug`
  - `/projects/:slug` if detail pages are added

## V1 Acceptance Criteria

- The site runs locally with Vite and TypeScript.
- Tailwind is configured and used for the main UI.
- Convex is configured with initial content queries.
- Homepage includes hero, about, focus/projects, research, now, blog preview, media/press, and social links.
- Blog index and blog post routes exist.
- The page visually reads as college ruled notebook paper.
- Desktop-only notebook opening animation works and respects reduced motion.
- Mobile layout is polished and usable.
- Social links point to the intended `@realtalishaw` profiles.
- The site has basic SEO metadata.
- No console errors in local browser testing.

## Implementation Milestones

1. Project setup
   - Initialize Vite React TypeScript app.
   - Install and configure Tailwind.
   - Install and configure Convex.
   - Add routing.

2. Visual system
   - Build notebook paper background.
   - Define typography, colors, spacing, and reusable section components.
   - Create desktop notebook opening animation.

3. Content model
   - Define Convex schema.
   - Add seed content or fallback local content.
   - Build queries for homepage, socials, projects, press, and posts.

4. Homepage
   - Build hero, bio, projects, research, now, media/press, blog preview, and social links.
   - Add responsive behavior.

5. Blog
   - Build blog index.
   - Build post page.
   - Support readable long-form content.

6. Polish and QA
   - Add metadata.
   - Test desktop and mobile.
   - Test reduced motion.
   - Check accessibility basics.
   - Verify links and responsive images.

## Resolved Content Decisions

- Social platforms: Instagram, X/Twitter, Facebook, TikTok, YouTube, LinkedIn, and GitHub.
- Blog content: Convex.
- Hero photo: use `/Users/talishawhite/MissGrand/content/photos/miss-grand-photo-04.jpg` as a placeholder.
- Alcemi Labs: short homepage section only for V1.
- Alcemi Labs URL: `https://alcemi-labs.com` for now.
- Kalosa URL: `https://kalosa.us`.
- Newsletter: no email signup/newsletter in V1.
- Opening animation: desktop only, once per session or again on hard refresh.
- Bio tone: third-person, near-Wikipedia style.
