import { motion } from "framer-motion";
import { BarChart3, Target, Clock, Route, TrendingUp, Briefcase } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Real-Time Demand Data", desc: "Skills ranked by what employers are actually hiring for right now." },
  { icon: Target, title: "Personal Skill Gap Analysis", desc: "See exactly what's missing from your profile — no generic advice." },
  { icon: Clock, title: "Time to Job Readiness", desc: "Know how long until you're competitive for your target role." },
  { icon: Route, title: "Tailored Career Paths", desc: "Every recommendation is built around your goals, not a one-size-fits-all course list." },
  { icon: TrendingUp, title: "Progress Tracking", desc: "See where you stand and what to focus on next, at a glance." },
  { icon: Briefcase, title: "Designed to Get You Hired", desc: "Every feature exists to move you closer to a real job offer." },
];

const FeaturesSection = () => (
  <section id="features" className="min-h-screen flex items-center bg-[#f8fffe]">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#0f6e56] mb-4">
          Features
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-[#0f2027] mb-4">
          Everything You Need to Land the Job
        </h2>
        <p className="text-lg text-muted-foreground">
          Real insights from real job postings — not guesswork or generic advice.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-[#c8f5ed] bg-card p-8 hover:shadow-lg transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#e1faf5] text-[#2dd4bf] mb-5">
              <f.icon size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
