
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Thank you for joining our waitlist!");
    setEmail("");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 rounded-xl border-2 border-gray-300 text-lg placeholder:text-text placeholder:font-semibold focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      <Button
        type="submit"
        disabled={loading}
        className="h-12 rounded-xl bg-primary px-8 text-white font-black text-lg transition-all hover:bg-primary-hover hover:scale-105 hover:shadow-xl shadow-lg shadow-primary/30 tracking-wide"
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
};
