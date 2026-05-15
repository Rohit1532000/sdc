import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Eye, Building2, Target, Heart, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { CtaContact } from "@/components/site/CtaContact";
import { Counter } from "@/components/Counter";
import hero from "@/assets/hero-building.jpg";
import imgElec from "@/assets/svc-electrical.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About SDC — MEP Consultants Since 2009" },
      { name: "description", content: "Services Design Consultants is an MEP consultancy delivering Mechanical, Electrical, PHE & Fire Fighting marvels for industries, residences, hospitals, labs and commercial buildings." },
      { property: "og:title", content: "About SDC — MEP Consultants Since 2009" },
      { property: "og:description", content: "Meet the team behind SDC — engineering future-ready infrastructure across India since 2009." },
    ],
  }),
});

const values = [
  { icon: Building2, title: "Diverse Sectors", desc: "Industries, Research Labs, Residences, Commercial Buildings, Villas, Hospitals, Educational Institutions and Apartments." },
  { icon: Eye, title: "Clear Vision", desc: "To provide adequate solutions and become a leader in the MEP consultancy market." },
  { icon: Heart, title: "Mission", desc: "Transforming visions into Mechanical, Electrical, Public Health, Environment & Fire Fighting marvels." },
];

const team = [
  {
    name: "Shri. N.A. Iyer",
    role: "Founder · Electrical Engineer",
    bio: "30+ years of experience across Electrical, Lighting, FAS, CCTV, ACD, solar harvesting, Industrial Automation and Technical Audit for MEP. Previously: RSP Design Consulting, DVP Design Consulting, POET Consultants, AEG-NGEF Ltd.",
  },
  {
    name: "Shri. K.T. Shivprasad",
    role: "BE (Civil), ME (Environmental Engineering)",
    bio: "25+ years in Public Health, Environment & Fire Fighting. Previously: RSP Design Consulting, Adarsh Developers, Atkins India Pvt Ltd.",
  },
  {
    name: "Shri. Rakesh Kumar Swain",
    role: "HVAC Lead — MBA & B.Tech (Mechanical)",
    bio: "13 years in HVAC services with BIM expertise. Industrial, Residential, Commercial buildings & villas across India.",
  },
];

const philosophy = [
  "Safety of buildings for personnel and equipment",
  "Reliability and flexibility in operations",
  "Availability and maintainability with minimum downtime",
  "Future expansion & scalability with adaptability",
  "State-of-the-art technology for modern infrastructure",
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <PageHero
        eyebrow="About SDC"
        title={<>Empowering <span className="text-gradient-accent">Excellence</span><br />in MEP Design.</>}
        subtitle="Since 2009 — your MEP consultants for a future-ready infrastructure."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Company intro */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={imgElec} alt="SDC" loading="lazy" className="hover-zoom-img w-full" />
            </div>
            <div className="absolute -bottom-6 -right-6 z-10 rounded-2xl bg-gradient-accent p-6 shadow-accent text-accent-foreground hidden sm:block">
              <Award className="h-8 w-8 mb-2" />
              <div className="text-sm font-semibold leading-tight">IGBC<br />Certified</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Story</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              MEP consultancy <span className="text-gradient-primary">since 2009</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Services Design Consultants (SDC) is an MEP consultancy designing for various building types since 2009. We cater to Industries, Research Labs, Residences, Commercial Buildings, Villas, Hospitals, Educational Institutions, and Apartments.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our main vision is to provide adequate solutions and become a leader in the MEP design market — transforming visions into Mechanical, Electrical, Public Health, Environment and Fire Fighting marvels.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-gradient-primary px-6 py-7 text-primary-foreground shadow-elegant">
              {[
                { n: 15, s: "+", l: "Years" },
                { n: 300, s: "+", l: "Projects" },
                { n: 50, s: "+", l: "Clients" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-accent">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-primary-foreground/80">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Sectors */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Foundation</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Vision, Mission & <span className="text-gradient-accent">Values</span></h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="group rounded-2xl border border-border bg-card p-8 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-card transition-all group-hover:scale-110 group-hover:rotate-[-6deg]">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Leadership</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Meet <span className="text-gradient-primary">The Team</span></h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">Decades of experience across Electrical, PHE, HVAC and Fire Fighting.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((t, i) => (
              <article key={t.name} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]" />
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-accent">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{t.name}</h3>
                  <div className="text-sm font-semibold text-accent">{t.role}</div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Design philosophy */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Design Philosophy</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">MEP design that <span className="text-gradient-accent">stands the test of time</span></h2>
            <p className="mt-5 text-muted-foreground">Our MEP design for any building is intended to deliver:</p>
          </div>
          <ul className="space-y-3">
            {philosophy.map((p, i) => (
              <li key={p} className="group flex items-start gap-3 rounded-xl border border-border bg-card p-5 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground transition-transform group-hover:rotate-12">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span className="font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaContact />
      <Footer />
    </main>
  );
}
