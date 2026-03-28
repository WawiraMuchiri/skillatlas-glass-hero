import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurTeamSection from "@/components/OurTeamSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import MeetUsSection from "@/components/MeetUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SignUpModal from "@/components/SignUpModal";

const Index = () => {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const openSignUp = () => setSignUpOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onGetStarted={openSignUp} />
      <HeroSection onGetStarted={openSignUp} />
      <StatsSection />
      <OurTeamSection />
      <FeaturesSection />
      <HowItWorksSection />
      <div id="success-stories">
        <TestimonialsSection />
      </div>
      <PricingSection onGetStarted={openSignUp} />
      <MeetUsSection />
      <CTASection onGetStarted={openSignUp} />
      <Footer />
      <SignUpModal open={signUpOpen} onOpenChange={setSignUpOpen} />
    </div>
  );
};

export default Index;

