import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import imgHvac from "@/assets/svc-hvac.jpg";

export const Route = createFileRoute("/services/hvac")({
  component: () => (
    <ServicePage
      name="HVAC Systems"
      content={{
        eyebrow: "MEP · Service",
        title: <>HVAC <span className="text-gradient-accent">Systems</span></>,
        subtitle: "Heat ventilation, air conditioning and integrated building management for healthier, smarter spaces.",
        hero: imgHvac,
        detailImage: imgHvac,
        intro: "Our HVAC team — led by 13+ years of consulting expertise and BIM-driven design — delivers comfortable, efficient air handling for industrial, commercial and residential buildings.",
        features: [
          "Heat Ventilation & Air Conditioning Systems",
          "Heat Ventilation for Hot Zones",
          "Toilet & Hazardous Place Ventilation",
          "Integrated Building Management Systems (IBMS)",
          "BIM-Based HVAC Design",
          "Indoor Air Quality Optimization",
        ],
        benefits: [],
      }}
    />
  ),
  head: () => ({
    meta: [
      { title: "HVAC Systems — SDC MEP Consultants" },
      { name: "description", content: "Heat ventilation, air conditioning and integrated building management systems by SDC's HVAC consultants." },
    ],
  }),
});
