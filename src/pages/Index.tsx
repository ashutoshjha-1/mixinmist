import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sparkle } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* Hero section with gradient background */}
      <div className="relative">
        {/* Wave background */}
        <div className="absolute inset-0 wave-bg opacity-60" />
        
        {/* Gradient background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-purple-200/40 to-blue-200/40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/30 via-pink-200/30 to-blue-200/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 via-purple-100/20 to-blue-100/20 blur-3xl" />
        <div className="absolute inset-0 backdrop-blur-[50px] bg-white/10" />
        
        {/* Hero content */}
        <div className="relative">
          <HeroSection />
        </div>
      </div>

      {/* Rest of the content without gradient */}
      <div className="bg-white">
        <StepsSection />
        <FeaturesSection />
        <PlatformSection />
        <BenefitsSection />
        <PricingSection />
        
        {/* Call to Action */}
        <div className="container mx-auto px-4 mb-20">
          <div className="rounded-2xl bg-gradient-to-r from-secondary/20 to-accent/20 p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Sparkle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-text">Transform Your Beauty Brand Vision into Reality</h3>
              <p className="max-w-2xl text-text-muted">
                Join hundreds of successful beauty entrepreneurs who've launched their dream products with us. 
                Get access to premium formulations, sustainable packaging, and industry-leading support.
              </p>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
