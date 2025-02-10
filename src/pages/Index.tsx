
import { Heart, Package, Star, Crown, Flower2, LeafyGreen, SprayCan, Globe, Gauge, Palette, Layers, Layout, Settings } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FeatureCard } from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
      {/* Hero Section */}
      <section className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        <span className="animate-fade-in rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          Join the Beauty Revolution
        </span>
        <h1 className="animate-fade-in mt-6 max-w-4xl bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl">
          Build & Scale Your Beauty Brand
        </h1>
        <p className="animate-fade-in mt-6 max-w-2xl text-lg text-text-muted">
          Transform your vision into reality with Mixinmist. We handle all costs and shipping while you focus on growing your brand. 
          Get a custom domain website and fully equipped dashboard to manage everything with zero upfront investment.
        </p>
        <div className="animate-fade-in-up mt-8">
          <WaitlistForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-4 text-center text-4xl font-bold text-text">Why Choose Mixinmist</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
          We've revolutionized the beauty industry by making it easier than ever to launch your own brand. 
          No hidden costs - we handle everything from production to shipping.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Heart}
            title="Private Label Products"
            description="Create your own brand with our premium private label products - we handle manufacturing and logistics"
          />
          <FeatureCard
            icon={Package}
            title="Free Shipping"
            description="We cover all shipping costs for your orders, helping you maximize your profits"
          />
          <FeatureCard
            icon={Star}
            title="Zero Hidden Costs"
            description="No upfront fees or hidden charges - only pay for what you sell"
          />
          <FeatureCard
            icon={Crown}
            title="Launch Faster"
            description="Get your brand to market in days, not months, with our streamlined platform"
          />
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-4 text-center text-4xl font-bold text-text">Complete Digital Solution</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
          Everything you need to run your beauty brand online, from website to operations
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-card rounded-3xl p-8 hover-lift">
            <div className="mb-6 flex items-center justify-center">
              <Globe className="h-12 w-12 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-text">Custom Domain Website</h3>
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                <span>Professionally designed templates</span>
              </li>
              <li className="flex items-center gap-2">
                <Layout className="h-5 w-5 text-primary" />
                <span>Fully customizable layouts</span>
              </li>
              <li className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                <span>Mobile-responsive design</span>
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-3xl p-8 hover-lift">
            <div className="mb-6 flex items-center justify-center">
              <Gauge className="h-12 w-12 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-text">Complete Dashboard</h3>
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                <span>Order management system</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <span>Analytics and reporting</span>
              </li>
              <li className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                <span>Inventory tracking</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-text">The Mixinmist Advantage</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
          We handle the complex stuff so you can focus on growing your brand
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 glass-card rounded-2xl hover-lift">
            <Flower2 className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">All-Inclusive Service</h3>
            <p className="text-text-muted">We handle manufacturing, storage, shipping, and customer support - you focus on sales</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 glass-card rounded-2xl hover-lift">
            <LeafyGreen className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Risk-Free Model</h3>
            <p className="text-text-muted">No upfront investment needed - we handle all production and shipping costs</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 glass-card rounded-2xl hover-lift">
            <SprayCan className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Full Control</h3>
            <p className="text-text-muted">Your brand, your rules - complete customization with our support</p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-4 text-center text-4xl font-bold text-text">How It Works</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
          Launch your beauty brand in three simple steps
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Curate Products",
              description: "Browse our extensive catalog of premium beauty & wellness products and select your perfect line",
            },
            {
              number: "02",
              title: "Brand It",
              description: "Add your unique branding, customize packaging, and make it truly yours",
            },
            {
              number: "03",
              title: "Launch & Sell",
              description: "Connect with your preferred e-commerce platform and start selling immediately",
            },
          ].map((step) => (
            <div key={step.number} className="group relative p-6 text-center hover-lift glass-card rounded-2xl">
              <span className="mb-4 block text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                {step.number}
              </span>
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
              <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">
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
