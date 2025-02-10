
import { WaitlistForm } from "@/components/WaitlistForm";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="container relative mx-auto flex min-h-[90vh] flex-col items-start justify-center px-4 py-20">
      {/* Decorative gradient orb */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#fec6a1]/20 via-[#d3e4fd]/20 to-[#9b87f5]/20 blur-[120px] -z-10" />
      
      <div className="max-w-2xl">
        <h1 className="animate-fade-in text-5xl font-black text-gray-900 sm:text-6xl md:text-7xl">
          Build & scale your beauty brand
        </h1>
        <p className="animate-fade-in mt-6 max-w-xl text-lg text-gray-600">
          Just add your logo. We handle the rest. Launch your beauty brand effortlessly with our complete solution.
        </p>
        <div className="mt-8 flex gap-4">
          <Button 
            className="bg-[#e88d72] hover:bg-[#e27b5c] text-white px-8 py-6 text-lg rounded-full"
          >
            Start Free
          </Button>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <span className="text-2xl">✨</span>
          </div>
          <h3 className="mb-2 text-lg font-semibold">Personalized Products</h3>
          <p className="text-sm text-gray-600">Choose from our extensive catalog</p>
        </div>
        <div className="text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="mb-2 text-lg font-semibold">Fast Setup</h3>
          <p className="text-sm text-gray-600">Launch your brand in days</p>
        </div>
        <div className="text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <span className="text-2xl">📦</span>
          </div>
          <h3 className="mb-2 text-lg font-semibold">Full Support</h3>
          <p className="text-sm text-gray-600">End-to-end business solution</p>
        </div>
      </div>

      <div className="mt-20 w-full">
        <h4 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
          Trusted by leading brands
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
          <span className="text-xl font-bold">Forbes</span>
          <span className="text-xl font-bold">AXIOS</span>
          <span className="text-xl font-bold">BOF</span>
          <span className="text-xl font-bold">BeautyMatter</span>
        </div>
      </div>
    </section>
  );
};
