
import { Check, Minus, MoveRight } from "lucide-react";
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
      highlighted: true
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
      price: "₹9,999",
      buttonText: "Buy Now",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "outline" as const,
      highlighted: false
    },
    {
      title: "Growth",
      subtitle: "For businesses expanding their digital footprint!",
      price: "₹10,999",
      buttonText: "Buy Now",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "default" as const,
      highlighted: true
    },
    {
      title: "Business",
      subtitle: "Targeted for established businesses aiming for growth!",
      price: "₹21,999",
      buttonText: "Buy Now",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "outline" as const,
      highlighted: false
    }
  ]
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
            <Badge>Pricing</Badge>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
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

            {/* Main pricing grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
              {/* Features Column */}
              <div className="hidden md:block">
                <div className="h-[300px]"></div>
                <div className="mt-8 space-y-6">
                  <p className="font-semibold text-lg">Features</p>
                  {features.map((feature) => (
                    <div key={feature.name} className="py-4 text-left">
                      {feature.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Plan Columns */}
              {plans[billingCycle].map((plan) => (
                <div
                  key={plan.title}
                  className={`rounded-xl p-6 flex flex-col ${
                    plan.highlighted ? "bg-black text-white" : "bg-white border-2"
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground mb-8">{plan.subtitle}</p>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">/{billingCycle === "monthly" ? "month" : "year"}</span>
                  </div>

                  <Button
                    variant={plan.variant}
                    className={`w-full ${plan.highlighted ? "bg-white text-black hover:bg-gray-100" : ""}`}
                  >
                    {plan.buttonText} {plan.buttonIcon}
                  </Button>

                  {/* Features list */}
                  <div className="hidden md:block mt-[300px] space-y-6">
                    {features.map((feature) => (
                      <div key={feature.name} className="py-4 text-center">
                        <span className="text-sm">
                          {feature[plan.title.toLowerCase() as keyof typeof feature]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Features */}
                  <div className="md:hidden mt-8">
                    {features.map((feature) => (
                      <div key={feature.name} className="py-4 border-t">
                        <div className="font-medium mb-2">{feature.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {feature[plan.title.toLowerCase() as keyof typeof feature]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold">Enterprise Plan</h3>
                    <span className="text-2xl">🔥</span>
                  </div>
                  <p className="text-muted-foreground">
                    "With your custom Android and iOS App!"
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">₹3,499</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <Button className="w-full md:w-auto">Buy Now</Button>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-semibold mb-4">Everything in Business, plus:</h4>
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
