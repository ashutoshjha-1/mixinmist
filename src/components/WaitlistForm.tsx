
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Thank you for joining our waitlist!");
    setEmail("");
    setLoading(false);
  };

  const formClasses = isMobile
    ? "fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-lg z-50"
    : "w-full max-w-md";

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${formClasses}`}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 rounded-xl border-gray-200"
      />
      <Button
        type="submit"
        disabled={loading}
        className="h-12 whitespace-nowrap rounded-xl bg-primary px-6 text-white transition-all hover:bg-primary-hover"
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
};
