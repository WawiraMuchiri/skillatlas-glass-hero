import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import foundingTeam from "@/assets/founding-team.png";

const founders = [
  { name: "Linus Langat", role: "Co-Founder & CEO", url: "https://linkedin.com/in/linuslangat" },
  { name: "Rosalyne Muchiri", role: "Co-Founder & COO", url: "https://linkedin.com/in/rosalyne-muchiri-357050186" },
  { name: "Peter Masudi", role: "Co-Founder & CTO", url: "https://linkedin.com/in/peter-kemei-71745b215" },
];

const OurTeamSection = () => (
  <section id="our-team" className="py-24" style={{ background: "#0f2027" }}>
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#2dd4bf" }}>
          Meet Us
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-3">
          Our Team
        </h2>
        <p className="italic text-base" style={{ color: "rgba(255,255,255,0.45)" }}>
          The minds behind SkillAtlas
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {founders.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 * i }}
            className="rounded-xl p-6 flex flex-col items-center text-center"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(45,212,191,0.25)",
            }}
          >
            <div
              className="w-20 h-20 rounded-full overflow-hidden mb-4"
              style={{ border: "2px solid #2dd4bf" }}
            >
              <img
                src={foundingTeam}
                alt={f.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white font-semibold text-base mb-1">{f.name}</h3>
            <span
              className="text-xs font-medium rounded-full px-3 py-0.5 mb-3"
              style={{
                background: "rgba(45,212,191,0.12)",
                color: "#2dd4bf",
                border: "1px solid rgba(45,212,191,0.3)",
              }}
            >
              {f.role}
            </span>
            <a
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <Linkedin size={13} style={{ color: "#2dd4bf" }} />
              LinkedIn
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OurTeamSection;
