import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/BrandLogo";

interface NavbarProps {
  onGetStarted: () => void;
}

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "Our Team", href: "#our-team" },
];

const Navbar = ({ onGetStarted }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f2027] backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="mr-8">
          <BrandLogo />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] font-bold text-white/65 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button size="sm" className="bg-[#fbbf24] text-[#0f2027] hover:bg-[#fbbf24]/90 font-semibold" onClick={onGetStarted}>
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f2027] px-6 pb-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/65 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button size="sm" className="w-full bg-[#fbbf24] text-[#0f2027] hover:bg-[#fbbf24]/90 font-semibold" onClick={() => { setOpen(false); onGetStarted(); }}>
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
