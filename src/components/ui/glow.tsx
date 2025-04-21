
import { cn } from "@/lib/utils";

interface GlowProps {
  variant?: "above" | "below";
  className?: string;
}

export function Glow({ variant = "above", className }: GlowProps) {
  return (
    <div 
      className={cn(
        "absolute left-1/2 -translate-x-1/2",
        variant === "above" ? "-top-40" : "-bottom-40",
        "h-[400px] w-[800px] sm:w-[1000px] lg:w-[1200px]",
        "rounded-full",
        "opacity-20 dark:opacity-10",
        "blur-[100px]",
        "bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-blue-500/40",
        className
      )}
    />
  );
}
