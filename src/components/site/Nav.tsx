import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import logo from "@/assets/sdc-logo.png";

const services = [
  { to: "/services/electrical", label: "Electrical Services" },
  { to: "/services/hvac", label: "HVAC Systems" },
  { to: "/services/plumbing", label: "Plumbing & Firefighting" },
  { to: "/services/security", label: "Electronic Security" },
  { to: "/services/lighting", label: "Lighting Design" },
  { to: "/services/energy-audit", label: "Energy Audit" },
  { to: "/services/energy-harvesting", label: "Energy Harvesting" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="SDC Logo" className="h-12 w-12 object-contain transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110" />
          <div className="leading-tight">
            <div className="text-lg font-bold tracking-wide text-foreground">SDC</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Services Design Consultants</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="story-link text-sm font-medium text-foreground" activeOptions={{ exact: true }} activeProps={{ className: "text-accent" }}>Home</Link>
          <Link to="/about" className="story-link text-sm font-medium text-foreground" activeProps={{ className: "text-accent" }}>About</Link>
          <div className="relative" onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
            <button className="story-link inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-foreground">
              <span>Services</span>
              <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ${svcOpen ? "rotate-180" : ""}`} />
            </button>
            {svcOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 animate-fade-in">
                <div className="w-64 rounded-2xl border border-border bg-white p-2 shadow-elegant">
                  {services.map((s) => (
                    <Link key={s.to} to={s.to} className="block rounded-lg px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary hover:text-accent">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/projects" className="story-link text-sm font-medium text-foreground" activeProps={{ className: "text-accent" }}>Projects</Link>
          <Link to="/contact" className="story-link text-sm font-medium text-foreground" activeProps={{ className: "text-accent" }}>Contact</Link>
        </nav>
        <Link to="/contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-white shadow-accent shine transition-transform hover:scale-105">
          Book Consult <ArrowRight className="h-4 w-4" />
        </Link>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="flex flex-col p-6 gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="text-foreground py-1">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="text-foreground py-1">About</Link>
            <div className="text-xs uppercase tracking-wider text-muted-foreground pt-2">Services</div>
            {services.map((s) => (
              <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="text-foreground py-1 pl-2 text-sm">{s.label}</Link>
            ))}
            <Link to="/projects" onClick={() => setOpen(false)} className="text-foreground py-1 pt-2">Projects</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="text-foreground py-1">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
