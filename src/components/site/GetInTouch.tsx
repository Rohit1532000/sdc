import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Instagram, Youtube, Linkedin, Facebook, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
  service: z.string().trim().min(2).max(80),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

const services = [
  "Electrical Services", "HVAC Systems", "Plumbing & Firefighting",
  "Electronic Security", "Lighting Design", "Energy Audit", "Energy Harvesting", "Other",
];

const socials = [
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export function GetInTouch() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      service: fd.get("service"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSent(true);
    toast.success("Thanks! We'll be in touch within 24 hours.");
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="get-in-touch" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-secondary/40" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Get In Touch</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Let's Build Something <span className="text-gradient-accent">Extraordinary</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Tell us about your project — our consultants respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* LEFT — Contact info */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-10 text-primary-foreground shadow-elegant">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-accent-glow/20 blur-3xl" />
            <div className="relative">
              <h3 className="text-2xl font-bold">Reach Our Studio</h3>
              <p className="mt-2 text-primary-foreground/80 text-sm">
                Engineering excellence, just a message away.
              </p>

              <ul className="mt-8 space-y-6">
                {[
                  { Icon: MapPin, label: "Office Address", value: "SDC Consultants, Bengaluru, Karnataka 560001, India" },
                  { Icon: Phone, label: "Phone Number", value: "+91 99000 00000", href: "tel:+919900000000" },
                  { Icon: Mail, label: "Email Address", value: "info@sdc-consultants.in", href: "mailto:info@sdc-consultants.in" },
                ].map(({ Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur transition-all group-hover:bg-gradient-accent group-hover:rotate-6">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-wider text-primary-foreground/70">{label}</div>
                        <div className="mt-1 font-semibold leading-snug">{value}</div>
                      </div>
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} className="group flex items-start gap-4 transition-transform hover:translate-x-1">{inner}</a>
                      ) : (
                        <div className="group flex items-start gap-4">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 pt-8 border-t border-white/15">
                <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Follow Us</div>
                <div className="mt-4 flex gap-3">
                  {socials.map(({ Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-all hover:bg-gradient-accent hover:scale-110 hover:-rotate-6">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card">
            <div className="grid gap-5 md:grid-cols-2">
              <Field name="name" label="Full Name" type="text" placeholder="Your name" />
              <Field name="email" label="Email" type="email" placeholder="you@email.com" />
              <Field name="phone" label="Phone" type="tel" placeholder="+91 9XXXX XXXXX" />
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service</label>
                <select name="service" required defaultValue=""
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20">
                  <option value="" disabled>Select a service</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea name="message" required rows={5} placeholder="Tell us about your project..."
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20" />
            </div>
            <button type="submit" disabled={sent}
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-accent px-8 py-4 font-semibold text-accent-foreground shadow-accent shine transition-all hover:scale-105 hover:shadow-elegant disabled:opacity-80">
              {sent ? (<><CheckCircle2 className="h-5 w-5" /> Message Sent</>) : (<>Send Message
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span></>)}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">By submitting, you agree to be contacted regarding your enquiry.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type, placeholder }: { name: string; label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input name={name} type={type} required placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20" />
    </div>
  );
}
