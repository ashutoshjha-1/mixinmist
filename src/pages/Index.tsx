
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-600/80 via-fuchsia-500/80 to-orange-400/80 -z-30" />
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-500/50 via-purple-500/50 to-pink-500/50 -z-20" />
      <div className="fixed inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl -z-10" />
      <div className="fixed inset-0 backdrop-blur-[100px] bg-white/30 -z-10" />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <PlatformSection />
        <BenefitsSection />
        <PricingSection />
        <StepsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
