import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Building2, FlaskConical, HeartPulse, Home, Hotel, Factory } from "lucide-react";
import { projects } from "@/data/projects";

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

export function ProjectsPreview() {
  const featured = projects.slice(0, 6);
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-14">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Portfolio</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              From luxury villas to research labs — engineered with precision, delivered with passion.
            </p>
          </div>
          <Link to="/projects" className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-gradient-accent hover:text-accent-foreground hover:shadow-accent">
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => {
            const { gradient, icon: Icon } = styleFor(p.category);
            return (
              <article key={p.title + i}
                className={`group relative overflow-hidden rounded-3xl shadow-card cursor-pointer animate-fade-up bg-gradient-to-br ${gradient}`}
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="relative h-[200px]">
                  {/* Decorative blobs */}
                  <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-white/20" />
                  <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-black/30 blur-3xl transition-all duration-700 group-hover:scale-125" />

                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:32px_32px]" />

                  {/* Big icon watermark */}
                  <Icon className="absolute right-4 bottom-3 h-24 w-24 text-white/15 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6" />

                  {/* Category chip */}
                  <span className="absolute top-4 left-4 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    {p.category}
                  </span>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:bg-gradient-accent group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>

                  {/* Content */}
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
      </div>
    </section>
  );
}
