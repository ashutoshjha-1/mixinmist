import { MoveRight, Check, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card } from "@/components/ui/card";

const plans = {
  monthly: [
    {
      title: "Starter",
      subtitle: "Perfect for beginners taking their first steps!",
      price: "₹899",
      buttonText: "Buy Now",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "outline" as const,
      highlighted: false,
      features: {
        pages: "10 Pages",
        products: "10 Products",
        blogPosts: "10 Blog Posts",
        storage: "1024 MB Storage",
        support: "Basic Support"
      },
      note: "Please Note: You will get a subdomain based Website like yourname.mymini.store"
    },
    {
      title: "Growth",
      subtitle: "For businesses expanding their digital footprint!",
      price: "₹999",
      buttonText: "Buy Now",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "default" as const,
      highlighted: true,
      features: {
        pages: "50 Pages",
        products: "50 Products",
        blogPosts: "50 Blog Posts",
        storage: "5120 MB Storage",
        support: "Priority Support"
      }
    },
    {
      title: "Business",
      subtitle: "Targeted for established businesses aiming for growth!",
      price: "₹1,999",
      buttonText: "Buy Now",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "outline" as const,
      highlighted: false,
      features: {
        pages: "Unlimited Pages",
        products: "Unlimited Products",
        blogPosts: "Unlimited Blog Posts",
        storage: "Unlimited Storage",
        support: "Advanced Support"
      }
    }
  ],
  yearly: [
    {
      title: "Starter",
      subtitle: "Perfect for beginners taking their first steps!",
      price: "₹8,999",
      buttonText: "Buy Now",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "outline" as const,
      highlighted: false,
      features: {
        pages: "10 Pages",
        products: "10 Products",
        blogPosts: "10 Blog Posts",
        storage: "1024 MB Storage",
        support: "Basic Support"
      },
      note: "Please Note: You will get a subdomain based Website like yourname.mymini.store"
    },
    {
      title: "Growth",
      subtitle: "For businesses expanding their digital footprint!",
      price: "₹9,999",
      buttonText: "Buy Now",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "default" as const,
      highlighted: true,
      features: {
        pages: "50 Pages",
        products: "50 Products",
        blogPosts: "50 Blog Posts",
        storage: "5120 MB Storage",
        support: "Priority Support"
      }
    },
    {
      title: "Business",
      subtitle: "Targeted for established businesses aiming for growth!",
      price: "₹19,999",
      buttonText: "Buy Now",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "outline" as const,
      highlighted: false,
      features: {
        pages: "Unlimited Pages",
        products: "Unlimited Products",
        blogPosts: "Unlimited Blog Posts",
        storage: "Unlimited Storage",
        support: "Advanced Support"
      }
    }
  ],
  enterprise: {
    title: "Enterprise Plan",
    subtitle: "With your custom Android and iOS App!",
    price: "₹39,999",
    buttonText: "Buy Now",
    buttonIcon: <MoveRight className="h-4 w-4" />,
    variant: "default" as const,
    highlighted: true,
    billingPeriod: "/year" as const
  }
};

const features = [
  {
    name: "Pages",
    starter: "10 Pages",
    growth: "50 Pages",
    business: "Unlimited Pages"
  },
  {
    name: "Products",
    starter: "10 Products",
    growth: "50 Products",
    business: "Unlimited Products"
  },
  {
    name: "Blog Posts",
    starter: "10 Blog Posts",
    growth: "50 Blog Posts",
    business: "Unlimited Blog Posts"
  },
  {
    name: "Storage",
    starter: "1024 MB Storage",
    growth: "5120 MB Storage",
    business: "Unlimited Storage"
  },
  {
    name: "Support",
    starter: "Basic Support",
    growth: "Priority Support",
    business: "Advanced Support"
  }
];

function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <>
      <div className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 to-white/80 opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <Badge className="bg-black text-white">Pricing</Badge>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold text-black">
                Simple, transparent pricing
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-gray-600 max-w-xl text-center">
                Choose the perfect plan for your business
              </p>
            </div>

            <div className="mt-8 mb-12">
              <ToggleGroup
                type="single"
                value={billingCycle}
                onValueChange={(value) => value && setBillingCycle(value as "monthly" | "yearly")}
                className="bg-black p-1 rounded-full"
              >
                <ToggleGroupItem value="monthly" className="rounded-full px-6 py-2 data-[state=on]:bg-gray-800 text-white">
                  Monthly
                </ToggleGroupItem>
                <ToggleGroupItem value="yearly" className="rounded-full px-6 py-2 data-[state=on]:bg-gray-800 text-white">
                  Yearly
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
              {plans[billingCycle].map((plan) => (
                <div 
                  key={plan.title}
                  className={`
                    rounded-2xl p-6 sm:p-8 relative flex flex-col 
                    bg-white border border-gray-100 shadow-lg
                    ${plan.highlighted 
                      ? 'border-black shadow-xl scale-105' 
                      : 'border-gray-200'}
                    transition-all duration-300 hover:shadow-xl
                  `}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-black">{plan.title}</h3>
                    {plan.highlighted && (
                      <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">{plan.subtitle}</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-black">{plan.price}</span>
                    <span className="text-gray-600 text-sm ml-1">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                  
                  <Button 
                    variant={plan.highlighted ? "default" : "outline"} 
                    className={`w-full mb-6 ${plan.highlighted 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'bg-white text-black border-2 border-black hover:bg-gray-50'}`}
                  >
                    {plan.buttonText} {plan.buttonIcon}
                  </Button>
                  
                  {plan.features && (
                    <div className="space-y-4">
                      {[
                        { label: "Pages", value: plan.features.pages },
                        { label: "Products", value: plan.features.products },
                        { label: "Blog Posts", value: plan.features.blogPosts },
                        { label: "Storage", value: plan.features.storage },
                        { label: "Support", value: plan.features.support }
                      ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between border-b border-gray-200 pb-2 last:border-b-0">
                          <span className="text-gray-600 font-medium">{label}</span>
                          <span className="text-black">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {plan.title === "Starter" && plan.note && (
                    <div className="mt-4 flex items-center bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                      <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                      {plan.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-purple-50/30 opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200">
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold text-black">Enterprise Plan</h3>
                    <span className="text-2xl">🔥</span>
                  </div>
                  <p className="text-gray-600 italic">
                    With your custom Android and iOS App!
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-black">₹39,999</span>
                    <span className="text-gray-600">/year</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full md:w-auto bg-black text-white hover:bg-gray-800"
                  >
                    Buy Now
                  </Button>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-semibold mb-4 text-black">Everything in Business, plus:</h4>
                  <ul className="space-y-3">
                    {["Custom Android App", "Custom iOS App", "Dedicated Account Manager", "Priority 24/7 Support", "Custom Integrations"].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export { Pricing };
