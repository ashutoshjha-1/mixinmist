import { WaitlistForm } from "@/components/WaitlistForm";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sparkle, Flower2 } from "lucide-react";
export const HeroSection = () => {
  const isMobile = useIsMobile();
  return <section className="container relative mx-auto flex min-h-[100svh] flex-col items-center justify-center px-4 text-center py-[2px]">
      {/* Striped background */}
      <div className="absolute inset-0 -z-10" style={{
      backgroundColor: "#ffffff",
      opacity: 0.8,
      background: "repeating-linear-gradient(-45deg, #000000, #000000 19.5px, #ffffff 19.5px, #ffffff 97.5px)"
    }} />
      
      {/* Hero content */}
      <div className="relative flex flex-col items-center">
        <span className="animate-fade-in flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9b87f5]/20 via-[#D6BCFA]/20 to-[#E5DEFF]/20 px-8 py-2 text-sm font-extrabold text-[#1A1F2C] backdrop-blur-sm shadow-[0_4px_20px_rgba(155,135,245,0.15)] hover:shadow-[0_4px_25px_rgba(155,135,245,0.25)] transition-all duration-300 border border-[#9b87f5]/10">
          <Sparkle className="h-4 w-4 text-[#8B5CF6]" />
          Create Your Dream Beauty Brand
          <Flower2 className="h-4 w-4 text-[#8B5CF6]" />
        </span>
        
        <h1 className="animate-fade-in mt-3 max-w-4xl text-4xl font-black text-black sm:text-5xl md:text-6xl lg:text-7xl">
          Where Beauty Meets Innovation
        </h1>
        
        <p className="animate-fade-in mt-2 max-w-2xl text-base sm:text-lg font-bold text-text-muted">
          Launch your beauty brand in minutes, not months.
        </p>
        
        <div className={`animate-fade-in-up w-full max-w-md ${isMobile ? 'mt-4 mb-12' : 'mt-8'}`}>
          <WaitlistForm />
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-12 right-12 w-6 h-6 rounded-full bg-black/10 animate-float" />
    </section>;
};