import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { CTABand } from "./index";
import { Hammer, Wrench, Zap, Grid3x3, TreePine, PencilRuler, Building2, Home as HomeIcon, Layers, Mountain } from "lucide-react";
import proj2 from "../assets/contu/proj2.jpeg";
import hero3 from "../assets/contu/hero3.jpeg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Contu Construction" },
      { name: "description", content: "General building, plumbing, electrical, tiling, carpentry, geological and architectural services for commercial and private buildings." },
      { property: "og:title", content: "Services — Contu Construction" },
      { property: "og:description", content: "Ten specialised trades under one trusted team." },
      { property: "og:image", content: proj2 },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const process = [
  { n: "01", title: "Meticulous Planning", body: "We map every detail before a shovel hits the ground — scope, materials, programme and budget." },
  { n: "02", title: "Completion On Time", body: "Disciplined site management means realistic timelines we actually hit." },
  { n: "03", title: "Perfect Execution", body: "Experienced trades, the right equipment, and zero shortcuts on quality." },
  { n: "04", title: "Affordable Prices", body: "Fair, transparent pricing — no surprise line items at the end." },
];

const services = [
  { icon: Hammer, title: "General Building", body: "Site prep, foundations, structural framing, roofing, insulation and exterior/interior finishing for new builds, renovations and additions." },
  { icon: Layers, title: "Plastering", body: "Smooth, durable plaster finishes for interior and exterior walls — prepped properly so paint and tile last." },
  { icon: Wrench, title: "Plumbing", body: "Installations, fittings, repairs and maintenance for residential and commercial properties." },
  { icon: Zap, title: "Electrical", body: "Safe, certified electrical installation, rewiring, and fault-finding by qualified electricians." },
  { icon: Grid3x3, title: "Tiling", body: "Precision floor and wall tiling — bathrooms, kitchens, lobbies and commercial spaces." },
  { icon: TreePine, title: "Carpentry", body: "Custom joinery, framing, cabinetry, decking and finish carpentry by experienced craftsmen." },
  { icon: Mountain, title: "Geological Services", body: "Site assessments and geological investigation to make sure you build on solid ground." },
  { icon: PencilRuler, title: "Architectural Services", body: "Concept design through to council-ready drawings — design that's beautiful and buildable." },
  { icon: Building2, title: "Commercial Buildings", body: "Offices, retail, warehouses — turnkey commercial construction managed end to end." },
  { icon: HomeIcon, title: "Private Buildings", body: "Custom homes, renovations and additions tailored to how you actually live." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-40 text-bone md:pb-32 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">— Services</div>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-black leading-[0.95] md:text-8xl">
            Every trade<br />you need, <span className="italic text-primary">in-house.</span>
          </h1>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— How we work</div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-6xl">
            A simple process, executed <span className="italic text-primary">obsessively.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="h-full bg-background p-8">
                <div className="font-display text-5xl font-black text-primary">{p.n}.</div>
                <div className="mt-6 font-display text-xl font-bold">{p.title}</div>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SPLIT IMAGE */}
      <section className="bg-bone">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2 md:px-10">
          <Reveal><div className="aspect-[4/3] overflow-hidden"><img src={proj2} alt="" className="h-full w-full object-cover" /></div></Reveal>
          <Reveal delay={0.1}><div className="aspect-[4/3] overflow-hidden"><img src={hero3} alt="" className="h-full w-full object-cover" /></div></Reveal>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— What we do</div>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-6xl">Our full service offer.</h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.05}>
              <div className="group flex h-full flex-col bg-background p-8 transition hover:bg-ink hover:text-bone">
                <s.icon className="text-primary" size={28} />
                <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-bone/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
