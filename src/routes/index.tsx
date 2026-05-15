import { createFileRoute } from "@tanstack/react-router";
import {
  Zap, Wind, Flame, ShieldCheck, Lightbulb, Gauge,
  Building2, Award, Users, CheckCircle2, ArrowRight, Sparkles, Sun
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero-building.jpg";
import imgElec from "@/assets/svc-electrical.jpg";
import imgHvac from "@/assets/svc-hvac.jpg";
import imgPlumb from "@/assets/svc-plumbing.jpg";
import imgCta from "@/assets/cta-interior.jpg";
import { Counter } from "@/components/Counter";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Testimonials } from "@/components/site/Testimonials";
import { GetInTouch } from "@/components/site/GetInTouch";
import { ProjectsPreview } from "@/components/site/ProjectsPreview";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "SDC — Services Design Consultants | MEP, Fire & Automation Experts" },
      { name: "description", content: "Since 2009, SDC delivers premium MEP, Electronic Security, Automation & Technical Auditing consultancy for residences, commercial, hospitals & industries." },
      { property: "og:title", content: "SDC — Services Design Consultants" },
      { property: "og:description", content: "MEP, Electronic Security, Automation & Technical Auditing — engineering future-ready infrastructure since 2009." },
    ],
  }),
});

const services = [
  { icon: Zap, title: "Electrical Services", desc: "Distribution, lighting, lightning protection, harmonics, captive power, UPS & solar.", img: imgElec, to: "/services/electrical" },
  { icon: Wind, title: "HVAC Systems", desc: "Heat ventilation, air conditioning & integrated building management systems.", img: imgHvac, to: "/services/hvac" },
  { icon: Flame, title: "Plumbing & Firefighting", desc: "PHE, sprinklers, hydrants, fire pumps & NBC-compliant suppression.", img: imgPlumb, to: "/services/plumbing" },
] as const;

const moreServices = [
  { icon: ShieldCheck, title: "Electronic Security", desc: "CCTV, FA-PA, access control, networking & audio-visual.", to: "/services/security" },
  { icon: Lightbulb, title: "Lighting Design", desc: "Concept, calculation, drives & automation coordination.", to: "/services/lighting" },
  { icon: Gauge, title: "Energy Audit", desc: "Electrical, HVAC and PHE energy efficiency audits.", to: "/services/energy-audit" },
  { icon: Sun, title: "Energy Harvesting", desc: "Solar & wind integration with grid and DG systems.", to: "/services/energy-harvesting" },
] as const;

const why = [
  { icon: Award, title: "15+ Years Legacy", desc: "Trusted MEP consultancy since 2009." },
  { icon: Users, title: "Expert Team", desc: "Led by 30+ year veterans across Electrical, PHE & HVAC." },
  { icon: CheckCircle2, title: "IGBC Certified", desc: "Indian Green Building Council credentials." },
  { icon: Building2, title: "300+ Projects", desc: "Residences, hospitals, labs, industries & commercial." },
];

const process = [
  { n: "01", t: "Design Brief", d: "Understand vision & feasibility." },
  { n: "02", t: "Engineering", d: "Detailed drawings & cost estimates." },
  { n: "03", t: "Execution", d: "On-site supervision & coordination." },
  { n: "04", t: "Handover", d: "Bill certification & commissioning." },
];

const clients = ["MARUTHI GROUP", "KHOSLA ASSOCIATES", "1522 BAR & RESTAURANTS", "THOMAS ASSOCIATES", "FINESSE IN FAB", "AVOIT ARCHITECTS", "MAZE CONCEPTS", "ALTIUS HOSPITAL", "ARTH AYURVEDIC"];

const heroSlides = [
  {
    img: hero,
    eyebrow: "MEP Consultancy · Since 2009",
    title: <>Engineering<br /><span className="text-gradient-accent">Future-Ready</span><br />Infrastructure.</>,
    desc: "MEP · Electronic Security · Automation · Technical Auditing — design solutions that empower buildings, industries and visionaries.",
  },
  {
    img: imgCta,
    eyebrow: "Premium Spaces · Crafted Interiors",
    title: <>Spaces that <br /><span className="text-gradient-accent">Inspire</span><br />Every Day.</>,
    desc: "We design extraordinary residences, hospitals, labs, and commercial environments that you'll never want to leave.",
  },
  {
    img: imgHvac,
    eyebrow: "Sustainable · IGBC Certified",
    title: <>Green by <br /><span className="text-gradient-accent">Design</span>,<br />Smart by Default.</>,
    desc: "Energy audits, solar harvesting, and intelligent HVAC — engineering for a sustainable tomorrow.",
  },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {heroSlides.map((s, idx) => (
        <img
          key={idx}
          src={s.img}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${idx === i ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/40" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32">
        <div key={i} className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-accent-glow" /> {heroSlides[i].eyebrow}
          </div>
          <h1 className="text-5xl font-bold leading-[1.05] text-white md:text-7xl lg:text-[5.5rem] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {heroSlides[i].title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            {heroSlides[i].desc}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-accent px-8 py-4 font-semibold text-accent-foreground shadow-accent shine">
              Contact Now
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15">
              Explore Services
            </a>
          </div>
        </div>
        <div className="mt-12 flex gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-12 bg-accent" : "w-6 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="h-12 w-7 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-white/80" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700" />
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img src={imgElec} alt="MEP design" loading="lazy" className="hover-zoom-img w-full" />
          </div>
          <div className="absolute -bottom-6 -right-6 z-10 rounded-2xl bg-gradient-accent p-6 shadow-accent text-accent-foreground hidden sm:block">
            <Award className="h-8 w-8 mb-2" />
            <div className="text-sm font-semibold leading-tight">IGBC<br />Certified</div>
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Welcome to SDC</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">
            Empowering <span className="text-gradient-primary">Excellence</span> in MEP Design.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Services Design Consultants is an MEP consultancy delivering Mechanical, Electrical, Public Health, Environment & Fire Fighting marvels since 2009 — for industries, residences, hospitals, labs, commercial buildings & villas.
          </p>
          <Link to="/about" className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-gradient-accent hover:text-accent-foreground">
            Learn More About Us <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: Building2, label: "Commercial" },
              { icon: Zap, label: "Industrial" },
              { icon: Users, label: "Residential" },
              { icon: ShieldCheck, label: "Corporate" },
            ].map((c) => (
              <div key={c.label} className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover-lift cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-accent text-accent-foreground transition-transform group-hover:rotate-6">
                  <c.icon className="h-5 w-5" />
                </div>
                <span className="font-medium">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 rounded-3xl bg-gradient-primary px-8 py-12 text-primary-foreground shadow-elegant md:grid-cols-4">
          {[
            { n: 15, s: "+", l: "Years Experience" },
            { n: 30, s: "+", l: "Expert Team" },
            { n: 300, s: "+", l: "Projects Delivered" },
            { n: 50, s: "+", l: "Happy Clients" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gradient-accent">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/80">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">What We Offer</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Comprehensive <span className="text-gradient-primary">MEP Solutions</span></h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">From design brief to commissioning — end-to-end engineering excellence.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Link key={s.title} to={s.to} className="group relative overflow-hidden rounded-3xl shadow-card hover-lift cursor-pointer animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="hover-zoom-img h-full w-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent shadow-accent transition-transform group-hover:rotate-6 group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/85 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                  {s.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-glow">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {moreServices.map((s, i) => (
            <Link key={s.title} to={s.to} className="group rounded-2xl border border-border bg-card p-6 hover-lift cursor-pointer animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all group-hover:bg-gradient-accent group-hover:text-accent-foreground group-hover:rotate-6">
                <s.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 font-semibold text-lg">{s.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-[1fr_1.2fr] items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Why Choose SDC</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Designed for <span className="text-gradient-accent">Performance.</span><br />Built on Trust.</h2>
          <p className="mt-6 text-muted-foreground">Led by Shri. N.A. Iyer (30+ yrs Electrical) and Shri. K.T. Shivprasad (25+ yrs PHE & Fire Fighting), our team designs reliable, scalable infrastructure with future-ready technology.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-accent shine">
            Book Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {why.map((w, i) => (
            <div key={w.title} className="group rounded-2xl border border-border bg-card p-6 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-card transition-all group-hover:scale-110 group-hover:rotate-[-6deg]">
                <w.icon className="h-7 w-7" />
              </div>
              <h4 className="mt-5 text-xl font-bold">{w.title}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Residences", "Hospitals", "Labs", "Commercial", "Industries", "Villas", "Restaurants", "Apartments"];
  return (
    <section className="overflow-hidden border-y border-border bg-primary-deep py-8 text-primary-foreground">
      <div className="flex animate-marquee gap-12 whitespace-nowrap text-3xl md:text-5xl font-bold">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="text-white">{it}</span>
            <span className="text-accent">+</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Process</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">How We <span className="text-gradient-primary">Deliver</span></h2>
        </div>
        <div className="grid gap-8 md:grid-cols-4 relative">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px border-t-2 border-dashed border-accent/40" />
          {process.map((p, i) => (
            <div key={p.n} className="relative text-center group animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-card border-2 border-accent text-accent font-bold text-lg transition-all group-hover:bg-gradient-accent group-hover:text-accent-foreground group-hover:scale-110">
                {p.n}
                <span className="absolute inset-0 rounded-full animate-pulse-ring" />
              </div>
              <h4 className="mt-5 text-xl font-bold">{p.t}</h4>
              <p className="mt-2 text-sm text-muted-foreground px-4">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="py-20 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Trusted By</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Our Major <span className="text-gradient-primary">Clients</span></h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-card">
          {clients.map((c) => (
            <div key={c} className="group flex items-center justify-center bg-card p-8 transition-all hover:bg-gradient-accent hover:text-accent-foreground cursor-pointer">
              <span className="font-semibold text-center text-sm md:text-base text-muted-foreground transition-colors group-hover:text-accent-foreground">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Marquee />
      <Process />
      <ProjectsPreview />
      <Testimonials />
      <Clients />
      <GetInTouch />
      <Footer />
    </main>
  );
}
