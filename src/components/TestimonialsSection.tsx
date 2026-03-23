import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    text: "SkillAtlas transformed my career trajectory. The structured programs and mentorship helped me land my dream role within 6 months.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Data Analyst at Shopify",
    text: "The community here is incredible. I went from zero coding experience to a full-time data role. The courses are practical and industry-relevant.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "UX Designer at Figma",
    text: "What sets SkillAtlas apart is the real-world projects. I built a portfolio that actually impressed hiring managers. Worth every minute.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-muted/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Trusted by Thousands of Learners
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
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
            className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} size={18} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/90 leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
