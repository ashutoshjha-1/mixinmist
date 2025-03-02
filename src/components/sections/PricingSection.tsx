
import { PricingCard } from "@/components/PricingCard";

export const PricingSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="mb-4 text-center text-4xl font-bold text-text">Choose Your Plan</h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
        Select the perfect plan for your beauty brand journey
      </p>
      <div className="grid gap-8 md:grid-cols-4">
        <PricingCard
          title="Starter Plan"
          emoji="💡"
          price="699"
          tag="Starter Plan"
          features={[
            "Page 10",
            "Product 10",
            "Blog 10",
            "Storage 1024 MB"
          ]}
          description="Ideal for small businesses beginning their online journey."
        />
        <PricingCard
          title="Growth Plan"
          emoji="🚀"
          price="999"
          tag="Growth"
          features={[
            "Page 50",
            "Product 50",
            "Blog 50",
            "Storage 5120 MB"
          ]}
          highlight={true}
          popular={true}
          description="For businesses expanding their digital footprint."
        />
        <PricingCard
          title="Business Plan"
          emoji="🏆"
          price="1,999"
          tag="Business"
          features={[
            "Page Unlimited",
            "Product Unlimited",
            "Blog Unlimited",
            "Storage Unlimited"
          ]}
          description="Tailored for established businesses aiming for growth."
        />
        <PricingCard
          title="Enterprise Plan"
          emoji="🔥"
          price="3,499"
          tag="Enterprise"
          features={[
            "Page Unlimited",
            "Product Unlimited",
            "Blog Unlimited",
            "Storage Unlimited"
          ]}
          description="For large-scale enterprises requiring comprehensive solutions."
        />
      </div>
    </section>
  );
};
