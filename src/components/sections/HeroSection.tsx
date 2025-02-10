
import { WaitlistForm } from "@/components/WaitlistForm";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sparkle, Flower2 } from "lucide-react";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
      {/* Decorative gradient orbs */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-[120px] -z-10" />
      <div className="absolute right-1/4 top-1/4 aspect-square w-1/3 rounded-full bg-gradient-to-r from-secondary/30 to-accent/30 blur-[90px] -z-10 animate-float" />
      <div className="absolute left-1/4 bottom-1/4 aspect-square w-1/3 rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 blur-[90px] -z-10 animate-float" />
      
      {/* Hero content */}
      <div className="relative flex flex-col items-center">
        <span className="animate-fade-in flex items-center gap-2 rounded-full bg-white/80 px-6 py-2 text-sm font-extrabold text-primary backdrop-blur-sm shadow-lg">
          <Sparkle className="h-4 w-4" />
          Mixinmist builds brands
          <Flower2 className="h-4 w-4" />
        </span>
        
        <h1 className="animate-fade-in mt-6 max-w-4xl bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-5xl font-black text-transparent sm:text-6xl md:text-7xl">
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
      <div className="absolute top-12 right-12 w-6 h-6 rounded-full bg-secondary/30 animate-float" />
      <div className="absolute bottom-12 left-12 w-4 h-4 rounded-full bg-primary/30 animate-float" />
      <div className="absolute top-1/3 left-12 w-3 h-3 rounded-full bg-accent/30 animate-float" />
    </section>
  );
};

