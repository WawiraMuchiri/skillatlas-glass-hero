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
      {/* Subtle overlay — keeps image vibrant */}
      <div className="absolute inset-0 bg-primary/15" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block glass-panel rounded-full px-5 py-2 text-sm font-medium text-foreground mb-8">
            Join 10,000+ learners transforming their careers
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Map Your Skills.{" "}
            <span className="text-primary-foreground">Chart Your Future.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 font-body leading-relaxed drop-shadow-md">
            SkillAtlas connects you to world-class programs, curated courses, and real job opportunities—all in one platform designed for your growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="cta"
              size="lg"
              className="text-lg px-8 py-6 gap-2"
              onClick={onGetStarted}
            >
              Get Started for Free
              <ArrowRight size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-primary-foreground/60 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
            >
              Explore Programs
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
