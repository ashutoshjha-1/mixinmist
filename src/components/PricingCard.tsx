
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  features: string[];
  highlight?: boolean;
  popular?: boolean;
}

export const PricingCard = ({ title, features, highlight, popular }: PricingCardProps) => {
  return (
    <div 
      className={`glass-card rounded-3xl p-6 sm:p-8 hover-lift relative ${
        highlight ? 'border-2 border-primary shadow-lg shadow-primary/20' : ''
      }`}
    >
      {popular && (
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-1.5 rounded-full text-sm font-medium animate-pulse z-50 shadow-xl">
          Most Popular
        </span>
      )}
      <h3 className="text-xl sm:text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-text-muted text-sm sm:text-base">Contact for pricing</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start sm:items-center gap-2 group">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 sm:mt-0 transition-transform group-hover:scale-110" />
            <span className="text-text-muted text-sm sm:text-base text-left">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
