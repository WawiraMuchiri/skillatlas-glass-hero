import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    text: "SkillAtlas transformed my career trajectory. The structured programs and mentorship helped me land my dream role within 6 months.",
    rating: 5,
    badge: "Hired in 3 months",
  },
  {
    name: "Marcus Johnson",
    role: "Data Analyst at Shopify",
    text: "The community here is incredible. I went from zero coding experience to a full-time data role. The courses are practical and industry-relevant.",
    rating: 5,
    badge: "Offer in 2 months",
  },
  {
    name: "Priya Patel",
    role: "UX Designer at Figma",
    text: "What sets SkillAtlas apart is the real-world projects. I built a portfolio that actually impressed hiring managers. Worth every minute.",
    rating: 5,
    badge: "Promoted in 4 months",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-[#0f2027]">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#2dd4bf] mb-4">
          Success Stories
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Trusted by Thousands of Learners
        </h2>
        <p className="text-[rgba(255,255,255,0.75)] max-w-xl mx-auto">
          Real stories from real people who transformed their careers with SkillAtlas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="rounded-2xl p-8 hover:shadow-lg transition-shadow backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(45,212,191,0.20)",
            }}
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} size={18} className="fill-[#2dd4bf] text-[#2dd4bf]" />
              ))}
            </div>
            <p className="text-[rgba(255,255,255,0.75)] leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="font-display font-semibold text-white">{t.name}</p>
              <p className="text-sm text-[rgba(255,255,255,0.5)]">{t.role}</p>
            </div>
            <span className="inline-block mt-4 px-4 py-1.5 text-xs font-semibold rounded-full bg-[#2dd4bf]/10 text-[#2dd4bf] border border-[#2dd4bf]/20">
              {t.badge}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
