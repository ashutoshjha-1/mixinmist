
import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const plans = {
  monthly: [
    {
      title: "Startup",
      price: "$40",
      description: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
      buttonText: "Try it",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "outline"
    },
    {
      title: "Growth",
      price: "$40",
      description: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
      buttonText: "Try it",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "default",
      highlighted: true
    },
    {
      title: "Enterprise",
      price: "$40",
      description: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
      buttonText: "Contact us",
      buttonIcon: <PhoneCall className="w-4 h-4" />,
      variant: "outline"
    }
  ],
  yearly: [
    {
      title: "Startup",
      price: "$400",
      description: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
      buttonText: "Try it",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "outline"
    },
    {
      title: "Growth",
      price: "$400",
      description: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
      buttonText: "Try it",
      buttonIcon: <MoveRight className="w-4 h-4" />,
      variant: "default",
      highlighted: true
    },
    {
      title: "Enterprise",
      price: "$400",
      description: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
      buttonText: "Contact us",
      buttonIcon: <PhoneCall className="w-4 h-4" />,
      variant: "outline"
    }
  ]
};

const features = [
  {
    name: "SSO",
    startup: true,
    growth: true,
    enterprise: true
  },
  {
    name: "AI Assistant",
    startup: false,
    growth: true,
    enterprise: true
  },
  {
    name: "Version Control",
    startup: false,
    growth: true,
    enterprise: true
  },
  {
    name: "Members",
    startup: "5 members",
    growth: "25 members",
    enterprise: "100+ members"
  },
  {
    name: "Multiplayer Mode",
    startup: false,
    growth: true,
    enterprise: true
  },
  {
    name: "Orchestration",
    startup: false,
    growth: true,
    enterprise: true
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

            {plans[billingCycle].map((plan, index) => (
              <div
                key={plan.title}
                className={`rounded-xl p-6 flex flex-col ${
                  plan.highlighted ? "bg-black text-white" : "bg-white"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                <p className="text-sm text-muted-foreground mb-8">{plan.description}</p>
                
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
