import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import imgCta from "@/assets/cta-interior.jpg";

export function CtaContact() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl shadow-elegant">
          <img src={imgCta} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary-deep/40" />
          <div className="relative grid gap-8 p-10 md:p-16 lg:grid-cols-[2fr_auto] items-center">
            <div className="text-white max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-glow">Ready to start?</div>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                Let's design your <span className="text-gradient-accent">next milestone</span> together.
              </h2>
              <p className="mt-4 text-white/85 text-lg">From design brief to commissioning — partner with India's trusted MEP consultancy.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-accent px-8 py-4 font-semibold text-accent-foreground shadow-accent shine">
                  Contact Us
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <a href="tel:+919900000000" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15">
                  <Phone className="h-4 w-4" /> +91 99000 00000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
