import { motion } from "framer-motion";
import { UserPlus, FileUp, ScanSearch, Target, GraduationCap } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Sign Up", desc: "Create an account in seconds to get started." },
  { icon: FileUp, title: "Upload CV & Select Role", desc: "Share your background and choose your target tech or data role." },
  { icon: ScanSearch, title: "Skill Profile", desc: "SkillAtlas identifies your current skills and experience." },
  { icon: Target, title: "Role Match Score", desc: "See how closely your skills align with your chosen role and where the gaps are." },
  { icon: GraduationCap, title: "Personalised Learning Path", desc: "Receive clear, actionable steps to build job-ready skills." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="min-h-screen flex items-center bg-muted/50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#2dd4bf] mb-4">
          How It Works
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Get Started in 5 Simple Steps
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="flex items-start gap-5">
              {/* Timeline column */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0f2027] border-2 border-[#2dd4bf] text-[#2dd4bf] shrink-0 font-display font-bold text-sm">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-16 mt-2" style={{ background: 'rgba(45,212,191,0.3)' }} />
                )}
              </div>

              {/* Content */}
              <div className="pb-12">
                <div className="flex items-center gap-2 mb-1">
                  <step.icon size={18} className="text-[#2dd4bf]" />
                  <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
