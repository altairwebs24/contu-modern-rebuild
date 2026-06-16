import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { CTABand } from "./index";
import hero2 from "../assets/contu/hero2.jpeg";
import proj1 from "../assets/contu/proj1.jpeg";
import proj4 from "../assets/contu/proj4.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Contu Construction" },
      { name: "description", content: "Meet Contu Construction — an experienced team delivering exceptional craftsmanship across commercial and private building projects." },
      { property: "og:title", content: "About — Contu Construction" },
      { property: "og:description", content: "Experienced team. Exceptional craftsmanship. Real accountability." },
      { property: "og:image", content: proj1 },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-40 text-bone md:pb-32 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">— About Contu</div>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-[0.95] md:text-8xl">
            Craftsmanship,<br />delivered on <span className="italic text-primary">time.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/70">
            Welcome to Contu Construction — your one-stop-shop for all your
            building needs. We deliver top-quality construction for both
            commercial and private clients across South Africa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="sticky top-32">
              <img src={hero2} alt="Team at work" className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:pt-12">
            <h2 className="font-display text-3xl font-black md:text-5xl">
              The right partner from <span className="text-primary italic">first sketch</span> to final finish.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              <p>
                Our team of experienced professionals takes pride in delivering
                exceptional craftsmanship and innovative solutions — making sure
                your project is completed on time, within budget, and to the
                highest standard of quality.
              </p>
              <p>
                We understand that each project is unique. We work closely with
                our clients to ensure that specific needs and requirements are
                met. Whether you need a new commercial building, a renovation of
                an existing property, or a small repair job, we have the
                expertise to get it done right.
              </p>
              <p>
                Our commitment to excellence and customer satisfaction has
                earned us a reputation as one of the most reliable construction
                companies in the industry. We use only the best materials and
                equipment so your project is built to last.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-px border border-border bg-border">
              {[
                { k: "10+", v: "Years experience" },
                { k: "200+", v: "Projects" },
                { k: "10", v: "Specialised trades" },
                { k: "24/7", v: "Client support" },
              ].map((s) => (
                <div key={s.v} className="bg-background p-6">
                  <div className="font-display text-3xl font-black text-primary md:text-4xl">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <img src={proj4} alt="Completed project" className="aspect-[21/9] w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
