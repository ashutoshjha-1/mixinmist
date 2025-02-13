
import { LeafyGreen, ShieldCheck, Sparkle, Star, Bot, Timer, Settings, Package } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";

export const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-16">
        <h2 className="mb-4 text-center text-4xl font-bold text-text">The Beauty Industry is Broken</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
          Starting a beauty brand traditionally means dealing with bulk manufacturing, complex supply chains, 
          and high minimum order quantities. We're changing that.
        </p>
      </div>

      {/* Main Features Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={Timer}
          title="No More Waiting"
          description="Launch your brand in days, not months. Skip the traditional manufacturing delays."
        />
        <FeatureCard
          icon={Settings}
          title="Full Customization"
          description="Personalize everything from formulations to packaging without bulk order commitments."
        />
        <FeatureCard
          icon={Package}
          title="Zero MOQ"
          description="Start small and scale up. No minimum order quantities required."
        />
        <FeatureCard
          icon={LeafyGreen}
          title="Sustainable Formulas"
          description="FDA compliant, vegan, cruelty-free products with eco-friendly packaging options."
        />
        <FeatureCard
          icon={ShieldCheck}
          title="Quality Assured"
          description="Every product meets the highest industry standards and regulations."
        />
        <FeatureCard
          icon={Bot}
          title="AI-Powered Growth"
          description="Get intelligent insights and recommendations to scale your beauty brand."
        />
      </div>

      {/* Solution Statement */}
      <div className="mt-20 rounded-2xl bg-gradient-to-r from-secondary/20 to-accent/20 p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-primary/10 p-4">
            <Sparkle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-text">Beauty Should Be Personal</h3>
          <p className="max-w-2xl text-text-muted">
            While big brands mass-produce generic products, MixinMist empowers you to create 
            unique beauty solutions tailored to your vision. Your brand, your rules.
          </p>
        </div>
      </div>
    </section>
  );
};
