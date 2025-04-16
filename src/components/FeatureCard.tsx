
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBg?: string;
}

export const FeatureCard = ({ icon, title, description, iconBg = "bg-blue-100" }: FeatureCardProps) => {
  return (
    <div className="you-card flex flex-col gap-4 h-full">
      <div className={`w-14 h-14 rounded-lg ${iconBg} flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
};
