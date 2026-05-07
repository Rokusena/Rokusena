"use client";

import { useEffect, useRef, useState } from "react";

// ── Data ────────────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "GaukDarba — AI Job Matching SaaS",
    description:
      "AI SaaS that scrapes 5 Lithuanian job portals daily, scores listings with GPT-4o-mini, and emails personalised digests to paying subscribers. 4-stage pipeline: SQL pre-filter → keyword funnel → GPT-4o-mini scoring → email via Resend. Multi-service: Vercel + Railway + Supabase + Stripe.",
    tags: ["Next.js", "TypeScript", "Python", "GPT-4o-mini", "Stripe", "Supabase", "Playwright", "Docker"],
    website: "https://gaukdarba.vercel.app",
    github: "https://github.com/Rokusena/ScrapingDemo",
    screenshot: "/projects/gaukdarba.png",
  },
  {
    title: "Local RAG Chatbot",
    description:
      "Fully local RAG system — no API keys, no cloud. Document ingestion → chunking → vector embeddings → LLM generation, all on-device. REST API via FastAPI with per-answer source attribution.",
    tags: ["Python", "FastAPI", "LangChain", "ChromaDB", "Ollama", "Llama 3"],
    github: "https://github.com/Rokusena/RAG",
    screenshot: "/projects/rag.png",
  },
  {
    title: "Arbitrage Finder",
    description:
      "Automated scanner that cross-references casino odds with Kalshi and Polymarket prediction markets to surface arbitrage opportunities in real time.",
    tags: ["Python", "Playwright", "BeautifulSoup", "Data Pipelines"],
    github: "https://github.com/Rokusena/Arbitrage-site",
    screenshot: "/projects/arbitrage.svg",
  },
  {
    title: "EnergyDiscount",
    description:
      "Scrapes Lithuanian retail markets in real time to find the cheapest energy drinks across stores.",
    tags: ["Python", "BeautifulSoup", "Web Scraping"],
    github: "https://github.com/Rokusena/EnergyDiscount",
    screenshot: "/projects/energydiscount.png",
  },
  {
    title: "Furtiluna — Trading Robot Site",
    description:
      "Serverless booking platform for a trading robot service. Collects leads, manages admin-controlled time slots, and auto-books Zoom meetings with email confirmations to both parties — replacing a fully manual workflow.",
    tags: ["Node.js", "Vercel Serverless", "PostgreSQL", "Prisma", "Zoom API", "SendGrid"],
    github: "https://github.com/Rokusena/TradingRobotSite",
    screenshot: "/projects/furtiluna.png",
  },
];

const skillGroups = [
  {
    label: "Frontend",
    skills: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "REST APIs", "PostgreSQL"],
  },
  {
    label: "AI & ML",
    skills: ["LLM Pipelines", "RAG", "LangChain", "ChromaDB", "Ollama", "GPT-4o"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Vercel", "Railway", "Docker", "Supabase", "Git", "GitHub"],
  },
  {
    label: "Scraping",
    skills: ["Playwright", "BeautifulSoup", "Anti-bot", "Multi-source Pipelines"],
  },
  {
    label: "Other",
    skills: ["Stripe", "Resend", "SendGrid", "Zoom API", "C#", "C++"],
  },
];

const highlights = [
  "4 job portals scraped daily",
  "GPT-4o pipelines",
  "Stripe payments",
  "Docker deployments",
];

// ── Hook ────────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ── Icons ────────────────────────────────────────────────────────────────────────

function IconGitHub({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconMail({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconArrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 7h10v10M7 17 17 7" />
    </svg>
  );
}

function IconMenu({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconClose({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconPin({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconLinkedIn({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ── Nav ─────────────────────────────────────────────────────────────────────────

const navLinks = ["About", "Projects", "Skills", "Education", "Contact"];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "rgba(10,15,30,0.85)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      className="sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight"
          style={{ color: "#3b82f6" }}
        >
          RS
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm transition-colors duration-200"
              style={{ color: "#94a3b8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f8fafc")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center md:hidden"
          style={{ color: "#94a3b8" }}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="border-t md:hidden"
          style={{ borderColor: "rgba(255,255,255,0.07)", backgroundColor: "#0a0f1e" }}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm py-1 transition-colors duration-200"
                style={{ color: "#94a3b8" }}
                onClick={() => setOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f8fafc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      {/* Dot grid */}
      <div className="dot-bg absolute inset-0 pointer-events-none" />
      {/* Soft dark vignette over dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(10,15,30,0.45) 0%, #0a0f1e 72%)" }}
      />
      {/* Blue glow blob behind the name */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "420px",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.22) 0%, rgba(59,130,246,0.06) 45%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-4 font-mono text-sm tracking-widest uppercase" style={{ color: "#3b82f6" }}>
          Full-Stack Developer & AI Engineer
        </p>

        <h1
          className="mb-4 text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl glow-name"
          style={{ color: "#f8fafc" }}
        >
          Rokas Stasiūnas
        </h1>

        <div className="mb-4 flex items-center gap-2 text-sm" style={{ color: "#94a3b8" }}>
          <IconPin size={14} />
          <span>Vilnius, Lithuania</span>
        </div>

        <p className="mb-10 max-w-md text-xl font-medium" style={{ color: "#94a3b8" }}>
          I build AI-powered products that ship.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200"
            style={{ backgroundColor: "#3b82f6", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
          >
            View Projects
          </a>
          <a
            href="https://github.com/Rokusena"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#f8fafc", backgroundColor: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
              e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <IconGitHub size={18} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rokas-stasiunas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#f8fafc", backgroundColor: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
              e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <IconLinkedIn size={18} />
            LinkedIn
          </a>
          <a
            href="mailto:StasiunasRokas@gmail.com"
            className="flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#f8fafc", backgroundColor: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
              e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <IconMail size={18} />
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Photo ────────────────────────────────────────────────────────────────────────

function PhotoCircle() {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className="relative h-48 w-48 overflow-hidden rounded-full"
      style={{ border: "2px solid rgba(59,130,246,0.3)" }}
    >
      {failed ? (
        <div
          className="flex h-full w-full flex-col items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 100%)", color: "#94a3b8" }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="mb-2 opacity-40" aria-hidden>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          <span className="text-xs opacity-50">photo</span>
        </div>
      ) : (
        <img
          src="/photo.jpg"
          alt="Rokas Stasiūnas"
          className="h-full w-full object-cover object-top"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

// ── Project card ─────────────────────────────────────────────────────────────────

function ProjectScreenshot({ src, title }: { src: string; title: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <ProjectPlaceholder />
  ) : (
    <img
      src={src}
      alt={title}
      className="h-full w-full object-cover object-top"
      onError={() => setFailed(true)}
    />
  );
}

function ProjectPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-4" style={{ backgroundColor: "#060b17" }}>
      <div className="flex items-center gap-2">
        <div className="h-2 w-14 rounded-full" style={{ backgroundColor: "rgba(59,130,246,0.35)" }} />
        <div className="ml-auto flex gap-2">
          {[10, 8, 12].map((w, i) => (
            <div key={i} className="h-1.5 rounded-full" style={{ width: `${w * 4}px`, backgroundColor: "rgba(255,255,255,0.07)" }} />
          ))}
        </div>
      </div>
      <div className="space-y-2 mt-1">
        <div className="h-3 w-3/4 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
        <div className="h-2 w-1/2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
      </div>
      <div className="mt-1 grid grid-cols-2 gap-2">
        <div className="h-10 rounded-lg" style={{ backgroundColor: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.12)" }} />
        <div className="h-10 rounded-lg" style={{ backgroundColor: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.12)" }} />
      </div>
      <p className="mt-auto text-center font-mono text-xs" style={{ color: "#1e3a5f" }}>
        add screenshot → public/projects/
      </p>
    </div>
  );
}

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  website?: string;
  screenshot?: string;
};

function ProjectCard({ p }: { p: Project }) {
  const displayUrl = p.website
    ? p.website.replace("https://", "")
    : p.github.replace("https://github.com/", "github.com/");

  const primaryLink = p.website ?? p.github;

  return (
    <article
      className="project-card flex flex-col overflow-hidden rounded-2xl"
      style={{ backgroundColor: "#0d1427", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Browser chrome */}
      <div style={{ backgroundColor: "#060b17", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-1.5 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#febc2e" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#28c840" }} />
          <div className="ml-2 flex-1 truncate rounded px-2 py-0.5 font-mono text-xs" style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#475569" }}>
            {displayUrl}
          </div>
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 shrink-0 transition-colors duration-200"
            style={{ color: "#475569" }}
            aria-label={`Open ${p.title}`}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
          >
            <IconArrow size={14} />
          </a>
        </div>
        {/* Screenshot */}
        <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
          {p.screenshot ? (
            <ProjectScreenshot src={p.screenshot} title={p.title} />
          ) : (
            <ProjectPlaceholder />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-semibold leading-snug" style={{ color: "#f8fafc" }}>
          {p.title}
        </h3>
        <p className="mb-4 grow text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
          {p.description}
        </p>

        <div className="flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md px-2 py-0.5 font-mono text-xs"
                style={{ backgroundColor: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.18)", color: "#60a5fa" }}
              >
                {tag}
              </span>
            ))}
          </div>
          {p.website && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-1 text-xs transition-colors duration-200"
              style={{ color: "#475569" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#94a3b8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              <IconGitHub size={13} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// ── About ────────────────────────────────────────────────────────────────────────

function About() {
  const { ref, visible } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`px-6 py-24 fade-section${visible ? " visible" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 font-mono text-xs uppercase tracking-widest" style={{ color: "#3b82f6" }}>
          About
        </h2>

        <div className="grid gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]">
          {/* Photo — drop your photo at public/photo.jpg to replace the placeholder */}
          <div className="flex justify-center md:justify-start">
            <PhotoCircle />
          </div>

          {/* Bio */}
          <div>
            <p className="mb-6 text-base leading-relaxed" style={{ color: "#94a3b8" }}>
              I&apos;m an AI Systems student at Vilnius Tech and a full-stack developer who ships production software.
              I&apos;ve built and launched a paid SaaS product, a fully local RAG chatbot, and multiple automation
              pipelines — across Next.js frontends, Python backends, and LLM integrations. Strong systematic
              problem-solver (8–9/10 on Alva Labs logical reasoning). Open to freelance work and
              internship&nbsp;/ junior opportunities.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  style={{
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.25)",
                    color: "#60a5fa",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Projects ─────────────────────────────────────────────────────────────────────

function Projects() {
  const { ref, visible } = useInView();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`px-6 py-24 fade-section${visible ? " visible" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 font-mono text-xs uppercase tracking-widest" style={{ color: "#3b82f6" }}>
          Projects
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Skills ───────────────────────────────────────────────────────────────────────

function Skills() {
  const { ref, visible } = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`px-6 py-24 fade-section${visible ? " visible" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 font-mono text-xs uppercase tracking-widest" style={{ color: "#3b82f6" }}>
          Skills
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="card-border rounded-2xl p-5"
              style={{ backgroundColor: "#0d1427" }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "#3b82f6" }}>
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg px-3 py-1.5 text-sm"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#f8fafc",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Education ────────────────────────────────────────────────────────────────────

function Education() {
  const { ref, visible } = useInView();

  return (
    <section
      id="education"
      ref={ref as React.RefObject<HTMLElement>}
      className={`px-6 py-24 fade-section${visible ? " visible" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 font-mono text-xs uppercase tracking-widest" style={{ color: "#3b82f6" }}>
          Education
        </h2>

        <div
          className="card-border flex flex-col gap-1 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between"
          style={{ backgroundColor: "#0d1427" }}
        >
          <div>
            <p className="mb-1 text-lg font-semibold" style={{ color: "#f8fafc" }}>
              B.Eng — Artificial Intelligence Systems
            </p>
            <p className="text-sm" style={{ color: "#94a3b8" }}>
              Vilnius Tech (VGTU)
            </p>
            <p className="mt-2 text-xs" style={{ color: "#94a3b8" }}>
              AI systems · Machine learning · Statistics · Mathematical modelling
            </p>
          </div>
          <span
            className="mt-4 shrink-0 rounded-full px-4 py-1.5 text-sm font-medium sm:mt-0"
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#60a5fa",
            }}
          >
            2024 – 2028
          </span>
        </div>
      </div>
    </section>
  );
}

// ── Contact ──────────────────────────────────────────────────────────────────────

function Contact() {
  const { ref, visible } = useInView();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`px-6 py-24 fade-section${visible ? " visible" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 font-mono text-xs uppercase tracking-widest" style={{ color: "#3b82f6" }}>
          Contact
        </h2>

        <div
          className="card-border rounded-2xl p-8 md:p-14 text-center"
          style={{ backgroundColor: "#0d1427" }}
        >
          <h3 className="mb-3 text-3xl font-bold" style={{ color: "#f8fafc" }}>
            Let&apos;s work together
          </h3>
          <p className="mb-10 text-base" style={{ color: "#94a3b8" }}>
            Open to freelance projects and full-time opportunities.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:StasiunasRokas@gmail.com"
              className="flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200"
              style={{ backgroundColor: "#3b82f6", color: "#fff" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
            >
              <IconMail size={18} />
              StasiunasRokas@gmail.com
            </a>

            <a
              href="https://github.com/Rokusena"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#f8fafc", backgroundColor: "transparent" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
                e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <IconGitHub size={18} />
              github.com/Rokusena
            </a>

            <a
              href="https://linkedin.com/in/rokas-stasiunas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#f8fafc", backgroundColor: "transparent" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
                e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <IconLinkedIn size={18} />
              LinkedIn
            </a>
          </div>

          <p className="mt-8 flex items-center justify-center gap-1.5 text-sm" style={{ color: "#94a3b8" }}>
            <IconPin size={14} />
            Vilnius, Lithuania
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="border-t px-6 py-8"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between text-xs" style={{ color: "#94a3b8" }}>
        <span>© 2026 Rokas Stasiūnas</span>
        <a
          href="https://rokusena.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200"
          style={{ color: "#94a3b8" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
        >
          rokusena.xyz
        </a>
      </div>
    </footer>
  );
}

// ── Divider ──────────────────────────────────────────────────────────────────────

function Divider() {
  return <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />;
}

// ── Page ─────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0f1e" }}>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
