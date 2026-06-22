import { BackToTop } from "@/components/portfolio/back-to-top";
import { AnimatedTitle } from "@/components/portfolio/animated-title";
import { ContactForm } from "@/components/portfolio/contact-form";
import { Navbar } from "@/components/portfolio/navbar";
import { Reveal } from "@/components/portfolio/reveal";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { SkillMeter } from "@/components/portfolio/skill-meter";
import Image from "next/image";
import {
  certifications,
  education,
  experience,
  languages,
  navItems,
  owner,
  projects,
  skillMeters,
  skills,
  strengths,
} from "@/data/portfolio";

export default function Home() {
  const initials = owner.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0B1220] text-[#F3F6FC]">
      <div className="map-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(192,108,132,0.2),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(143,156,207,0.2),transparent_30%),radial-gradient(circle_at_55%_72%,rgba(125,183,232,0.14),transparent_36%)]" />

      <ScrollProgress />
      <Navbar items={navItems} />

      <main className="relative z-10 mx-auto w-[min(1180px,92%)] pb-24 pt-8">
        <section id="hero" className="organic-panel grid gap-6 border border-white/10 bg-[#182235]/65 p-6 backdrop-blur-xl lg:grid-cols-[1.45fr_1fr] lg:p-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[#E7C2D0]">Geospatial Portfolio 2026</p>
            <AnimatedTitle text={owner.name} />
            <p className="mt-5 max-w-3xl text-lg text-slate-300">{owner.title}</p>
            <p className="mt-4 max-w-3xl text-slate-400">{owner.profile}</p>
            <p className="hand-note mt-4 max-w-2xl text-base">I love turning complex spatial data into maps people can actually use.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-[#C06C84] via-[#8F9CCF] to-[#7DB7E8] px-5 py-3 font-semibold text-white shadow-[0_8px_24px_rgba(192,108,132,0.32)]"
              >
                Let&apos;s Work Together
              </a>
              <a
                href={owner.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 bg-[#182235]/80 px-5 py-3 font-medium text-[#F3F6FC]"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-4 self-start">
            <div className="organic-panel border border-[#E7C2D0]/35 bg-[#182235]/78 p-5">
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#E7C2D0]/90">Profile</p>
              <div className="relative mx-auto mt-1 w-fit">
                <span className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.4rem] bg-[radial-gradient(circle,rgba(192,108,132,0.3)_0%,rgba(125,183,232,0.12)_45%,transparent_70%)] blur-xl" />
                <div className="relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-[2.1rem] border border-white/25 bg-gradient-to-br from-[#C06C84]/35 via-[#8F9CCF]/25 to-[#7DB7E8]/28 p-1.5 shadow-[0_20px_45px_rgba(15,23,42,0.55),0_10px_24px_rgba(192,108,132,0.25)]">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] border border-white/20 bg-[#0F172A]">
                    {owner.photoUrl ? (
                      <Image
                        src={owner.photoUrl}
                        alt={owner.photoAlt}
                        fill
                        className="object-cover object-center"
                        sizes="176px"
                      />
                    ) : (
                      <span className="grid h-full place-items-center text-4xl font-semibold tracking-wider text-[#F3F6FC]">{initials}</span>
                    )}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />
                  </div>
                </div>
                <div className="mx-auto mt-3 w-fit rounded-full border border-white/20 bg-[#0F172A]/85 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-slate-200">
                  {owner.name}
                </div>
              </div>
            </div>

            <div className="geo-visual organic-panel border border-[#8F9CCF]/40 p-5">
              <p className="text-sm text-[#E7C2D0]">Geospatial Intelligence</p>
              <h2 className="mt-1 text-2xl font-semibold">GIS - Remote Sensing - Photogrammetry</h2>
              <p className="mt-3 text-slate-300">Based in {owner.location}</p>
              <p className="hand-note mt-4 text-sm">Currently open to internship opportunities and field-oriented projects.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a href={`mailto:${owner.email}`} className="glass-card p-4 text-sm text-slate-300">
                <span className="mb-1 block text-xs uppercase tracking-wider text-slate-400">Email</span>
                {owner.email}
              </a>
              <a href={`tel:${owner.phone}`} className="glass-card p-4 text-sm text-slate-300">
                <span className="mb-1 block text-xs uppercase tracking-wider text-slate-400">Phone</span>
                {owner.phone}
              </a>
            </div>
          </Reveal>
        </section>

        <section id="about" className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="glass-card organic-panel p-6 lg:p-8">
            <h3 className="section-title">About Me</h3>
            <p className="mt-4 text-slate-300">
              I am passionate about geospatial workflows that mix scientific rigor with practical impact. My work
              spans thematic mapping, earth observation analytics, and data-driven environmental decision support.
            </p>
            <p className="mt-4 text-slate-400">
              What drives me most is building maps that help people decide faster and better, not just maps that look
              good.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="glass-card organic-panel p-6 lg:p-8">
            <h3 className="section-title">Academic Journey</h3>
            <div className="mt-5 space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="relative border-l border-[#8F9CCF]/45 pl-4">
                  <span className="mb-1 block text-xs uppercase tracking-wider text-[#E7C2D0]">{item.year}</span>
                  <p className="text-slate-200">{item.degree}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="education" className="mt-16">
          <Reveal className="glass-card organic-panel p-6 lg:p-8">
            <h3 className="section-title">Education</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {education.map((item) => (
                <article key={item.degree} className="lux-hover rounded-[1.15rem] border border-white/10 bg-[#182235]/78 p-4 md:odd:-rotate-[0.7deg] md:even:rotate-[0.6deg]">
                  <p className="text-sm text-[#E7C2D0]">{item.year}</p>
                  <h4 className="mt-2 font-medium text-slate-100">{item.degree}</h4>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="skills" className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
          <Reveal className="glass-card organic-panel p-6 lg:p-8">
            <h3 className="section-title">Technical Skills</h3>
            <div className="mt-6 space-y-5">
              {skillMeters.map((skill) => (
                <SkillMeter key={skill.name} name={skill.name} value={skill.value} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="glass-card organic-panel p-6 lg:p-8">
            <h3 className="section-title">Tools & Specializations</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <article className="lux-hover rounded-xl border border-white/10 bg-[#182235]/72 p-4 md:-rotate-[0.7deg]">
                <h4 className="font-semibold text-[#E7C2D0]">GIS & Cartography</h4>
                <p className="mt-2 text-slate-300">{skills.gis.join(" - ")}</p>
              </article>
              <article className="lux-hover rounded-xl border border-white/10 bg-[#182235]/72 p-4 md:rotate-[0.8deg]">
                <h4 className="font-semibold text-[#E7C2D0]">Remote Sensing</h4>
                <p className="mt-2 text-slate-300">{skills.remoteSensing.join(" - ")}</p>
              </article>
              <article className="lux-hover rounded-xl border border-white/10 bg-[#182235]/72 p-4 md:rotate-[0.4deg]">
                <h4 className="font-semibold text-[#E7C2D0]">Programming</h4>
                <p className="mt-2 text-slate-300">{skills.programming.join(" - ")}</p>
              </article>
              <article className="lux-hover rounded-xl border border-white/10 bg-[#182235]/72 p-4 md:-rotate-[0.5deg]">
                <h4 className="font-semibold text-[#E7C2D0]">Specializations</h4>
                <p className="mt-2 text-slate-300">{skills.specializations.join(" - ")}</p>
              </article>
            </div>
          </Reveal>
        </section>

        <section id="experience" className="mt-16">
          <Reveal className="glass-card organic-panel p-6 lg:p-8">
            <h3 className="section-title">Experience</h3>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {experience.map((item) => (
                <article key={item.title} className="lux-hover rounded-2xl border border-white/10 bg-[#182235]/75 p-5 md:odd:-rotate-[0.6deg] md:even:rotate-[0.5deg]">
                  <h4 className="text-lg font-semibold text-slate-100">{item.title}</h4>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C06C84]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="projects" className="mt-16">
          <Reveal className="glass-card organic-panel p-6 lg:p-8">
            <h3 className="section-title">Academic Projects</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`group lux-hover rounded-2xl border border-white/10 bg-[#182235]/75 p-5 transition hover:border-[#8F9CCF]/55 ${
                    index % 2 === 0 ? "md:-rotate-[0.8deg]" : "md:rotate-[0.8deg]"
                  }`}
                >
                  <h4 className="font-semibold text-slate-100">{project.title}</h4>
                  <p className="mt-3 text-sm text-slate-300">{project.outcome}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/15 bg-slate-800 px-2.5 py-1 text-xs text-[#E7C2D0]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="certifications" className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="glass-card organic-panel p-6 lg:p-8">
            <h3 className="section-title">Certifications</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              {certifications.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="glass-card organic-panel p-6 lg:p-8">
            <h3 className="section-title">Languages & Strengths</h3>
            <h4 className="mt-5 text-sm uppercase tracking-wider text-[#E7C2D0]">Languages</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span key={lang} className="rounded-full border border-white/15 bg-slate-900/70 px-3 py-1 text-sm text-slate-200">
                  {lang}
                </span>
              ))}
            </div>
            <h4 className="mt-6 text-sm uppercase tracking-wider text-[#E7C2D0]">Strengths</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {strengths.map((item) => (
                <span key={item} className="rounded-full border border-[#8F9CCF]/35 bg-indigo-950/25 px-3 py-1 text-sm text-[#E7C2D0]">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="contact" className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="glass-card organic-panel p-6 lg:p-8">
            <h3 className="section-title">Contact</h3>
            <p className="mt-4 text-slate-300">Open to internships, collaborations, and geospatial innovation projects.</p>
            <div className="mt-6 space-y-3 text-slate-300">
              <p>
                <span className="text-slate-400">Email:</span> {owner.email}
              </p>
              <p>
                <span className="text-slate-400">Phone:</span> {owner.phone}
              </p>
              <p>
                <span className="text-slate-400">LinkedIn:</span> {owner.linkedin}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="glass-card organic-panel p-6 lg:p-8">
            <h3 className="section-title">Send a Message</h3>
            <div className="mt-5">
              <ContactForm />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-[min(1180px,92%)] flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
          <p>\u00a9 {new Date().getFullYear()} {owner.name}. All rights reserved.</p>
          <p>Designed and crafted with care in Casablanca.</p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}

