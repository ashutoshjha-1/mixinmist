
import { HeroWithMockup } from "@/components/ui/hero-with-mockup";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { WaitlistForm } from "@/components/WaitlistForm";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const HeroSection = () => {
  return (
    <Dialog>
      <AuroraBackground>
        <HeroWithMockup
          title="Create Your Dream Beauty Brand"
          description="Launch your beauty brand in minutes, not months."
          primaryCta={{
            text: "Get Started",
            href: "#",
          }}
          mockupImage={{
            alt: "Beauty Platform Dashboard",
            width: 1248,
            height: 765,
            src: "/lovable-uploads/9ef6c83b-5828-4a70-8324-58153362da1f.png"
          }}
          renderPrimaryCta={(props) => (
            <DialogTrigger className="mx-auto">
              {props}
            </DialogTrigger>
          )}
        />
      </AuroraBackground>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Join Our Waitlist
          </DialogTitle>
        </DialogHeader>
        <div className="px-4 py-6">
          <WaitlistForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
