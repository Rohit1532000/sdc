import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import imgLight from "@/assets/svc-lighting.jpg";

export const Route = createFileRoute("/services/lighting")({
  component: () => (
    <ServicePage
      name="Lighting Design"
      content={{
        eyebrow: "Design · Service",
        title: <>Lighting <span className="text-gradient-accent">Design</span></>,
        subtitle: "From concept to controls — lighting that elevates architecture and supports automation.",
        hero: imgLight,
        detailImage: imgLight,
        intro: "We collaborate with architects and clients to conceptualize, calculate and deliver lighting that complements design intent — coordinated with controls and automation.",
        features: [
          "Concept Design with Architects & Clients",
          "Lighting Selection & Application Mapping",
          "Light Level Calculations",
          "Lighting Sequencing with Drives",
          "Procurement Support",
          "Coordination with Lighting Automation",
        ],
        benefits: [],
      }}
    />
  ),
  head: () => ({
    meta: [
      { title: "Lighting Design — SDC Design Consultants" },
      { name: "description", content: "Concept, calculation, selection and automation coordination for premium lighting design." },
    ],
  }),
});
