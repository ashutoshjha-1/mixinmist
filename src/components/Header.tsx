
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { WaitlistForm } from "./WaitlistForm";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-black tracking-tight text-black hover:opacity-80 transition-opacity">
              MIXINMIST<sup className="text-[10px] tracking-normal">TM</sup>
            </Link>
            <Link 
              to="/blogs" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-black",
                location.pathname === "/blogs" ? "text-black" : "text-text-muted"
              )}
            >
              Blog
            </Link>
          </div>
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
    </header>
  );
};
