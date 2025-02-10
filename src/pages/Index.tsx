
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero section with subtle gradient background */}
      <div className="relative">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff8f6] to-white" />
        
        {/* Content */}
        <div className="relative">
          <HeroSection />
          <FeaturesSection />
          <PlatformSection />
          <BenefitsSection />
          <PricingSection />
          <StepsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
