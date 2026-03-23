import BrandLogo from "@/components/BrandLogo";

const Footer = () => (
  <footer className="bg-primary py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <a href="/">
            <img src={logo} alt="SkillAtlas" className="h-9" />
          </a>
          <p className="text-primary-foreground/60 mt-4 text-sm leading-relaxed">
            Empowering learners worldwide to build skills that matter and launch meaningful careers.
          </p>
        </div>
        {[
          { title: "Platform", links: ["Programs", "Courses", "Mentorship", "Jobs"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
          { title: "Support", links: ["Help Center", "Contact", "Privacy", "Terms"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
