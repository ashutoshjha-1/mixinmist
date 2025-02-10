
import { WaitlistForm } from "@/components/WaitlistForm";

export const HeroSection = () => {
  return (
    <section className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
      <div className="absolute left-1/2 top-1/2 aspect-square w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] -z-10" />
      <span className="animate-fade-in rounded-full bg-primary/10 px-4 py-2 text-sm font-extrabold text-primary backdrop-blur-sm">
        Join the Beauty Revolution
      </span>
      <h1 className="animate-fade-in mt-6 max-w-4xl bg-gradient-to-r from-primary via-primary/80 to-primary-hover bg-clip-text text-5xl font-black text-transparent sm:text-6xl md:text-7xl">
        Build & Scale Your Beauty Brand
      </h1>
      <p className="animate-fade-in mt-6 max-w-2xl text-lg font-bold text-text-muted">
        Transform your vision into reality with Mixinmist. We handle all costs and shipping while you focus on growing your brand. 
        Get a custom domain website and fully equipped dashboard to manage everything with zero upfront investment.
      </p>
      <div className="animate-fade-in-up mt-8">
        <WaitlistForm />
      </div>
    </section>
  );
};
