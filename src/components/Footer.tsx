import { Linkedin } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const Footer = () => (
  <footer className="bg-primary py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <BrandLogo className="text-primary-foreground [&>span]:text-primary-foreground [&>span:first-child]:text-secondary [&>span:nth-child(3)]:text-accent" />
          <p className="text-primary-foreground/60 mt-4 text-sm leading-relaxed">
            Empowering learners worldwide to build skills that matter and launch meaningful careers.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Blog</a></li>
            <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy</a></li>
            <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Terms</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-2">
            <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">WhatsApp</a></li>
            <li><a href="mailto:hello@skillatlas.com" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Email</a></li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} SkillAtlas. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
