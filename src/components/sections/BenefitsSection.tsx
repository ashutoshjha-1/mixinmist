
import { Flower2, LeafyGreen, SprayCan } from "lucide-react";

export const BenefitsSection = () => {
  return (
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
  );
};
