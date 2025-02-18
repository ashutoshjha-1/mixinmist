
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sparkle } from "lucide-react";
import { useEffect, useRef } from "react";

const Index = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrolled = window.scrollY;
      const elements = parallaxRef.current.querySelectorAll('.parallax');
      
      elements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '5';
        const movement = scrolled * parseFloat(speed) / 100;
        const el = element as HTMLElement;
        el.style.transform = `translateY(${movement}px)`;
      });

      // Animate decorative elements
      const decoratives = document.querySelectorAll('.decorative');
      decoratives.forEach((el, i) => {
        const element = el as HTMLElement;
        element.style.transform = `translateY(${Math.sin(scrolled/1000 + i) * 20}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen" ref={parallaxRef}>
      {/* Complex background gradients */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,188,250,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(229,222,255,0.15),transparent_40%)] pointer-events-none" />
      
      {/* Decorative floating elements */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="decorative fixed w-64 h-64 rounded-full opacity-30 blur-3xl mix-blend-multiply transition-transform duration-1000"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle at center, ${['rgba(214,188,250,0.2)', 'rgba(229,222,255,0.2)', 'rgba(188,214,250,0.2)'][i % 3]}, transparent)`,
            transform: `scale(${0.5 + Math.random()})`,
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative">
        <Header />
        
        {/* Hero section with parallax effects */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 wave-bg opacity-40 parallax" data-speed="-2" />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-blue-200/30 parallax" data-speed="-1" />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/20 via-pink-200/20 to-blue-200/20 parallax" data-speed="-3" />
          
          {/* Floating shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full mix-blend-multiply animate-float"
                style={{
                  width: `${20 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 40}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle at center, ${['rgba(214,188,250,0.3)', 'rgba(229,222,255,0.3)', 'rgba(188,214,250,0.3)'][i % 3]}, transparent)`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          
          {/* Hero content */}
          <div className="relative parallax" data-speed="2">
            <HeroSection />
          </div>
        </div>

        {/* Content sections with parallax */}
        <div className="relative">
          <div className="parallax" data-speed="1">
            <StepsSection />
          </div>
          
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 to-white/80 parallax" data-speed="-1" />
            <div className="relative parallax" data-speed="2">
              <FeaturesSection />
            </div>
          </div>
          
          <div className="parallax" data-speed="1.5">
            <PlatformSection />
          </div>
          
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-purple-50/30 parallax" data-speed="-1" />
            <div className="relative parallax" data-speed="2">
              <BenefitsSection />
            </div>
          </div>
          
          <div className="parallax" data-speed="1">
            <PricingSection />
          </div>
          
          {/* Enhanced Call to Action with parallax */}
          <div className="container mx-auto px-4 mb-20 parallax" data-speed="1.5">
            <div className="rounded-3xl p-12 glass-effect relative overflow-hidden">
              {/* Animated background shapes */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full animate-float mix-blend-multiply"
                    style={{
                      width: `${100 + Math.random() * 200}px`,
                      height: `${100 + Math.random() * 200}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      background: `radial-gradient(circle at center, ${['rgba(214,188,250,0.1)', 'rgba(229,222,255,0.1)', 'rgba(188,214,250,0.1)'][i % 3]}, transparent)`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${5 + Math.random() * 5}s`,
                    }}
                  />
                ))}
              </div>
              
              <div className="relative flex flex-col items-center text-center">
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
