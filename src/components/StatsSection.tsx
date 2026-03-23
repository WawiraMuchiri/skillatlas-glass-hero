import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, BookOpen, Briefcase } from "lucide-react";

const stats = [
  { icon: Users, value: 10000, display: "10,000+", label: "Program Participants", delay: 0 },
  { icon: BookOpen, value: 250, display: "250+", label: "Expert-Led Courses", delay: 0.15 },
  { icon: Briefcase, value: 5200, display: "5,200+", label: "Jobs Secured", delay: 0.3 },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

function formatNumber(n: number) {
  return n.toLocaleString();
}

function StatCard({ icon: Icon, value, display, label, delay }: typeof stats[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, 2000, hasAnimated);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center gap-3 px-6 py-8"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
        <Icon size={28} />
      </div>
      <p className="font-display text-4xl md:text-5xl font-bold text-primary">
        {hasAnimated ? `${formatNumber(count)}+` : "0"}
      </p>
      <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        {label}
      </p>
    </motion.div>
  );
}

const StatsSection = () => (
  <section className="relative z-10 bg-gradient-to-r from-primary/[0.03] via-muted/60 to-card border-y border-border">
    <div className="container mx-auto px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:divide-x md:divide-border">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
