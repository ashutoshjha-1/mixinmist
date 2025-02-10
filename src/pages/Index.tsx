
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* Hero section with gradient background */}
      <div className="relative">
        {/* Gradient background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-yellow-500/30 to-blue-500/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-500/20 to-blue-400/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
        <div className="absolute inset-0 backdrop-blur-[100px] bg-white/50" />
        
        {/* Hero content */}
        <div className="relative">
          <HeroSection />
        </div>
      </div>

      {/* Rest of the content without gradient */}
      <div className="bg-white">
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
