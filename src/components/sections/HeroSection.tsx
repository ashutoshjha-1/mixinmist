
import { WaitlistForm } from "@/components/WaitlistForm";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sparkle, Flower2 } from "lucide-react";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="container relative mx-auto flex min-h-[100svh] flex-col items-center justify-center px-4 text-center py-[2px] overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/80 via-white/50 to-purple-50/80 animate-gradient" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-purple-200/30 blur-3xl animate-float opacity-70" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-300/20 blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-40 right-40 w-48 h-48 rounded-full bg-pink-200/20 blur-3xl animate-float" style={{ animationDelay: "-4s" }} />
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-transparent opacity-80" />
      
      {/* Content */}
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
    </section>
  );
};
