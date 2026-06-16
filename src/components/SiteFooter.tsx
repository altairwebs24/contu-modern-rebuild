import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center bg-primary font-display text-base font-black text-ink">
                C
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                CONTU<span className="text-primary">.</span>
              </span>
            </div>
            <p className="mt-6 max-w-md text-balance text-base text-bone/70">
              A one-stop construction partner delivering general building,
              plumbing, electrical, tiling and architectural services across
              commercial and private projects.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/contulogistics/"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center border border-white/15 transition hover:bg-primary hover:text-ink"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100077735079762"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center border border-white/15 transition hover:bg-primary hover:text-ink"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-bone/80">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-bone/80">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  <a href="tel:+27670524108" className="block hover:text-primary">067 052 4108</a>
                  <a href="tel:+27720933761" className="block hover:text-primary">072 093 3761</a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
                <a href="mailto:info@contubuilder.co.za" className="hover:text-primary">
                  info@contubuilder.co.za
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-bone/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Contu Construction. All rights reserved.</p>
          <p>One-Stop-Shop for all your Building Needs.</p>
        </div>
      </div>
    </footer>
  );
}
