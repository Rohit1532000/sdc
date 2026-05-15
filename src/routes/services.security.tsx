import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import imgSec from "@/assets/svc-security.jpg";

export const Route = createFileRoute("/services/security")({
  component: () => (
    <ServicePage
      name="Electronic Security"
      content={{
        eyebrow: "ELV · Service",
        title: <>Electronic <span className="text-gradient-accent">Security</span></>,
        subtitle: "CCTV, FA-PA, access control, networking and intelligent automation — for buildings that watch over themselves.",
        hero: imgSec,
        detailImage: imgSec,
        intro: "SDC's electronic security designs integrate surveillance, access control, fire alarm and networking with intelligent building automation — designed to scale with future technology.",
        features: [
          "CCTV Surveillance Systems",
          "Fire Alarm & Public Address (FA-PA)",
          "Access Control Systems",
          "Network Systems & Wi-Fi Integration",
          "Intelligent Building Automation",
          "Audio-Visual Networking",
        ],
        benefits: [],
      }}
    />
  ),
  head: () => ({
    meta: [
      { title: "Electronic Security — SDC ELV Consultants" },
      { name: "description", content: "CCTV, FA-PA, access control, networking, intelligent building automation and audio-visual design by SDC." },
    ],
  }),
});
