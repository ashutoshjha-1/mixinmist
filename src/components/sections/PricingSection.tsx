
import { PricingCard } from "@/components/PricingCard";

export const PricingSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="mb-4 text-center text-4xl font-bold text-text">Choose Your Plan</h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
        Select the perfect plan for your beauty brand journey
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        <PricingCard
          title="Starter Plan"
          features={[
            "Basic brand customization",
            "Essential dashboard features",
            "Standard shipping options",
            "Basic analytics",
            "Email support"
          ]}
        />
        <PricingCard
          title="Pro Package"
          features={[
            "Advanced brand customization",
            "Full dashboard access",
            "Priority shipping",
            "Detailed analytics",
            "Priority support",
            "Marketing tools"
          ]}
          highlight={true}
          popular={true}
        />
        <PricingCard
          title="Premium Package"
          features={[
            "Complete brand control",
            "Advanced dashboard features",
            "Express shipping",
            "Advanced analytics & reporting",
            "24/7 dedicated support",
            "Marketing suite",
            "Custom integrations"
          ]}
        />
      </div>
    </section>
  );
};
