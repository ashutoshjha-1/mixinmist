
import { WaitlistForm } from "@/components/WaitlistForm";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
      {/* Decorative gradient orb */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-[120px] -z-10" />
      
      <span className="animate-fade-in rounded-full bg-white/80 px-6 py-2 text-sm font-extrabold text-primary backdrop-blur-sm shadow-lg">
        Flexibility Meets Functionality
      </span>
      <h1 className="animate-fade-in mt-6 max-w-4xl bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-5xl font-black text-transparent sm:text-6xl md:text-7xl">
        Designed by You.<br />Made by Us.
      </h1>
      <p className="animate-fade-in mt-6 max-w-2xl text-lg font-bold text-black">
        Whether you're starting fresh or scaling an existing brand, Mixinmist is built to fit your needs. 
        Our platform gives you everything you need to succeed in the beauty industry.
      </p>
      <div className={`animate-fade-in-up ${isMobile ? 'mt-8 mb-32' : 'mt-8'}`}>
        <WaitlistForm />
      </div>
    </section>
  );
};
