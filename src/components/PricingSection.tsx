import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

type BillingPeriod = "monthly" | "quarterly" | "biannual" | "annual";

const billingOptions: { key: BillingPeriod; label: string }[] = [
  { key: "monthly", label: "Monthly" },
  { key: "quarterly", label: "Quarterly" },
  { key: "biannual", label: "6 Months" },
  { key: "annual", label: "Annual" },
];

const proPrice: Record<BillingPeriod, { price: string; note?: string }> = {
  monthly: { price: "$4", note: "/month" },
  quarterly: { price: "$10", note: " — Save 17%" },
  biannual: { price: "$18", note: " — Save 25%" },
  annual: { price: "$40", note: " — Save 44%" },
};

interface PricingSectionProps {
  onGetStarted: () => void;
}

const PricingSection = ({ onGetStarted }: PricingSectionProps) => {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <section id="pricing" className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Pick a plan that fits your journey. Upgrade or cancel anytime.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card rounded-full p-1 shadow-sm border border-border">
            {billingOptions.map((o) => (
              <button
                key={o.key}
                onClick={() => setBilling(o.key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  billing === o.key
                    ? "bg-[#2dd4bf] text-[#0f2027]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="rounded-2xl border border-border bg-card p-8 flex flex-col"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-1">The Starter</h3>
            <p className="text-muted-foreground text-sm mb-6">30-Day Free Trial</p>
            <div className="mb-8">
              <span className="font-display text-4xl font-bold text-foreground">$0</span>
              <span className="text-muted-foreground ml-1">/ 30 days</span>
            </div>
            <ul className="space-y-3 mb-10 flex-1">
              {["3 CV Optimizations/mo", "Basic Skill Mapping", "5 Job Matches/mo", "Weekly Market Trend Insights"].map(
                (f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check size={16} className="text-[#2dd4bf] mt-0.5 shrink-0" />
                    {f}
                  </li>
                )
              )}
            </ul>
            <Button variant="outline" className="w-full border-[#2dd4bf] text-[#0f6e56] hover:bg-[#f0fdfb]" onClick={onGetStarted}>
              Start Free
            </Button>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-2xl border-2 border-[#2dd4bf] bg-[#f0fdfb] p-8 flex flex-col shadow-lg"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2dd4bf] text-[#0f2027] text-xs font-bold px-4 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">The Pro</h3>
            <p className="text-muted-foreground text-sm mb-6">For serious job seekers</p>
            <div className="mb-2">
              <span className="font-display text-4xl font-bold text-foreground">{proPrice[billing].price}</span>
              {billing === "monthly" && <span className="text-muted-foreground ml-1">/month</span>}
            </div>
            {billing !== "monthly" && (
              <p className="text-[#0f6e56] text-sm font-semibold mb-6">{proPrice[billing].note}</p>
            )}
            {billing === "monthly" && <div className="mb-6" />}
            <ul className="space-y-3 mb-10 flex-1">
              {[
                "Unlimited CV Analysis & Optimization",
                "Full Interactive Skill Roadmap",
                "Unlimited AI-Powered Job Matching",
                "Phased Career Roadmaps (Junior → Lead)",
                "Priority Email Support",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check size={16} className="text-[#2dd4bf] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-[#2dd4bf] text-[#0f2027] hover:bg-[#2dd4bf]/90" onClick={onGetStarted}>
              Go Pro
            </Button>
          </motion.div>

          {/* Campus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border bg-card p-8 flex flex-col"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-1">The Campus</h3>
            <p className="text-muted-foreground text-sm mb-6">Institutional</p>
            <div className="mb-8">
              <span className="font-display text-4xl font-bold text-foreground">Custom</span>
            </div>
            <ul className="space-y-3 mb-10 flex-1">
              {["Bulk Student Onboarding", "Admin Analytics Dashboard", "Custom Branding", "API Access"].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check size={16} className="text-[#2dd4bf] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full border-[#2dd4bf] text-[#0f6e56] hover:bg-[#f0fdfb]">
              Contact Sales
            </Button>
          </motion.div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-muted-foreground text-sm">
          <span className="flex items-center gap-1.5">
            <Shield size={16} /> Secure Payment
          </span>
          <span className="flex items-center gap-1.5">
            <CreditCard size={16} /> Cancel Anytime
          </span>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
