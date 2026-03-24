import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import foundingTeam from "@/assets/founding-team.png";

const founders = [
  {
    name: "Linus Langat",
    url: "https://linkedin.com/in/linuslangat",
    objectPosition: "16% 42%",
  },
  {
    name: "Rosalyne Muchiri",
    url: "https://linkedin.com/in/rosalyne-muchiri-357050186",
    objectPosition: "52% 40%",
  },
  {
    name: "Peter Masudi",
    url: "https://linkedin.com/in/peter-kemei-71745b215",
    objectPosition: "84% 42%",
  },
];

const WhySection = () => (
  <section id="about-us" className="bg-muted/50 py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center"
      >
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-secondary">
          Our Mission
        </span>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
          Why We Built SkillAtlas
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-2 flex flex-col items-center md:order-1"
        >
          <div className="w-full max-w-md rounded-[10px] bg-background px-6 pt-8 pb-8 shadow-lg ring-1 ring-border/60">
            <div className="grid grid-cols-3 items-start justify-center gap-4">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="flex flex-col items-center justify-center gap-y-3 text-center"
                >
                  <div className="h-24 w-24 overflow-hidden rounded-full shadow-sm ring-1 ring-border/50">
                    <img
                      src={foundingTeam}
                      alt={`${founder.name} from the SkillAtlas founding team`}
                      loading="lazy"
                      className="h-full w-full origin-center scale-[1.65] object-cover"
                      style={{ objectPosition: founder.objectPosition }}
                    />
                  </div>

                  <a
                    href={founder.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-center text-[11px] font-semibold leading-tight text-foreground transition-colors hover:text-primary"
                  >
                    <span>{founder.name}</span>
                    <Linkedin size={11} className="shrink-0 text-primary" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-sm italic text-muted-foreground">
            The minds behind SkillAtlas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="order-1 space-y-6 md:order-2"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Too many people waste months learning skills that don't match what employers actually want. They follow outdated advice, random YouTube playlists, and course recommendations that lead nowhere.
          </p>
          <p className="text-lg font-medium leading-relaxed text-foreground">
            SkillAtlas exists to fix that — by connecting your learning directly to real job market demand, so every hour you invest moves you closer to getting hired.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhySection;
