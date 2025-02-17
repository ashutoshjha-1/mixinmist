
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
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white pointer-events-none" />
      
      {/* Content */}
      <div className="relative">
        <Header />
        
        {/* Hero section with enhanced background */}
        <div className="relative overflow-hidden">
          {/* Wave background */}
          <div className="absolute inset-0 wave-bg opacity-40" />
          
          {/* Gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-blue-200/30" />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/20 via-pink-200/20 to-blue-200/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100/10 via-purple-100/10 to-blue-100/10 blur-3xl" />
          <div className="absolute inset-0 backdrop-blur-[100px] bg-white/5" />
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-200/20 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-pink-200/20 blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
          
          {/* Hero content */}
          <div className="relative">
            <HeroSection />
          </div>
        </div>

        {/* Content sections with enhanced styling */}
        <div className="relative">
          <StepsSection />
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 to-white/80" />
            <div className="relative">
              <FeaturesSection />
            </div>
          </div>
          <PlatformSection />
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-purple-50/30" />
            <div className="relative">
              <BenefitsSection />
            </div>
          </div>
          <PricingSection />
          
          {/* Enhanced Call to Action */}
          <div className="container mx-auto px-4 mb-20">
            <div className="rounded-3xl p-12 glass-effect">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-full bg-primary/10 p-5 backdrop-blur-sm animate-soft-pulse">
                  <Sparkle className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-6 text-3xl font-bold text-text">
                  Transform Your Beauty Brand Vision into Reality
                </h3>
                <p className="max-w-2xl text-lg text-text-muted">
                  Join hundreds of successful beauty entrepreneurs who've launched their dream products with us. 
                  Get access to premium formulations, sustainable packaging, and industry-leading support.
                </p>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
