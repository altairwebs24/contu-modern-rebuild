import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Contu Construction" },
      { name: "description", content: "Get a free quote or consultation from Contu Construction. Call 067 052 4108 or send us your project details." },
      { property: "og:title", content: "Contact — Contu Construction" },
      { property: "og:description", content: "Get a free quote or consultation from Contu Construction." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-ink pb-20 pt-40 text-bone md:pb-28 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">— Contact</div>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-black leading-[0.95] md:text-8xl">
            Let's build something <span className="italic text-primary">great.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:grid md:grid-cols-12 md:gap-16 md:px-10 md:py-28">
        <Reveal className="md:col-span-5">
          <h2 className="font-display text-3xl font-black md:text-4xl">Get your free consultation / quote.</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us a bit about your project. We'll get back to you within one
            working day with the next steps.
          </p>

          <div className="mt-10 space-y-6">
            <a href="tel:+27670524108" className="group flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-ink text-primary transition group-hover:bg-primary group-hover:text-ink">
                <Phone size={18} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">Phone</span>
                <span className="font-display text-lg font-bold">067 052 4108</span>
                <span className="ml-3 font-display text-lg font-bold">/ 072 093 3761</span>
              </span>
            </a>

            <a href="mailto:info@contubuilder.co.za" className="group flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-ink text-primary transition group-hover:bg-primary group-hover:text-ink">
                <Mail size={18} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                <span className="font-display text-lg font-bold">info@contubuilder.co.za</span>
              </span>
            </a>

            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-ink text-primary">
                <MapPin size={18} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">Based in</span>
                <span className="font-display text-lg font-bold">South Africa</span>
              </span>
            </div>

            <div className="flex gap-3 pt-4">
              <a href="https://www.instagram.com/contulogistics/" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center border border-border transition hover:border-primary hover:bg-primary hover:text-ink"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/profile.php?id=100077735079762" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center border border-border transition hover:border-primary hover:bg-primary hover:text-ink"><Facebook size={18} /></a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 md:col-span-7 md:mt-0">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-5 border border-border bg-card p-8 md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Project type" name="project" placeholder="e.g. New build, renovation, plumbing" />
            <Field label="Tell us about your project" name="message" textarea required />

            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-semibold uppercase tracking-wider text-bone transition hover:bg-primary hover:text-ink"
            >
              {sent ? "Thanks — we'll be in touch" : "Book an appointment"}
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, placeholder, textarea,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; textarea?: boolean;
}) {
  const base = "w-full border-0 border-b-2 border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground">{label}{required && " *"}</span>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={4} className={base} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
