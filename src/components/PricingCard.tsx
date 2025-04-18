
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
      className={`rounded-xl p-6 sm:p-8 relative flex flex-col h-full border-2 
        ${highlight ? 'border-primary shadow-lg' : 'border-gray-200'}
        ${highlight ? 'bg-white z-10' : 'bg-white'} 
        transition-all duration-300 hover:border-primary/70 hover:shadow-md
      `}
      style={highlight ? { transform: 'scale(1.05)' } : {}}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center space-x-2">
          <h3 className="text-xl sm:text-2xl font-bold">
            {title}
          </h3>
          {emoji && <span className="text-2xl">{emoji}</span>}
        </div>
        
        {tag && (
          <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-medium">
            {tag}
          </span>
        )}
      </div>
      
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      
      {description && (
        <p className="text-text-muted text-sm italic mb-4">"{description}"</p>
      )}
      
      {price && (
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-bold">₹{price}</span>
          <span className="text-text-muted text-sm ml-1">
            {billingPeriod === "monthly" ? "/mo" : "/yr"}
          </span>
        </div>
      )}
      
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
          className={`w-full font-bold text-center py-5 ${highlight ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100'}`}
        >
          {buttonText}
        </Button>
        
        <button className="w-full text-sm text-text-muted hover:underline">
          View All Features
        </button>
      </div>
    </div>
  );
};
