
import { LeafyGreen, ShieldCheck, Sparkle, Star, Bot, Timer, Settings, TestTube, Palette, Droplet } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";

export const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-16">
        <h2 className="mb-4 text-center text-4xl font-bold text-text">Our Premium Product Library</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
          Choose from our extensive collection of premium beauty products, ready for your brand
        </p>
      </div>

      {/* Product Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <div className="flex flex-col items-center">
          <div className="relative mb-8 transition-all duration-500 hover:scale-105">
            <img 
              src="/lovable-uploads/3688ad9c-9fdb-41f3-a6c2-d1bf0fb8a011.png" 
              alt="Premium serum bottle" 
              className="h-auto max-h-[300px] object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 -z-10 rounded-full bg-purple-100/40 blur-2xl"></div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Premium Serums</h3>
          <p className="text-center text-text-muted">Highly effective formulations with premium active ingredients</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-8 transition-all duration-500 hover:scale-105">
            <img 
              src="/lovable-uploads/fbf54c47-9f2d-4bc4-ab9b-c0fb0cdcd726.png" 
              alt="Skin cream tube" 
              className="h-auto max-h-[300px] object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 -z-10 rounded-full bg-purple-100/40 blur-2xl"></div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Luxurious Creams</h3>
          <p className="text-center text-text-muted">Hydrating and nourishing formulas for all skin types</p>
        </div>
      </div>

      {/* Product Categories Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={TestTube}
          title="Skincare Essentials"
          description="Serums, moisturizers, cleansers, and masks with premium active ingredients."
        />
        <FeatureCard
          icon={Palette}
          title="Color Cosmetics"
          description="Foundations, lipsticks, eye products, and full makeup collections."
        />
        <FeatureCard
          icon={Droplet}
          title="Hair Care"
          description="Shampoos, conditioners, treatments, and styling products."
        />
        <FeatureCard
          icon={LeafyGreen}
          title="Natural & Organic"
          description="Clean beauty products with natural and organic ingredients."
        />
        <FeatureCard
          icon={Star}
          title="Body Care"
          description="Body lotions, scrubs, oils, and spa-quality treatments."
        />
        <FeatureCard
          icon={Bot}
          title="No Minimum Orders"
          description="Start small and scale up - launch your brand with no minimum order requirements."
        />
      </div>

      {/* Product Benefits */}
      <div className="mt-20">
        <h3 className="mb-8 text-center text-3xl font-bold text-text">Why Choose Our Products?</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 glass-card rounded-2xl hover-lift">
            <Timer className="mb-4 h-12 w-12 text-primary" />
            <h4 className="mb-2 text-xl font-semibold">Quick Launch</h4>
            <p className="text-text-muted">Ready-to-sell products with your branding in days</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 glass-card rounded-2xl hover-lift">
            <ShieldCheck className="mb-4 h-12 w-12 text-primary" />
            <h4 className="mb-2 text-xl font-semibold">Quality Guaranteed</h4>
            <p className="text-text-muted">All products are FDA compliant and dermatologically tested</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 glass-card rounded-2xl hover-lift">
            <Settings className="mb-4 h-12 w-12 text-primary" />
            <h4 className="mb-2 text-xl font-semibold">Full Customization</h4>
            <p className="text-text-muted">Customize packaging, labels, and formulations</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 rounded-2xl bg-gradient-to-r from-secondary/20 to-accent/20 p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-primary/10 p-4">
            <Sparkle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-text">Ready to Start Your Beauty Brand?</h3>
          <p className="max-w-2xl text-text-muted">
            Browse our product library and create your unique beauty line today. 
            Zero minimum orders, full customization, and expert support at every step.
          </p>
        </div>
      </div>
    </section>
  );
};
