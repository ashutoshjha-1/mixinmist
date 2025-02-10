
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-accent/20 to-primary/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6,#D6BCFA)] opacity-10 blur-3xl -z-10" />
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[100px] -z-10" />
      <HeroSection />
      <FeaturesSection />
      <PlatformSection />
      <BenefitsSection />
      <PricingSection />
      <StepsSection />
      <Footer />
    </div>
  );
};

export default Index;
