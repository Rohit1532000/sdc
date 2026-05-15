import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import imgAudit from "@/assets/svc-audit.jpg";

export const Route = createFileRoute("/services/energy-audit")({
  component: () => (
    <ServicePage
      name="Energy Audit"
      content={{
        eyebrow: "Sustainability · Service",
        title: <>Energy <span className="text-gradient-accent">Audit</span> & Efficiency</>,
        subtitle: "Reduce running costs and environmental impact with deep audits across electrical, HVAC and PHE systems.",
        hero: imgAudit,
        detailImage: imgAudit,
        intro: "SDC performs comprehensive energy audits and efficiency studies, identifying opportunities to reduce consumption, optimize equipment and align with green building benchmarks.",
        features: [
          "Electrical Energy Audits",
          "HVAC Energy Audits",
          "PHE & Fire Fighting Audits",
          "Equipment Performance Studies",
          "Operational Efficiency Reports",
          "Green Building Compliance",
        ],
        benefits: [],
      }}
    />
  ),
  head: () => ({
    meta: [
      { title: "Energy Audit & Efficiency — SDC" },
      { name: "description", content: "Energy audits across electrical, HVAC and PHE systems to reduce costs and environmental impact." },
    ],
  }),
});
