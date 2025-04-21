import { Check, Minus, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
    },
    {
      title: "Enterprise",
      subtitle: "With your custom Android and iOS App!",
      price: "₹3,499",
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
    },
    {
      title: "Enterprise",
      subtitle: "With your custom Android and iOS App!",
      price: "₹38,499",
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
    business: "Unlimited Pages",
    enterprise: "Unlimited Pages"
  },
  {
    name: "Products",
    starter: "10 Products",
    growth: "50 Products",
    business: "Unlimited Products",
    enterprise: "Unlimited Products"
  },
  {
    name: "Blog Posts",
    starter: "10 Blog Posts",
    growth: "50 Blog Posts",
    business: "Unlimited Blog Posts",
    enterprise: "Unlimited Blog Posts"
  },
  {
    name: "Storage",
    starter: "1024 MB Storage",
    growth: "5120 MB Storage",
    business: "Unlimited Storage",
    enterprise: "Unlimited Storage"
  },
  {
    name: "Support",
    starter: "Basic Support",
    growth: "Priority Support",
    business: "Advanced Support",
    enterprise: "Dedicated Account Manager"
  }
];

function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="w-full py-20 lg:py-32">
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl">
            {/* Features Column */}
            <div className="hidden md:block">
              <div className="h-[300px]"></div>
              <div className="mt-8 space-y-6">
                <p className="font-semibold text-lg">Features</p>
                {features.map((feature) => (
                  <div key={feature.name} className="py-4">
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
                  plan.highlighted ? "bg-black text-white" : "bg-white"
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

                {/* Mobile Features */}
                <div className="md:hidden mt-8">
                  {features.map((feature) => (
                    <div key={feature.name} className="py-4 border-t">
                      <div className="font-medium mb-2">{feature.name}</div>
                      <div className="flex justify-center">
                        {typeof feature[plan.title.toLowerCase() as keyof typeof feature] === "string" ? (
                          <span className="text-sm text-muted-foreground">
                            {feature[plan.title.toLowerCase() as keyof typeof feature]}
                          </span>
                        ) : (
                          feature[plan.title.toLowerCase() as keyof typeof feature] ? (
                            <Check className="w-4 h-4 text-primary" />
                          ) : (
                            <Minus className="w-4 h-4 text-muted-foreground" />
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Features */}
                <div className="hidden md:block mt-[300px] space-y-6">
                  {features.map((feature) => (
                    <div key={feature.name} className="py-4 flex justify-center">
                      {typeof feature[plan.title.toLowerCase() as keyof typeof feature] === "string" ? (
                        <span className="text-sm text-muted-foreground">
                          {feature[plan.title.toLowerCase() as keyof typeof feature]}
                        </span>
                      ) : (
                        feature[plan.title.toLowerCase() as keyof typeof feature] ? (
                          <Check className="w-4 h-4 text-primary" />
                        ) : (
                          <Minus className="w-4 h-4 text-muted-foreground" />
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
