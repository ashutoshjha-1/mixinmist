
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { WaitlistForm } from "./WaitlistForm";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-8 md:py-8 pb-32 md:pb-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm font-bold text-text-muted">
            © 2025 Mixinmist. All rights reserved.
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="h-10 whitespace-nowrap rounded-xl bg-black px-6 text-white transition-all hover:bg-black/90">
                Join Waitlist
              </Button>
            </DialogTrigger>
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
        </div>
      </div>
    </footer>
  );
};
