import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import foundingTeam from "@/assets/founding-team.png";

const WhySection = () => (
  <section id="about-us" className="py-24 bg-muted/50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary mb-4">
          Our Mission
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Why We Built SkillAtlas
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Left — Image (stacks below text on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center order-2 md:order-1"
        >
          <div className="w-full max-w-md overflow-hidden rounded-[10px] shadow-lg">
            <img
              src={foundingTeam}
              alt="The SkillAtlas Founding Team"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mt-4 text-sm italic text-muted-foreground">
            The minds behind SkillAtlas
          </p>
        </motion.div>

        {/* Right — Text (shows first on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-6 order-1 md:order-2"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Too many people waste months learning skills that don't match what employers actually want. They follow outdated advice, random YouTube playlists, and course recommendations that lead nowhere.
          </p>
          <p className="text-lg text-foreground font-medium leading-relaxed">
            SkillAtlas exists to fix that — by connecting your learning directly to real job market demand, so every hour you invest moves you closer to getting hired.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhySection;
