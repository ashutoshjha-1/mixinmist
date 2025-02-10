
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  features: string[];
  highlight?: boolean;
  popular?: boolean;
}

export const PricingCard = ({ title, features, highlight, popular }: PricingCardProps) => {
  return (
    <div className={`glass-card rounded-3xl p-8 hover-lift relative ${highlight ? 'border-2 border-primary' : ''}`}>
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-text-muted">Contact for pricing</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-text-muted">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
