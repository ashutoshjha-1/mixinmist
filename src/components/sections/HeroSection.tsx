
import { WaitlistForm } from "@/components/WaitlistForm";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sparkle, Flower2 } from "lucide-react";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="container relative mx-auto flex min-h-[100svh] flex-col items-center justify-center px-4 text-center py-[2px] overflow-hidden">
      {/* Enhanced animated background layers */}
      <div className="absolute inset-0 -z-20">
        {/* Main gradient background with stronger colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/90 via-white/70 to-purple-100/90 animate-gradient" />
        
        {/* Larger, more vibrant floating orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-purple-300/50 blur-3xl animate-float opacity-80" />
        <div className="absolute bottom-10 right-20 w-[30rem] h-[30rem] rounded-full bg-purple-400/40 blur-3xl animate-float-slow" />
        <div className="absolute top-60 right-20 w-64 h-64 rounded-full bg-pink-300/40 blur-3xl animate-float-medium" />
        
        {/* Additional orbs for more visual interest */}
        <div className="absolute bottom-40 left-40 w-72 h-72 rounded-full bg-indigo-200/50 blur-3xl animate-float-medium" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-pink-200/40 blur-3xl animate-pulse-slow" />
      </div>

      {/* Enhanced mesh gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-300/30 via-transparent to-transparent opacity-90" />
      
      {/* Subtle grid pattern for texture */}
      <div className="absolute inset-0 opacity-5 -z-10 bg-grid-pattern" />
      
      {/* Content */}
      <div className="relative flex flex-col items-center">
        <span className="animate-fade-in flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9b87f5]/30 via-[#D6BCFA]/30 to-[#E5DEFF]/30 px-8 py-2 text-sm font-extrabold text-[#1A1F2C] backdrop-blur-sm shadow-[0_4px_20px_rgba(155,135,245,0.25)] hover:shadow-[0_4px_25px_rgba(155,135,245,0.35)] transition-all duration-300 border border-[#9b87f5]/20">
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
