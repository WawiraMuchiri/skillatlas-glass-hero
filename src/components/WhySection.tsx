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
        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="w-full max-w-md overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(0,51,153,0.12)] border border-[#00339919]">
            <AspectRatio ratio={4 / 5}>
              <img
                src={foundingTeam}
                alt="The SkillAtlas Founding Team"
                className="w-full h-full object-cover object-center"
              />
            </AspectRatio>
          </div>
          <p className="mt-4 text-sm italic text-[#333333]">
            The minds behind SkillAtlas
          </p>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-6"
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
