
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const webhookUrl = `https://engine.ayurvedology.com/webhook-test/73d73d09-b55d-4c04-8df4-f8ad4e00f219?email=${encodeURIComponent(email)}`;
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

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 rounded-full border-gray-200 bg-white/80 backdrop-blur"
      />
      <Button
        type="submit"
        disabled={loading}
        className="h-12 rounded-full bg-[#e88d72] px-6 text-white hover:bg-[#e27b5c]"
      >
        {loading ? "Joining..." : "Get Started"}
      </Button>
    </form>
  );
};
