
import { LeafyGreen, ShieldCheck, Sparkle, PhoneCall, Package, Star } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";

export const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="mb-4 text-center text-4xl font-bold text-text">Why Choose Mixinmist</h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
        Everything you need to launch and scale your beauty brand
      </p>

      {/* Main Features Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          icon={LeafyGreen}
          title="Sustainable Formulas"
          description="FDA compliant, vegan, cruelty-free, and paraben-free products with recyclable packaging"
        />
        <FeatureCard
          icon={ShieldCheck}
          title="Certified Quality"
          description="Indian manufactured products meeting the highest industry standards"
        />
        <FeatureCard
          icon={Star}
          title="400+ Products"
          description="Extensive selection of beauty and wellness products with monthly new launches"
        />
        <FeatureCard
          icon={PhoneCall}
          title="Expert Support"
          description="Dedicated team to guide you every step of the way"
        />
      </div>

      {/* Product Range Section */}
      <div className="mt-20 rounded-2xl bg-gradient-to-r from-secondary/20 to-accent/20 p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-primary/10 p-4">
            <Sparkle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-text">Ready for Your Brand</h3>
          <p className="max-w-2xl text-text-muted">
            Choose from our extensive catalog of beauty and wellness products waiting for your personalization. 
            We continuously expand our selection with new product launches every month.
          </p>
        </div>
      </div>

      {/* Delivery Promise Section */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-secondary/20 to-accent/20 p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-primary/10 p-4">
            <Package className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-text">Our Delivery Promise</h3>
          <p className="max-w-2xl text-text-muted">
            We'll store your inventory for you. Once you receive a customer order it will be processed, 
            packaged, and shipped directly to your customer by Mixinmist in as little as 5 days.
          </p>
        </div>
      </div>
    </section>
  );
};
