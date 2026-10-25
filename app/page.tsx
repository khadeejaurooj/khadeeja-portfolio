import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import Effects from "@/components/Effects";
import { ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";
import { CopyEmail, ExperienceTabs } from "@/components/Interactive";
import Nav from "@/components/Nav";
import { BrowserStack, PhoneCluster, ScreenGrid } from "@/components/Showcase";
import { Thumbs } from "@/components/Shots";
import type { Project } from "@/lib/data";
import {
  education,
  experience,
  moreProjects,
  otherProjects,
  profile,
  projects,
  skills,
  techFocus,
} from "@/lib/data";

const delay = (ms: number): CSSProperties => ({ ["--d" as string]: `${ms}ms` });

function SectionHead({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return (
    <div className="section-head" data-reveal>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {children ? <p className="section-lede">{children}</p> : null}
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

/* Hero visual: a quiet summary of the kinds of software I build. */
const buildAreas = [
  { n: "01", area: "Web", text: "Dashboards, storefronts and APIs" },
  { n: "02", area: "Mobile", text: "Flutter and native Android apps" },
  { n: "03", area: "AI", text: "Emotion detection, chatbots and copilots" },
  { n: "04", area: "Cloud", text: "Deployment and monitoring on AWS" },
];

function HeroPanel() {
  return (
    <aside className="hero-panel" aria-label="What I build">
      <p className="eyebrow">What I build</p>
      <ul>
        {buildAreas.map((x) => (
          <li key={x.area}>
            <span className="hp-n">{x.n}</span>
            <span className="hp-area">{x.area}</span>
            <span className="hp-text">{x.text}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function BrandPanel({ p }: { p: Project }) {
  if (!p.icon) return null;
  return (
    <div className="brand-panel">
      <Image className="brand-icon" src={p.icon.src} alt={p.icon.alt} width={512} height={512} sizes="160px" />
      <p className="panel-name">{p.icon.name}</p>
      <p className="panel-sub">Android app</p>
      {p.facts ? (
        <ul className="brand-facts" aria-label="Key facts">
          {p.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <article
      className={`project spot${i % 2 ? " is-flipped" : ""}`}
      style={{ ["--accent" as string]: p.accent } as CSSProperties}
      data-reveal
    >
      <div className="p-text">
        <p className="p-kind">
          <span className="p-num">{String(i + 1).padStart(2, "0")}</span>
          {p.kind}
          {p.period ? ` · ${p.period}` : ""}
        </p>
        <h3 className="p-title">
          {p.icon ? <Image className="p-icon" src={p.icon.src} alt={p.icon.alt} width={96} height={96} /> : null}
          {p.name}
        </h3>
        <p className="p-summary">{p.summary}</p>
        {p.sections ? (
          <div className="p-sections">
            {p.sections.map((sec) => (
              <section key={sec.label} className="p-sec">
                <h4>{sec.label}</h4>
                <p>{sec.text}</p>
                <ul className="feat">
                  {sec.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : (
          <ul className="feat">
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        <Tags items={p.tags} />
        {p.links?.length ? (
          <div className="p-links">
            {p.links.map((l) => (
              <a
                key={l.href}
                className={`btn btn-sm ${p.icon ? "btn-primary" : "btn-ghost"}`}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {l.label} <ArrowUpRight />
              </a>
            ))}
          </div>
        ) : null}
        {p.website ? (
          <p className="p-website">
            <span>Website</span>
            <a href={p.website.href} target="_blank" rel="noreferrer noopener">
              {p.website.label} <ArrowUpRight size={14} />
            </a>
            {p.website.text}
          </p>
        ) : null}
      </div>

      <div className="p-stage">
        {p.visual === "brand" ? <BrandPanel p={p} /> : null}
        {p.visual === "phones" && p.shots ? <PhoneCluster shots={p.shots} note={p.note} /> : null}
        {p.visual === "browser" && p.shots ? <BrowserStack shots={p.shots} note={p.note} /> : null}
        {p.visual === "screens" && p.shots ? <ScreenGrid shots={p.shots} /> : null}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav name={profile.name} />
      <Effects />

      <main id="main">
        {/* ---------------- HERO ---------------- */}
        <section id="top" className="hero">
          <div className="hero-bg" aria-hidden="true">
            <i className="orb orb-1" />
            <i className="orb orb-2" />
            <span className="grid-lines" />
          </div>

          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-eyebrow">
                {profile.name} <span aria-hidden="true">·</span> {profile.role}
              </p>
              <h1>{profile.headline}</h1>
              <p className="hero-lede">{profile.intro}</p>
              <ul className="hero-tech" aria-label="Main technologies">
                {techFocus.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="cta">
                <a className="btn btn-primary magnetic" href="#projects">
                  View projects <ArrowUpRight />
                </a>
                <a className="btn btn-ghost magnetic" href={`mailto:${profile.email}`}>
                  <MailIcon size={18} /> Contact
                </a>
                <a className="icon-link magnetic" href={profile.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                  <GithubIcon />
                </a>
                <a className="icon-link magnetic" href={profile.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                {profile.cvUrl ? (
                  <a className="btn btn-ghost" href={profile.cvUrl} download>
                    Download CV
                  </a>
                ) : null}
              </div>
            </div>

            <HeroPanel />
          </div>
        </section>

        {/* ---------------- TECHNOLOGIES ---------------- */}
        <section id="technologies" className="section">
          <div className="container">
            <SectionHead label="Technologies" title="What I work with" />
            <div className="tech-grid">
              {skills.map((s, i) => (
                <div key={s.group} className="tgroup" data-reveal style={delay(i * 70)}>
                  <h3>{s.group}</h3>
                  <ul className="chips">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- PROJECTS ---------------- */}
        <section id="projects" className="section">
          <div className="container">
            <SectionHead label="Projects" title="Selected work">
              Apps and websites I&apos;ve built. Select any screenshot to see it larger.
            </SectionHead>

            <div className="projects">
              {projects.map((p, i) => (
                <ProjectCard key={p.name} p={p} i={i} />
              ))}
            </div>

            <h3 className="subhead" data-reveal>
              More projects
            </h3>
            <div className="more-grid">
              {moreProjects.map((m, i) => (
                <article key={m.name} className="mcard spot" data-reveal style={delay(i * 80)}>
                  <h4>
                    {m.href ? (
                      <a href={m.href} target="_blank" rel="noreferrer noopener">
                        {m.name} <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      m.name
                    )}
                  </h4>
                  <p>{m.text}</p>
                  <Thumbs shots={m.shots} />
                  <Tags items={m.tags} />
                </article>
              ))}
            </div>

            <h3 className="subhead" data-reveal>
              Other work
            </h3>
            <ul className="other-list" data-reveal>
              {otherProjects.map((o) => (
                <li key={o.name} className="orow">
                  <div className="orow-main">
                    <h4>
                      {o.href ? (
                        <a href={o.href} target="_blank" rel="noreferrer noopener">
                          {o.name} <ArrowUpRight size={15} />
                        </a>
                      ) : (
                        o.name
                      )}
                    </h4>
                    <p className="orow-kind">
                      {o.kind}
                      {o.period ? ` · ${o.period}` : ""}
                    </p>
                    <p>{o.text}</p>
                  </div>
                  <Tags items={o.tags} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- EXPERIENCE ---------------- */}
        <section id="experience" className="section">
          <div className="container">
            <SectionHead label="Experience" title="Where I've worked" />
            <div data-reveal>
              <ExperienceTabs items={experience} />
            </div>
            <div className="edu spot" data-reveal>
              <p className="eyebrow">Education</p>
              <h3>{education.degree}</h3>
              <p className="edu-school">{education.school}</p>
              <p className="edu-meta">
                {education.period} · {education.note}
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="section contact">
          <div className="container">
            <div className="cta-stage" data-reveal>
              <div className="hero-bg" aria-hidden="true">
                <i className="orb orb-1" />
                <i className="orb orb-2" />
              </div>
              <div className="cta-inner">
                <p className="eyebrow">Contact</p>
                <h2>Let&apos;s talk.</h2>
                <p className="section-lede">
                  Looking for a developer, or have a project in mind? Send me an email and I&apos;ll get back to you.
                </p>
                <div className="cta">
                  <CopyEmail email={profile.email} />
                  <a className="btn btn-ghost magnetic" href={`mailto:${profile.email}`}>
                    <MailIcon size={18} /> Open mail app
                  </a>
                  <a className="icon-link magnetic" href={profile.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                  <a className="icon-link magnetic" href={profile.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <p>{profile.location}</p>
        </div>
      </footer>
    </>
  );
}
