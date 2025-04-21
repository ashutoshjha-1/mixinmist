
import { cn } from "@/lib/utils";

interface MockupProps {
  children: React.ReactNode;
  className?: string;
}

export function Mockup({ children, className }: MockupProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-background/80 backdrop-blur",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b bg-muted/40 p-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
      </div>
      {children}
    </div>
  );
}
