import { Linkedin } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const Footer = () => (
  <footer className="bg-[#071318] py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <BrandLogo className="[&>span]:text-white/80 [&>span:first-child]:text-white [&>span:nth-child(3)]:text-[#2dd4bf]" />
          <p className="text-[rgba(255,255,255,0.4)] mt-4 text-sm leading-relaxed">
            Empowering learners worldwide to build skills that matter and launch meaningful careers.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-display font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-[rgba(255,255,255,0.4)] hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="text-sm text-[rgba(255,255,255,0.4)] hover:text-white transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-display font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-[rgba(255,255,255,0.4)] hover:text-white transition-colors">Privacy</a></li>
            <li><a href="#" className="text-sm text-[rgba(255,255,255,0.4)] hover:text-white transition-colors">Terms</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2">
            <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-sm text-[rgba(255,255,255,0.4)] hover:text-white transition-colors">WhatsApp</a></li>
            <li><a href="mailto:hello@skillatlas.com" className="text-sm text-[rgba(255,255,255,0.4)] hover:text-white transition-colors">Email</a></li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.4)] hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-sm text-[rgba(255,255,255,0.3)]">
          © {new Date().getFullYear()} SkillAtlas. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
