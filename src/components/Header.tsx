
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-black tracking-tight text-black">
            MIXINMIST
          </span>
        </div>
      </div>
    </header>
  );
};
