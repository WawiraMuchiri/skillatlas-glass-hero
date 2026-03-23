import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel-strong">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-2xl font-bold tracking-tight text-primary-foreground">
          Skill<span className="text-accent">Atlas</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Programs", "Courses", "Community", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <Button variant="cta" size="sm">
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-panel-strong px-6 pb-6 flex flex-col gap-4">
          {["Programs", "Courses", "Community", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button variant="cta" size="sm" className="w-full">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
