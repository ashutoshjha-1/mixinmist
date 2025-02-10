
import { Heart, Package, Star, Crown } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FeatureCard } from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10">
      {/* Hero Section */}
      <section className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        <span className="animate-fade-in rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          Coming Soon
        </span>
        <h1 className="animate-fade-in mt-6 max-w-4xl bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl">
          Build & Scale Your Beauty Brand
        </h1>
        <p className="animate-fade-in mt-6 max-w-2xl text-lg text-text-muted">
          Just add your logo. Mixinmist handles the rest. Create your own beauty brand with zero minimums, zero commitment, and zero risk.
        </p>
        <div className="animate-fade-in-up mt-8">
          <WaitlistForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-text">Why Choose Mixinmist</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Heart}
            title="Personalized Products"
            description="Customize and brand your product line exactly how you want it"
          />
          <FeatureCard
            icon={Package}
            title="Zero Minimums"
            description="Start small and scale at your own pace with no minimum orders"
          />
          <FeatureCard
            icon={Star}
            title="Premium Quality"
            description="Vegan & cruelty-free products made in North America"
          />
          <FeatureCard
            icon={Crown}
            title="Launch Faster"
            description="Get your brand to market in days, not months"
          />
        </div>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-text">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Curate Products",
              description: "Choose from hundreds of premium beauty & wellness products",
            },
            {
              number: "02",
              title: "Brand It",
              description: "Add your unique branding and customization",
            },
            {
              number: "03",
              title: "Launch & Sell",
              description: "Integrate with your store and start selling immediately",
            },
          ].map((step) => (
            <div key={step.number} className="relative p-6 text-center">
              <span className="mb-4 block text-4xl font-bold text-primary/20">{step.number}</span>
              <h3 className="mb-2 text-xl font-semibold text-text">{step.title}</h3>
              <p className="text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-text-muted">
              © 2024 Mixinmist. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-text-muted hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-text-muted hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-text-muted hover:text-primary">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
