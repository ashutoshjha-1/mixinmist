
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  emoji?: string;
  price?: string;
  features: string[];
  highlight?: boolean;
  popular?: boolean;
  description?: string;
  tag?: string;
  buttonText?: string;
  billingPeriod?: "monthly" | "annual";
}

export const PricingCard = ({
  title,
  emoji,
  price,
  features,
  highlight,
  popular,
  description,
  tag,
  buttonText = "Buy Now",
  billingPeriod = "monthly"
}: PricingCardProps) => {
  return (
    <div 
      className={`glass-card rounded-xl p-6 sm:p-8 hover-lift relative flex flex-col h-full 
        ${highlight ? 'border-2 border-primary scale-105 shadow-lg shadow-primary/20' : 'border-2 border-gray-200'}
        transition-all duration-300
      `}
    >
      {tag && (
        <span className="absolute right-4 top-4 bg-gray-200 text-black px-4 py-1 rounded-full text-sm font-medium">
          {tag}
        </span>
      )}
      
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium animate-pulse">
          Most Popular
        </span>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">
          {title} {emoji}
        </h3>
        
        {description && (
          <p className="text-text-muted text-sm italic mb-4">"{description}"</p>
        )}
        
        {price && (
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">₹{price}</span>
            <span className="text-text-muted text-sm ml-1">
              {billingPeriod === "monthly" ? "/mo" : "/yr"}
            </span>
          </div>
        )}
      </div>
      
      <ul className="space-y-3 mb-6 flex-grow text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 group border-b border-gray-100 pb-2">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
            <span className="text-text-muted text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto space-y-3">
        <Button 
          variant={highlight ? "default" : "outline"} 
          className={`w-full font-bold text-center py-5 ${highlight ? 'bg-black hover:bg-gray-800' : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100'}`}
        >
          {buttonText}
        </Button>
        
        {!highlight && (
          <button className="w-full text-sm text-text-muted hover:underline">
            View All Features
          </button>
        )}
      </div>
    </div>
  );
};
