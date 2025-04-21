
import { HeroWithMockup } from "@/components/ui/hero-with-mockup";

export const HeroSection = () => {
  return (
    <HeroWithMockup
      title="Create Your Dream Beauty Brand"
      description="Launch your beauty brand in minutes, not months."
      primaryCta={{
        text: "Get Started",
        href: "#waitlist",
      }}
      secondaryCta={{
        text: "View on GitHub",
        href: "https://github.com/your-beauty-platform",
      }}
      mockupImage={{
        alt: "Beauty Platform Dashboard",
        width: 1248,
        height: 765,
        src: "/lovable-uploads/9ef6c83b-5828-4a70-8324-58153362da1f.png"
      }}
    />
  );
};
