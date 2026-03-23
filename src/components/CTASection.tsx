import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-20 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent" />
        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10 text-lg">
            Join a thriving community of learners and unlock courses, mentorship, and career opportunities—completely free to start.
          </p>
          <Button variant="cta" size="lg" className="text-lg px-10 py-6 gap-2">
            Get Started for Free
            <ArrowRight size={20} />
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
