import { MoveRight, Check } from "lucide-react";
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
      highlighted: false
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
      highlighted: false
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
      highlighted: false
    },
    {
      title: "Growth",
      subtitle: "For businesses expanding their digital footprint!",
      price: "₹9,999",
      buttonText: "Buy Now",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "default" as const,
      highlighted: true
    },
    {
      title: "Business",
      subtitle: "Targeted for established businesses aiming for growth!",
      price: "₹19,999",
      buttonText: "Buy Now",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "outline" as const,
      highlighted: false
    }
  ],
  enterprise: {
    title: "Enterprise Plan",
    subtitle: "With your custom Android and iOS App!",
    price: "₹3,499",
    buttonText: "Buy Now",
    buttonIcon: <MoveRight className="w-4 h-4" />,
    variant: "default" as const,
    highlighted: true
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
      <div className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <Badge className="bg-black text-white">Pricing</Badge>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold text-black">
                Simple, transparent pricing
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                Choose the perfect plan for your business
              </p>
            </div>

            <div className="mt-8 mb-12">
              <ToggleGroup
                type="single"
                value={billingCycle}
                onValueChange={(value) => value && setBillingCycle(value as "monthly" | "yearly")}
                className="bg-accent p-1 rounded-full"
              >
                <ToggleGroupItem value="monthly" className="rounded-full px-6 py-2 data-[state=on]:bg-white">
                  Monthly
                </ToggleGroupItem>
                <ToggleGroupItem value="yearly" className="rounded-full px-6 py-2 data-[state=on]:bg-white">
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
                    ${plan.highlighted ? 'bg-[#F1F0FB] border-2 border-[#9b87f5] shadow-xl scale-105' : 'bg-white border border-gray-200'}
                    transition-all duration-300 hover:shadow-lg
                  `}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-[#8E9196]">{plan.title}</h3>
                    {plan.highlighted && (
                      <span className="bg-[#9b87f5]/10 text-[#9b87f5] px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-[#8E9196] mb-6 italic">{plan.subtitle}</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-[#8E9196]">{plan.price}</span>
                    <span className="text-[#8E9196] text-sm ml-1">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                  
                  <Button 
                    variant={plan.highlighted ? "default" : "outline"} 
                    className="w-full mb-6"
                  >
                    {plan.buttonText} {plan.buttonIcon}
                  </Button>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Pages", value: plan.features.pages },
                      { label: "Products", value: plan.features.products },
                      { label: "Blog Posts", value: plan.features.blogPosts },
                      { label: "Storage", value: plan.features.storage },
                      { label: "Support", value: plan.features.support }
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between border-b pb-2 last:border-b-0">
                        <span className="text-[#8E9196] font-medium">{label}</span>
                        <span className="text-[#8E9196]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 relative overflow-hidden rounded-2xl shadow-lg">
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-100/30 to-transparent rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-tr-3xl" />
              
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold text-gray-800">Enterprise Plan</h3>
                    <span className="text-2xl">🔥</span>
                  </div>
                  <p className="text-gray-600 italic">
                    "With your custom Android and iOS App!"
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-800">₹3,499</span>
                    <span className="text-gray-500">/mo</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full md:w-auto border-gray-300 hover:bg-gray-50"
                  >
                    Buy Now
                  </Button>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-semibold mb-4 text-gray-800">Everything in Business, plus:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Custom Android App</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Custom iOS App</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Dedicated Account Manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Priority 24/7 Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Custom Integrations</span>
                    </li>
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
