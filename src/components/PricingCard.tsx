
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
}

export const PricingCard = ({ 
  title, 
  emoji, 
  price, 
  features, 
  highlight, 
  popular, 
  description,
  tag
}: PricingCardProps) => {
  return (
    <div 
      className={`glass-card rounded-3xl p-6 sm:p-8 hover-lift relative flex flex-col h-full ${
        highlight ? 'border-2 border-primary shadow-lg shadow-primary/20' : 'border border-gray-200'
      }`}
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
        <h3 className="text-xl sm:text-2xl font-bold mb-2">{title} {emoji}</h3>
        {price && (
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">₹{price}</span>
            <span className="text-text-muted text-sm ml-1">/mo</span>
          </div>
        )}
      </div>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 group">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
            <span className="text-text-muted text-sm text-left">{feature}</span>
          </li>
        ))}
      </ul>
      
      {description && (
        <p className="text-text-muted text-sm mb-6">{description}</p>
      )}
      
      <div className="mt-auto space-y-3">
        <Button 
          className="w-full" 
          variant={highlight ? "default" : "outline"}
        >
          Buy Now
        </Button>
        
        {!highlight && !popular && (
          <Button 
            className="w-full" 
            variant="outline"
          >
            Try Now
          </Button>
        )}
        
        <button className="w-full text-sm text-text-muted hover:underline">
          View All Features
        </button>
      </div>
    </div>
  );
};
