
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl glass-card p-8 hover-lift">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-6 rounded-xl bg-primary/5 p-4 text-primary transition-all group-hover:bg-primary/10 group-hover:scale-110">
          <Icon size={28} />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-text">{title}</h3>
        <p className="text-text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
