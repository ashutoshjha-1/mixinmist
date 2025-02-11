
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
    
    try {
      const webhookUrl = `https://engine.ayurvedology.com/webhook/73d73d09-b55d-4c04-8df4-f8ad4e00f219?email=${encodeURIComponent(email)}`;
      const response = await fetch(webhookUrl);
      
      if (response.ok) {
        toast.success("Thank you for joining our waitlist!");
        setEmail("");
      } else {
        toast.error("Failed to join waitlist. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to join waitlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formClasses = isMobile
    ? "fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-lg z-50"
    : "w-full max-w-md";

  return (
    <div className="space-y-2">
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
          className="h-12 whitespace-nowrap rounded-xl bg-black px-6 text-white transition-all hover:bg-black/90"
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
      <p className="text-xs text-gray-500 text-center">
        We respect your privacy. No spam, just product updates.
      </p>
    </div>
  );
};
