import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Award, Sparkles, Clock, Users, ClipboardList, PencilRuler, HardHat, BadgeCheck, ArrowRight, Plus } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { CtaContact } from "@/components/site/CtaContact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type ServiceContent = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  hero: string;
  intro: string;
  features: string[];
  detailImage: string;
  benefits: { icon: LucideIcon; title: string; desc: string }[];
};

const defaultBenefits = [
  { icon: Award, title: "15+ Years Expertise", desc: "Trusted MEP design partner since 2009 for India's leading developers." },
  { icon: Sparkles, title: "Future-Ready Design", desc: "Scalable, modern systems designed for tomorrow's standards." },
  { icon: Clock, title: "On-Time Delivery", desc: "Disciplined project management with on-schedule documentation & handover." },
  { icon: Users, title: "Senior Leadership", desc: "Led by 25–30+ year veterans across Electrical, PHE, HVAC and Fire systems." },
];

export function ServicePage({ content, name }: { content: ServiceContent; name: string }) {
  const benefits = content.benefits.length ? content.benefits : defaultBenefits;
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
        image={content.hero}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services" },
          { label: name },
        ]}
      />

      {/* Service Details */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={content.detailImage} alt={name} loading="lazy" className="hover-zoom-img w-full" />
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Service Details</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Engineering excellence for <span className="text-gradient-primary">{name}</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{content.intro}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {content.features.map((f) => (
                <li key={f} className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover-lift">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground transition-transform group-hover:rotate-12">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Why Choose SDC</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Benefits that <span className="text-gradient-accent">stand out</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <div key={b.title} className="group rounded-2xl border border-border bg-card p-7 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-card transition-all group-hover:scale-110 group-hover:-rotate-6">
                  <b.icon className="h-7 w-7" />
                </div>
                <h4 className="mt-5 text-lg font-bold">{b.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Process</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              How we deliver <span className="text-gradient-primary">{name}</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              A disciplined, transparent workflow — from first conversation to final commissioning.
            </p>
          </div>
          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            {[
              { icon: ClipboardList, title: "Discover", desc: "Brief, site study and requirement mapping with stakeholders." },
              { icon: PencilRuler, title: "Design", desc: "Concept, calculations, BIM coordination and tender documents." },
              { icon: HardHat, title: "Deliver", desc: "Site supervision, contractor coordination and quality control." },
              { icon: BadgeCheck, title: "Handover", desc: "Testing, commissioning, O&M manuals and post-handover support." },
            ].map((s, i) => (
              <div key={s.title} className="relative group rounded-2xl border border-border bg-card p-7 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="absolute -top-4 left-7 flex h-8 w-12 items-center justify-center rounded-full bg-gradient-accent text-xs font-bold text-accent-foreground shadow-accent">
                  0{i + 1}
                </div>
                <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-card transition-transform group-hover:scale-110">
                  <s.icon className="h-7 w-7" />
                </div>
                <h4 className="mt-5 text-lg font-bold">{s.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-4">
          {[
            { n: "15+", l: "Years of Expertise" },
            { n: "300+", l: "Projects Delivered" },
            { n: "25+", l: "Cities Across India" },
            { n: "98%", l: "Client Satisfaction" },
          ].map((s, i) => (
            <div key={s.l} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-5xl md:text-6xl font-bold tracking-tight">{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-primary-foreground/75">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">FAQ</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Frequently asked <span className="text-gradient-accent">questions</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: `What does SDC's ${name} scope typically include?`, a: `Our ${name} scope spans concept design, detailed engineering, BIM coordination, tender documentation, contractor support and on-site supervision through commissioning.` },
              { q: "Which sectors and project sizes do you handle?", a: "We work across residential, commercial, hospitality, healthcare, industrial and laboratory projects — from boutique villas to large multi-tower developments." },
              { q: "Do you coordinate with architects and interior designers?", a: "Yes. SDC integrates early with architects, interior designers and project management teams to ensure MEP intent aligns with the overall design vision." },
              { q: "How are projects priced and scheduled?", a: "Engagements are scoped after a discovery call. Fees depend on built-up area, complexity and stages of involvement. Schedules are agreed and tracked transparently." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-6 data-[state=open]:shadow-card">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline [&>svg]:hidden group">
                  <span>{f.q}</span>
                  <Plus className="h-5 w-5 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45 text-accent" />
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Explore More</div>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                Related <span className="text-gradient-primary">services</span>
              </h2>
            </div>
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-gradient-accent hover:text-accent-foreground hover:shadow-accent">
              Talk to an expert
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { to: "/services/electrical", label: "Electrical Services" },
              { to: "/services/hvac", label: "HVAC Systems" },
              { to: "/services/plumbing", label: "Plumbing & Firefighting" },
              { to: "/services/security", label: "Electronic Security" },
              { to: "/services/lighting", label: "Lighting Design" },
              { to: "/services/energy-audit", label: "Energy Audit" },
              { to: "/services/energy-harvesting", label: "Energy Harvesting" },
            ].filter((s) => s.label !== name).slice(0, 6).map((s, i) => (
              <Link key={s.to} to={s.to} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <span className="text-base font-semibold text-foreground transition-colors group-hover:text-primary-foreground">{s.label}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground transition-all group-hover:bg-accent group-hover:text-accent-foreground group-hover:rotate-45">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaContact />
      <Footer />
    </main>
  );
}
