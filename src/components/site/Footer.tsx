import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Youtube, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/sdc-logo.png";

const socials = [
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="SDC" className="h-12 w-12 object-contain bg-white rounded-lg p-1" />
            <div>
              <div className="text-lg font-bold">SDC</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/70">Services Design Consultants</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70">MEP, Electronic Security, Automation & Technical Auditing — since 2009.</p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-gradient-accent hover:text-accent-foreground hover:scale-110">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-accent-glow">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/services/electrical" className="hover:text-accent-glow transition">Electrical</Link></li>
            <li><Link to="/services/hvac" className="hover:text-accent-glow transition">HVAC</Link></li>
            <li><Link to="/services/plumbing" className="hover:text-accent-glow transition">Plumbing & Fire</Link></li>
            <li><Link to="/services/lighting" className="hover:text-accent-glow transition">Lighting Design</Link></li>
            <li><Link to="/services/energy-audit" className="hover:text-accent-glow transition">Energy Audit</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-accent-glow">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-accent-glow transition">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-accent-glow transition">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-accent-glow transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-accent-glow">Connect</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent-glow shrink-0" /><span>Bengaluru, Karnataka, India</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent-glow shrink-0" /><span>+91 99000 00000</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent-glow shrink-0" /><span>info@sdc-consultants.in</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Services Design Consultants. All rights reserved.
      </div>
    </footer>
  );
}
