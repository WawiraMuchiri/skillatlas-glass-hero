import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/BrandLogo";

interface NavbarProps {
  onGetStarted: () => void;
}

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about-us" },
];

const Navbar = ({ onGetStarted }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel-strong">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <BrandLogo />

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button variant="cta" size="sm" onClick={onGetStarted}>
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-panel-strong px-6 pb-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="cta" size="sm" className="w-full" onClick={() => { setOpen(false); onGetStarted(); }}>
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
