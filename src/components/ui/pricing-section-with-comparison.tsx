
import { useState } from "react";
import { Check, Minus, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const plans = {
  monthly: [
    {
      title: "Starter Plan 💡",
      price: "₹899.00",
      period: "/mo",
      features: [
        "Page 10",
        "Product 10",
        "Blog 10",
        "Storage 1024 MB"
      ],
      description: "Please note you will get a subdomain based website like yourdomain.myprint.store",
      badge: "Starter"
    },
    {
      title: "Growth Plan 🚀",
      price: "₹999.00",
      period: "/mo",
      features: [
        "Page 50",
        "Product 50", 
        "Blog 50",
        "Storage 5120 MB"
      ],
      description: "For businesses expanding their digital footprint.",
      badge: "Growth",
      highlighted: true
    },
    {
      title: "Business Plan 🏆",
      price: "₹1,999.00", 
      period: "/mo",
      features: [
        "Page Unlimited",
        "Product Unlimited",
        "Blog Unlimited",
        "Storage Unlimited"
      ],
      description: "Tailored for established businesses aiming for growth",
      badge: "Business"
    }
  ],
  yearly: [
    {
      title: "Starter Plan 💡",
      price: "₹8,999.00",
      period: "/yr",
      features: [
        "Page 20",
        "Product 20",
        "Blog 20",
        "Storage 1024 MB"
      ],
      description: "Ideal for small businesses beginning their online journey.",
      badge: "Starter"
    },
    {
      title: "Growth Plan 🚀",
      price: "₹9,999.00",
      period: "/yr",
      features: [
        "Page 50",
        "Product 50",
        "Blog 50",
        "Storage 5120 MB"
      ],
      description: "For businesses expanding their digital footprint.",
      badge: "Growth",
      highlighted: true
    },
    {
      title: "Business Plan 🏆",
      price: "₹16,999.00",
      period: "/yr",
      features: [
        "Page Unlimited",
        "Product Unlimited",
        "Blog Unlimited",
        "Storage Unlimited"
      ],
      description: "Tailored for established businesses aiming for growth",
      badge: "Business"
    }
  ]
};

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

          {/* Billing Toggle */}
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

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
            {plans[billingCycle].map((plan, index) => (
              <div
                key={plan.title}
                className={`relative flex flex-col p-6 bg-white rounded-2xl border-2 transition-all ${
                  plan.highlighted
                    ? "border-primary shadow-lg scale-105 z-10"
                    : "border-border hover:border-primary/70 hover:shadow-md"
                }`}
              >
                {plan.badge && (
                  <Badge
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 ${
                      plan.highlighted ? "bg-black text-white" : "bg-accent"
                    }`}
                  >
                    {plan.badge}
                  </Badge>
                )}

                <h3 className="text-2xl font-semibold mt-4">{plan.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>

                <div className="flex items-baseline gap-1 mt-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="mt-8 space-y-4 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className={`mt-8 w-full ${
                    plan.highlighted ? "bg-black hover:bg-black/90" : ""
                  }`}
                >
                  Get Started
                  <MoveRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
