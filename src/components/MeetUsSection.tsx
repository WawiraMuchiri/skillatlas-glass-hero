import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import foundingTeam from "@/assets/founding-team.png";

const founders = [
  { name: "Linus Langat", url: "https://linkedin.com/in/linuslangat" },
  { name: "Rosalyne Muchiri", url: "https://linkedin.com/in/rosalyne-muchiri-357050186" },
  { name: "Peter Kemei", url: "https://linkedin.com/in/peter-kemei-71745b215" },
];

const MeetUsSection = () => (
  <section className="py-20 bg-[#0f2027]">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#2dd4bf] mb-4">
          Meet Us
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
          Our Team
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col items-center"
      >
        <div className="w-full max-w-md rounded-[10px] shadow-lg overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(45,212,191,0.2)' }}>
          <img
            src={foundingTeam}
            alt="The SkillAtlas Founding Team"
            className="w-full h-auto object-cover block"
          />
          <div className="grid grid-cols-3 px-3 pb-6 mt-[-20px]">
            {founders.map((f) => (
              <a
                key={f.name}
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 text-[11px] font-semibold text-foreground hover:text-primary transition-colors text-center whitespace-nowrap"
              >
                <Linkedin size={11} className="text-[#0A66C2] shrink-0" />
                {f.name}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm italic text-white">
          The minds behind SkillAtlas
        </p>
      </motion.div>
    </div>
  </section>
);

export default MeetUsSection;
