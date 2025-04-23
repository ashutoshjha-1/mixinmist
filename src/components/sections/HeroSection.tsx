
import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <Dialog>
      <div className="container mx-auto px-4 py-16">
        <Card className="w-full min-h-[600px] bg-black/[0.96] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Create Your Dream Beauty Brand
              </h1>
              <p className="mt-4 text-neutral-300 max-w-lg">
                Launch your beauty brand in minutes, not months. Build your brand with our all-in-one platform.
              </p>
              <div className="mt-8">
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    Get Started
                  </Button>
                </DialogTrigger>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 relative min-h-[400px]">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>

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
