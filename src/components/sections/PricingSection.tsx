import { useState } from "react";
import { PricingCard } from "@/components/PricingCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  
  const pricingData = {
    monthly: [{
      title: "Starter Plan",
      emoji: "💡",
      price: "899",
      tag: "Starter",
      features: [
        "10 Pages",
        "10 Products",
        "10 Blog Posts",
        "1024 MB Storage",
        "Basic Support"
      ],
      description: "Perfect for beginners taking their first steps!",
      buttonText: "Buy Now"
    }, {
      title: "Growth Plan",
      emoji: "🚀",
      price: "999",
      tag: "Growth",
      features: [
        "50 Pages",
        "50 Products",
        "50 Blog Posts",
        "5120 MB Storage",
        "Priority Support"
      ],
      highlight: true,
      popular: true,
      description: "For businesses expanding their digital footprint!",
      buttonText: "Buy Now"
    }, {
      title: "Business Plan",
      emoji: "🏆",
      price: "1,999",
      tag: "Business",
      features: [
        "Unlimited Pages",
        "Unlimited Products",
        "Unlimited Blog Posts",
        "Unlimited Storage",
        "Advanced Support"
      ],
      description: "Targeted for established businesses aiming for growth!",
      buttonText: "Buy Now"
    }, {
      title: "Enterprise Plan",
      emoji: "🔥",
      price: "3,499",
      tag: "Enterprise",
      features: [
        "Unlimited Pages",
        "Unlimited Products",
        "Unlimited Blog Posts",
        "Unlimited Storage",
        "Dedicated Account Manager"
      ],
      description: "With your custom Android and iOS App!",
      buttonText: "Buy Now"
    }],
    annual: [{
      title: "Starter Plan",
      emoji: "💡",
      price: "8,999",
      tag: "Starter",
      features: [
        "Page 20",
        "Product 20", 
        "Blog 20",
        "Storage 1024 MB"
      ],
      description: "Ideal for small businesses beginning their online journey",
      buttonText: "Buy Now"
    }, {
      title: "Growth Plan",
      emoji: "🚀",
      price: "9,999",
      tag: "Growth",
      features: [
        "Page 50",
        "Product 50",
        "Blog 50",
        "Storage 5120 MB"
      ],
      highlight: true,
      popular: true,
      description: "For businesses expanding their digital footprint",
      buttonText: "Buy Now"
    }, {
      title: "Business Plan",
      emoji: "🏆",
      price: "16,999",
      tag: "Business",
      features: [
        "Page Unlimited",
        "Product Unlimited",
        "Blog Unlimited",
        "Storage Unlimited"
      ],
      description: "Tailored for established businesses aiming for growth",
      buttonText: "Buy Now"
    }]
  };

  return <section className="container mx-auto px-4 py-20">
      <h2 className="mb-4 text-center text-4xl font-bold text-text">Choose Your Plan</h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-text-muted">
        Select the perfect plan for your beauty brand journey
      </p>
      
      <div className="flex justify-center mb-12">
        <Tabs defaultValue="monthly" value={billingPeriod} onValueChange={value => setBillingPeriod(value as "monthly" | "annual")} className="w-auto">
          <TabsList className="grid w-80 grid-cols-2 p-1 bg-gray-100 border border-gray-200 rounded-md px-0 my-[9px] py-0">
            <TabsTrigger value="monthly" className="data-[state=active]:bg-black data-[state=active]:text-white font-bold px-6 rounded-md py-[10px]">
              Monthly Plans
            </TabsTrigger>
            <TabsTrigger value="annual" className="data-[state=active]:bg-black data-[state=active]:text-white font-bold py-3 px-6 rounded-md">
              Annual Plans
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {pricingData[billingPeriod].map((plan, index) => <PricingCard key={index} title={plan.title} emoji={plan.emoji} price={plan.price} tag={plan.tag} features={plan.features} highlight={plan.highlight} popular={plan.popular} description={plan.description} buttonText={plan.buttonText} billingPeriod={billingPeriod} />)}
      </div>
    </section>;
};
