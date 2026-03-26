import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="African professionals collaborating in a modern workspace"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Gradient overlay — darker on left for text, fading to reveal image */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(15,32,39,0.75) 0%, rgba(15,32,39,0.65) 45%, rgba(15,32,39,0.05) 100%)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,32,39,0.5)] via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="self-start rounded-full px-5 py-2 text-sm font-bold text-[#2dd4bf] border border-[#2dd4bf]/40 bg-white/5 backdrop-blur-sm mb-4">
            Join 10,000+ learners transforming their careers
          </span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6 drop-shadow-[0_3px_12px_rgba(0,0,0,0.5)]">
            Map Your <span className="text-[#2dd4bf]">Skills</span>.{" "}
            Chart Your <span className="text-[#2dd4bf]">Future</span>.
          </h1>

          <p className="text-lg md:text-xl text-[#D1D5DB] max-w-2xl mx-auto mb-10 font-body leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            SkillAtlas connects you to world-class programs, curated courses, and real job opportunities—all in one platform designed for your growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="cta"
              size="lg"
              className="text-lg px-8 py-6 gap-2 shadow-[0_4px_20px_rgba(45,212,191,0.4)] hover:shadow-[0_6px_28px_rgba(45,212,191,0.5)]"
              onClick={onGetStarted}
            >
              Get Started for Free
              <ArrowRight size={20} />
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, rgba(15,32,39,1), transparent)' }} />
    </section>
  );
};

export default HeroSection;
