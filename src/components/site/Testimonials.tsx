import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sandeep Khosla",
    role: "Principal Architect, Khosla Associates",
    review:
      "SDC's MEP design transformed our high-end residences. Their attention to detail and engineering precision are unmatched in the industry.",
    initials: "SK",
  },
  {
    name: "Ravi Maheshwari",
    role: "Director, Maheshwari Builders",
    review:
      "From 200+ apartments to villa layouts, SDC delivered seamless coordination, future-ready systems and on-time documentation. Truly reliable consultants.",
    initials: "RM",
  },
  {
    name: "Dr. Anil Reddy",
    role: "Founder, Altius Hospital",
    review:
      "The HVAC, electrical and firefighting design SDC executed for our hospital exceeded NBC standards. Patient safety and reliability — top notch.",
    initials: "AR",
  },
  {
    name: "Priya Thomas",
    role: "Lead Designer, Thomas Associates",
    review:
      "Their lighting design philosophy and energy audits cut our project's running costs significantly. A premium, professional partner from brief to handover.",
    initials: "PT",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-accent opacity-10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gradient-primary opacity-10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Testimonials</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Trusted Voices, <span className="text-gradient-primary">Real Results</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Architects, builders and visionaries who chose SDC to bring their projects to life.
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => {
              const isActive = i === active;
              return (
                <article
                  key={t.name}
                  onMouseEnter={() => setActive(i)}
                  className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-700 ${
                    isActive
                      ? "shadow-elegant -translate-y-2 scale-[1.02] border-accent/40"
                      : "hover-lift"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-primary transition-opacity duration-700 ${
                      isActive ? "opacity-[0.04]" : "opacity-0 group-hover:opacity-[0.04]"
                    }`}
                  />
                  <Quote
                    className={`h-9 w-9 transition-all duration-500 ${
                      isActive ? "text-accent" : "text-accent/40 group-hover:text-accent"
                    }`}
                  />
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/85 line-clamp-6">
                    "{t.review}"
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground shadow-card">
                      {t.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold truncate">{t.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{t.role}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? "w-10 bg-accent" : "w-5 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
