
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl">
      <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary transition-all group-hover:bg-primary/20">
        <Icon size={24} />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-text">{title}</h3>
      <p className="text-text-muted">{description}</p>
    </div>
  );
};
