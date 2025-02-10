
import { Heart, Package, Star, Crown } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";

export const FeaturesSection = () => {
  return (
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
  );
};
