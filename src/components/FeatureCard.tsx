
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl glass-card p-8 hover-lift">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -inset-x-24 -top-24 aspect-square rounded-full bg-purple-100/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative">
        <div className="mb-6 rounded-xl bg-primary/5 p-4 text-primary transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-110 group-hover:shadow-lg">
          <Icon size={28} className="transition-transform duration-500 group-hover:rotate-12" />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-text transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-text-muted leading-relaxed transition-colors duration-300 group-hover:text-text">
          {description}
        </p>
      </div>
    </div>
  );
};
