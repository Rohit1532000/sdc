import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { GetInTouch } from "@/components/site/GetInTouch";
import imgCta from "@/assets/cta-interior.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact SDC — Book a Consultation" },
      { name: "description", content: "Get in touch with Services Design Consultants. Office in Bengaluru. Phone, email and contact form to start your MEP project." },
      { property: "og:title", content: "Contact SDC — Book a Consultation" },
      { property: "og:description", content: "Reach our studio for premium MEP, Fire, Security and Automation design consultancy." },
    ],
  }),
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <PageHero
        eyebrow="Get In Touch"
        title={<>Let's start your <span className="text-gradient-accent">next project</span>.</>}
        subtitle="Tell us about your vision — our consultants respond within 24 hours."
        image={imgCta}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <GetInTouch />
      <Footer />
    </main>
  );
}
