import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import imgEnergy from "@/assets/svc-energy.jpg";

export const Route = createFileRoute("/services/energy-harvesting")({
  component: () => (
    <ServicePage
      name="Energy Harvesting"
      content={{
        eyebrow: "Allied · Service",
        title: <>Energy <span className="text-gradient-accent">Harvesting</span></>,
        subtitle: "Solar, wind and hybrid integrations engineered to deliver clean power, today and tomorrow.",
        hero: imgEnergy,
        detailImage: imgEnergy,
        intro: "We design solar, wind and hybrid renewable systems and integrate them with grid power and DG sources for resilient, sustainable building infrastructure.",
        features: [
          "Solar Power for Electrical Distribution",
          "Wind Energy Harvesting",
          "Solar + Wind + DG + Grid Integration",
          "Net-Metering Design",
          "Battery Energy Storage",
          "Renewable ROI Studies",
        ],
        benefits: [],
      }}
    />
  ),
  head: () => ({
    meta: [
      { title: "Energy Harvesting — SDC Renewable Design" },
      { name: "description", content: "Solar, wind and hybrid energy systems integrated with grid and DG power — by SDC." },
    ],
  }),
});
