import { motion } from "framer-motion";
import { Users, BookOpen, Briefcase } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Program Participants", delay: 0 },
  { icon: BookOpen, value: "250+", label: "Expert-Led Courses", delay: 0.15 },
  { icon: Briefcase, value: "5,200+", label: "Jobs Secured", delay: 0.3 },
];

const StatsSection = () => (
  <section className="relative z-10 -mt-16 pb-20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: stat.delay }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center group hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-4 group-hover:scale-110 transition-transform">
              <stat.icon size={28} />
            </div>
            <p className="font-display text-4xl font-bold text-foreground mb-1">{stat.value}</p>
            <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
