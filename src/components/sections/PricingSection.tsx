
import { useState } from "react";
import { PricingCard } from "@/components/PricingCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const pricingData = {
    monthly: [
      {
        title: "Starter Plan",
        emoji: "💡",
        price: "6XX",
        tag: "Starter",
        features: [
          "10 Pages",
          "10 Products",
          "10 Blog Posts",
          "1024 MB Storage",
          "Basic Support"
        ],
        description: "Perfect for beginners taking their first steps!",
        buttonText: "Get Started"
      },
      {
        title: "Growth Plan",
        emoji: "🚀",
        price: "9XX",
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
        description: "Scale up your business with powerful features!",
        buttonText: "Upgrade Now"
      },
      {
        title: "Business Plan",
        emoji: "🏆",
        price: "1XXX",
        tag: "Business",
        features: [
          "Unlimited Pages",
          "Unlimited Products",
          "Unlimited Blog Posts",
          "Unlimited Storage",
          "Advanced Support"
        ],
        description: "For established businesses ready to dominate!",
        buttonText: "Get Business Plan"
      },
      {
        title: "Enterprise Plan",
        emoji: "🔥",
        price: "3XXX",
        tag: "Enterprise",
        features: [
          "Unlimited Pages",
          "Unlimited Products",
          "Unlimited Blog Posts",
          "Unlimited Storage",
          "Dedicated Account Manager"
        ],
        description: "The ultimate solution for large-scale enterprises!",
        buttonText: "Start Enterprise"
      }
    ],
    annual: [
      {
        title: "Starter Plan",
        emoji: "💡",
        price: "XXXX",
        tag: "Starter",
        features: [
          "20 Pages",
          "20 Products",
          "20 Blog Posts",
          "1024 MB Storage",
          "Basic Support"
        ],
        description: "Save more with a full year of benefits!",
        buttonText: "Get Annual Plan"
      },
      {
        title: "Growth Plan",
        emoji: "🚀",
        price: "XXXX",
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
        description: "Best value for growing businesses!",
        buttonText: "Get Annual Growth"
      },
      {
        title: "Business Plan",
        emoji: "🏆",
        price: "XXXX",
        tag: "Business",
        features: [
          "Unlimited Pages",
          "Unlimited Products",
          "Unlimited Blog Posts",
          "Unlimited Storage",
          "Advanced Support"
        ],
        description: "Unlock exclusive features with yearly savings!",
        buttonText: "Get Annual Business"
      },
      {
        title: "Enterprise Plan",
        emoji: "🔥",
        price: "XXXX",
        tag: "Enterprise",
        features: [
          "Unlimited Pages",
          "Unlimited Products",
          "Unlimited Blog Posts",
          "Unlimited Storage",
          "Dedicated Account Manager"
        ],
        description: "Ultimate enterprise solution with maximum savings!",
        buttonText: "Start Enterprise"
      }
    ]
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="mb-4 text-center text-4xl font-bold text-text">Choose Your Plan</h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-text-muted">
        Select the perfect plan for your beauty brand journey
      </p>
      
      {/* Billing period toggle */}
      <div className="flex justify-center mb-12">
        <Tabs 
          defaultValue="monthly"
          value={billingPeriod}
          onValueChange={(value) => setBillingPeriod(value as "monthly" | "annual")}
          className="w-auto"
        >
          <TabsList className="grid w-72 grid-cols-2 p-1 bg-gray-100 border-2 border-gray-200">
            <TabsTrigger 
              value="monthly" 
              className="data-[state=active]:bg-black data-[state=active]:text-white font-bold py-3 px-6"
            >
              Monthly Plans
            </TabsTrigger>
            <TabsTrigger 
              value="annual" 
              className="data-[state=active]:bg-black data-[state=active]:text-white font-bold py-3 px-6"
            >
              Annual Plans
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {pricingData[billingPeriod].map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            emoji={plan.emoji}
            price={plan.price}
            tag={plan.tag}
            features={plan.features}
            highlight={plan.highlight}
            popular={plan.popular}
            description={plan.description}
            buttonText={plan.buttonText}
            billingPeriod={billingPeriod}
          />
        ))}
      </div>
    </section>
  );
};
