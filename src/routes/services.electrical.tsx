import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import imgElec from "@/assets/svc-electrical.jpg";

export const Route = createFileRoute("/services/electrical")({
  component: () => (
    <ServicePage
      name="Electrical Services"
      content={{
        eyebrow: "MEP · Service",
        title: <>Electrical <span className="text-gradient-accent">Services</span></>,
        subtitle: "Distribution, lighting protection, harmonics, captive power and renewable integration — engineered for reliability.",
        hero: imgElec,
        detailImage: imgElec,
        intro: "From design brief to commissioning, SDC delivers complete electrical engineering for industries, residences, hospitals and commercial buildings — covering distribution, lightning protection, power correction and renewable integration.",
        features: [
          "Electrical Distribution System",
          "Lighting Design",
          "Lightning Protection & Grounding Systems",
          "Power Correction with Harmonic Studies",
          "Captive Power Solutions",
          "Generators, UPS, Solar & Wind Energy",
        ],
        benefits: [],
      }}
    />
  ),
  head: () => ({
    meta: [
      { title: "Electrical Services — SDC MEP Consultants" },
      { name: "description", content: "Complete electrical engineering — distribution, lighting, lightning protection, harmonics, captive power, generators, UPS and solar." },
    ],
  }),
});
