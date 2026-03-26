import { motion } from "framer-motion";

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          Too many people waste months learning skills that don't match what employers actually want. They follow outdated advice, random YouTube playlists, and course recommendations that lead nowhere.
        </p>
        <p className="text-lg text-foreground font-medium leading-relaxed">
          SkillAtlas exists to fix that — by connecting your learning directly to real job market demand, so every hour you invest moves you closer to getting hired.
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhySection;
