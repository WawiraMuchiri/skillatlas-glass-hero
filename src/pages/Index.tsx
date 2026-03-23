import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
      <TestimonialsSection />
      <CTASection onGetStarted={openSignUp} />
      <Footer />
      <SignUpModal open={signUpOpen} onOpenChange={setSignUpOpen} />
    </div>
  );
};

export default Index;
