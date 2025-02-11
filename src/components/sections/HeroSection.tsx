
import { WaitlistForm } from "@/components/WaitlistForm";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sparkle, Flower2 } from "lucide-react";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-purple-600/80 via-pink-500/70 to-blue-500/80" />
        <div className="absolute inset-0 animate-gradient-secondary bg-gradient-to-tr from-indigo-600/70 via-fuchsia-500/60 to-cyan-400/70" />
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/30 via-fuchsia-400/30 to-indigo-400/30 blur-[120px] -z-10" />
      <div className="absolute right-1/4 top-1/4 aspect-square w-1/3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-400/30 blur-[90px] -z-10 animate-float" />
      <div className="absolute left-1/4 bottom-1/4 aspect-square w-1/3 rounded-full bg-gradient-to-r from-indigo-500/30 to-cyan-400/30 blur-[90px] -z-10 animate-float" />
      
      {/* Hero content */}
      <div className="relative flex flex-col items-center">
        <span className="animate-fade-in flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9b87f5]/20 via-[#D6BCFA]/20 to-[#E5DEFF]/20 px-8 py-3 text-sm font-extrabold text-[#1A1F2C] backdrop-blur-sm shadow-[0_4px_20px_rgba(155,135,245,0.15)] hover:shadow-[0_4px_25px_rgba(155,135,245,0.25)] transition-all duration-300 border border-[#9b87f5]/10">
          <Sparkle className="h-4 w-4 text-[#8B5CF6]" />
          Mixinmist builds brands
          <Flower2 className="h-4 w-4 text-[#8B5CF6]" />
        </span>
        
        <h1 className="animate-fade-in mt-6 max-w-4xl text-5xl font-black text-black sm:text-6xl md:text-7xl">
          Launch Beauty and Self Care Lines.
        </h1>
        
        <p className="animate-fade-in mt-6 max-w-2xl text-lg font-bold text-text-muted">
          A digital solution to personalize, customize, and launch your branded product line.
        </p>
        
        <div className={`animate-fade-in-up w-full max-w-md ${isMobile ? 'mt-8 mb-32' : 'mt-8'}`}>
          <WaitlistForm />
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-12 right-12 w-6 h-6 rounded-full bg-black/10 animate-float" />
      <div className="absolute bottom-12 left-12 w-4 h-4 rounded-full bg-black/10 animate-float" />
      <div className="absolute top-1/3 left-12 w-3 h-3 rounded-full bg-black/10 animate-float" />
    </section>
  );
};
