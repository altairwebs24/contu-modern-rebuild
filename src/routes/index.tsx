import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import hero1 from "../assets/contu/hero1.jpeg";
import hero2 from "../assets/contu/hero2.jpeg";
import hero3 from "../assets/contu/hero3.jpeg";
import proj1 from "../assets/contu/proj1.jpeg";
import proj2 from "../assets/contu/proj2.jpeg";
import proj3 from "../assets/contu/proj3.jpeg";
import proj4 from "../assets/contu/proj4.jpeg";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Contu Construction — Your One-Stop Building Partner" },
      { name: "description", content: "From foundation to finish — general building, plumbing, electrical, tiling and architectural services for commercial and private projects." },
      { property: "og:title", content: "Contu Construction — Your One-Stop Building Partner" },
      { property: "og:description", content: "From foundation to finish — building services for commercial and private projects." },
      { property: "og:image", content: hero1 },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const specialties = [
  "General Building", "Plastering", "Plumbing", "Electrical",
  "Tiling", "Carpentry", "Geological Services", "Architectural Services",
  "Commercial Buildings", "Private Buildings",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 opacity-40">
          <img src={hero1} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-10 bg-primary" />
              Est. Construction — South Africa
            </div>
            <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-[8.5rem]">
              Built to <span className="text-primary">last.</span>
              <br /> Designed to <span className="italic font-bold">stand out.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base text-bone/70 md:text-lg">
              Contu Construction is your one-stop partner for general building,
              plumbing, electrical, tiling and architectural services — on time,
              on budget, to the highest standard.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wider text-ink transition hover:bg-bone"
              >
                Get a free quote
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-bone hover:text-primary"
              >
                View projects
                <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {[
              { k: "10+", v: "Years on site" },
              { k: "200+", v: "Projects delivered" },
              { k: "100%", v: "Client-first" },
            ].map((s, i) => (
              <Reveal key={s.v} delay={i * 0.08}>
                <div>
                  <div className="font-display text-4xl font-black text-primary md:text-5xl">{s.k}</div>
                  <div className="mt-1 text-sm uppercase tracking-widest text-bone/60">{s.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-ink/10 bg-bone py-6">
        <div className="flex marquee whitespace-nowrap">
          {[...specialties, ...specialties].map((s, i) => (
            <span key={i} className="mx-8 font-display text-3xl font-bold uppercase text-ink/80 md:text-5xl">
              {s} <span className="text-primary">●</span>
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— About</div>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-6xl">
              A construction company that takes <span className="text-primary italic">pride</span> in craft.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-lg leading-relaxed text-foreground/80">
              We specialise in top-quality general building, plastering, plumbing,
              electrical, tiling, carpentry, geological and architectural services
              for commercial and private buildings.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Each project is unique. We work closely with our clients to deliver
              exceptional craftsmanship and innovative solutions — on time, within
              budget, and to the highest standard. Only the best materials and
              equipment, so your project is built to last.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="tel:+27670524108" className="group flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center bg-ink text-primary transition group-hover:bg-primary group-hover:text-ink">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">Call us today</span>
                  <span className="font-display text-lg font-bold">067 052 4108</span>
                </span>
              </a>
              <a href="tel:+27720933761" className="group flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center bg-ink text-primary transition group-hover:bg-primary group-hover:text-ink">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">Or</span>
                  <span className="font-display text-lg font-bold">072 093 3761</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Image triptych */}
        <div className="mt-20 grid gap-4 sm:grid-cols-12">
          <Reveal className="sm:col-span-7">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={hero2} alt="On-site work" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="sm:col-span-5">
            <div className="grid h-full gap-4">
              <div className="aspect-[5/3] overflow-hidden">
                <img src={hero3} alt="Building detail" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
              <div className="aspect-[5/3] overflow-hidden">
                <img src={proj4} alt="Site work" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="bg-ink py-24 text-bone md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">— Our Specialization</div>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-6xl">
                Ten trades.<br />One trusted team.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="text-bone/70">
                Every discipline you need to take a project from foundation to
                finish — under one roof, with one point of accountability.
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:text-bone"
              >
                Learn more about our services <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 divide-y divide-white/10 border-y border-white/10 md:grid-cols-2 md:divide-x">
            {specialties.map((s, i) => (
              <Reveal key={s} delay={(i % 4) * 0.05}>
                <div className="group flex items-center justify-between px-2 py-6 transition hover:bg-white/5 md:px-6">
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-sm text-primary">{String(i + 1).padStart(2, "0")}.</span>
                    <span className="font-display text-2xl font-bold md:text-3xl">{s}</span>
                  </div>
                  <ArrowUpRight className="text-bone/40 transition group-hover:text-primary group-hover:rotate-12" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Recent Work</div>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-6xl">
              Our recent <span className="italic text-primary">projects</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/projects" className="inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary">
              View all projects <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-12">
          {[
            { src: proj1, title: "Structural Build", tag: "General Building", span: "md:col-span-8" },
            { src: proj2, title: "Site Works", tag: "Commercial", span: "md:col-span-4" },
            { src: proj3, title: "Foundation Phase", tag: "Private", span: "md:col-span-4" },
            { src: proj4, title: "Finishing", tag: "Tiling & Plaster", span: "md:col-span-8" },
          ].map((p, i) => (
            <Reveal key={i} delay={i * 0.08} className={p.span}>
              <div className="group relative aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.src} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 text-bone opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-xs uppercase tracking-widest text-primary">{p.tag}</div>
                  <div className="mt-1 font-display text-2xl font-bold">{p.title}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABand />
    </>
  );
}

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-ink/5 blur-3xl" />
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-10">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-ink/60">— Free Consultation</div>
          <h2 className="mt-3 font-display text-4xl font-black leading-tight text-ink md:text-6xl">
            Ready to break <span className="italic">ground?</span>
          </h2>
          <p className="mt-3 max-w-xl text-ink/70">
            Tell us about your project. We'll come back with a clear plan, an honest timeline, and a fair quote.
          </p>
        </div>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-semibold uppercase tracking-wider text-bone transition hover:bg-bone hover:text-ink"
        >
          Book an appointment
          <ArrowRight size={18} className="transition group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
