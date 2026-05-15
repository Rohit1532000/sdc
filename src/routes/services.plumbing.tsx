import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import imgPlumb from "@/assets/svc-plumbing.jpg";

export const Route = createFileRoute("/services/plumbing")({
  component: () => (
    <ServicePage
      name="Plumbing & Firefighting"
      content={{
        eyebrow: "MEP · Service",
        title: <>Plumbing & <span className="text-gradient-accent">Firefighting</span></>,
        subtitle: "PHE, sprinklers, hydrants, fire pumps and NBC-compliant suppression — protecting people and property.",
        hero: imgPlumb,
        detailImage: imgPlumb,
        intro: "Led by 25+ years of expertise in Public Health, Environment and Fire Fighting, SDC designs end-to-end PHE and firefighting systems compliant with the National Building Code.",
        features: [
          "Fresh Water Supply Design",
          "Sewage Water Disposal Systems",
          "Rainwater Harvesting",
          "Water Treatment Systems",
          "Sprinkler & Hydrant Systems",
          "Fire Pump & NBC-Compliant Suppression",
        ],
        benefits: [],
      }}
    />
  ),
  head: () => ({
    meta: [
      { title: "Plumbing & Firefighting — SDC MEP Consultants" },
      { name: "description", content: "End-to-end PHE and NBC-compliant firefighting design — water supply, sewage, rainwater, sprinklers, hydrants and fire pumps." },
    ],
  }),
});
