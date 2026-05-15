import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  breadcrumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  breadcrumb: { label: string; to?: string }[];
}) {
  return (
    <section className="relative pt-24">
      <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover scale-105 animate-fade-in" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/30" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md animate-fade-up">
            {eyebrow}
          </div>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-white/85 animate-fade-up" style={{ animationDelay: "0.2s" }}>{subtitle}</p>
          )}
          <nav className="mt-8 flex flex-wrap items-center gap-2 text-sm text-white/80 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/50" />}
                {b.to ? <Link to={b.to} className="hover:text-accent-glow transition">{b.label}</Link> : <span className="text-accent-glow">{b.label}</span>}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
