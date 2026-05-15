import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin, Building2, FlaskConical, HeartPulse, Home, Hotel, Factory } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { CtaContact } from "@/components/site/CtaContact";
import { projects, projectCategories } from "@/data/projects";
import imgApt from "@/assets/proj-apartment.jpg";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — SDC | Apartments, Villas, Labs, Hospitals & More" },
      { name: "description", content: "Browse SDC's portfolio of completed and ongoing projects across high-end residences, apartments, villas, lab sector, hospitals and restaurants." },
      { property: "og:title", content: "SDC Projects Portfolio" },
      { property: "og:description", content: "From luxury villas to research labs — engineered with precision, delivered with passion." },
    ],
  }),
});

const categoryStyles: Record<string, { gradient: string; icon: typeof Building2 }> = {
  "High-End Residences": { gradient: "from-[oklch(0.32_0.05_230)] via-[oklch(0.45_0.08_220)] to-[oklch(0.62_0.21_27)]", icon: Home },
  "Apartments / Villas": { gradient: "from-[oklch(0.25_0.04_240)] via-[oklch(0.42_0.09_210)] to-[oklch(0.7_0.15_200)]", icon: Building2 },
  "Lab Sector": { gradient: "from-[oklch(0.22_0.05_180)] via-[oklch(0.4_0.1_190)] to-[oklch(0.65_0.18_160)]", icon: FlaskConical },
  "Hospitals": { gradient: "from-[oklch(0.28_0.06_350)] via-[oklch(0.5_0.15_20)] to-[oklch(0.72_0.18_30)]", icon: HeartPulse },
  "Restaurants": { gradient: "from-[oklch(0.3_0.06_290)] via-[oklch(0.45_0.12_300)] to-[oklch(0.68_0.18_320)]", icon: Hotel },
  "Ongoing Projects": { gradient: "from-[oklch(0.2_0.03_240)] via-[oklch(0.38_0.06_230)] to-[oklch(0.55_0.1_60)]", icon: Factory },
};

function styleFor(category: string) {
  return categoryStyles[category] ?? { gradient: "from-primary-deep via-primary to-accent", icon: Building2 };
}

function ProjectsPage() {
  const [active, setActive] = useState<string>("All");
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <PageHero
        eyebrow="Our Portfolio"
        title={<>Projects that <span className="text-gradient-accent">define excellence</span>.</>}
        subtitle="A curated selection of MEP design assignments delivered across India — apartments, villas, hospitals, labs and ongoing landmarks."
        image={imgApt}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
            {projectCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === c
                    ? "bg-gradient-accent text-accent-foreground shadow-accent scale-105"
                    : "border border-border bg-card text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => {
              const { gradient, icon: Icon } = styleFor(p.category);
              return (
                <article
                  key={p.title + i}
                  className={`group relative overflow-hidden rounded-3xl shadow-card cursor-pointer animate-fade-up bg-gradient-to-br ${gradient}`}
                  style={{ animationDelay: `${(i % 9) * 0.06}s` }}
                >
                  <div className="relative h-[200px]">
                    <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-white/20" />
                    <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-black/30 blur-3xl transition-all duration-700 group-hover:scale-125" />
                    <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:32px_32px]" />
                    <Icon className="absolute right-4 bottom-3 h-24 w-24 text-white/15 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6" />
                    <span className="absolute top-4 left-4 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      {p.category}
                    </span>
                    <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:bg-gradient-accent group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                    <div className="absolute inset-x-4 bottom-3 text-white">
                      <h3 className="text-base font-bold leading-tight drop-shadow">{p.title}</h3>
                      {p.location && (
                        <div className="mt-1 flex items-center gap-1.5 text-xs text-white/85">
                          <MapPin className="h-3 w-3" /> {p.location}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center text-muted-foreground py-20">No projects in this category yet.</div>
          )}
        </div>
      </section>

      <CtaContact />
      <Footer />
    </main>
  );
}
