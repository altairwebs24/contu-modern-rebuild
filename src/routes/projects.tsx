import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { CTABand } from "./index";
import hero1 from "../assets/contu/hero1.jpeg";
import hero2 from "../assets/contu/hero2.jpeg";
import hero3 from "../assets/contu/hero3.jpeg";
import proj1 from "../assets/contu/proj1.jpeg";
import proj2 from "../assets/contu/proj2.jpeg";
import proj3 from "../assets/contu/proj3.jpeg";
import proj4 from "../assets/contu/proj4.jpeg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Contu Construction" },
      { name: "description", content: "A selection of recent Contu Construction projects across general building, commercial and private builds." },
      { property: "og:title", content: "Projects — Contu Construction" },
      { property: "og:description", content: "Recent work from Contu Construction." },
      { property: "og:image", content: proj1 },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const items = [
  { src: proj1, title: "Structural Build", tag: "General Building", span: "md:col-span-8" },
  { src: hero1, title: "Commercial Finish", tag: "Commercial", span: "md:col-span-4" },
  { src: proj2, title: "Site Works", tag: "Foundations", span: "md:col-span-4" },
  { src: proj3, title: "Residential Build", tag: "Private", span: "md:col-span-4" },
  { src: hero2, title: "On-Site Crew", tag: "Build Phase", span: "md:col-span-4" },
  { src: proj4, title: "Plaster & Tile", tag: "Finishes", span: "md:col-span-8" },
  { src: hero3, title: "Detail Work", tag: "Carpentry", span: "md:col-span-4" },
];

function ProjectsPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-40 text-bone md:pb-32 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">— Projects</div>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-black leading-[0.95] md:text-8xl">
            We provide the best <span className="italic text-primary">service</span><br /> in the industry.
          </h1>
          <p className="mt-8 max-w-xl text-bone/70">
            A selection of recent work — commercial, private and everything in between.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-4 md:grid-cols-12">
          {items.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05} className={p.span}>
              <div className="group relative aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.src} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-bone">
                  <div className="text-xs uppercase tracking-widest text-primary">{p.tag}</div>
                  <div className="mt-1 font-display text-2xl font-bold">{p.title}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
