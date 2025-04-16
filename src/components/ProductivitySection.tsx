
import { SearchIcon, Paintbrush, Atom, PlusCircle } from "lucide-react";
import { CategoryTabs } from "./CategoryTabs";
import { FeatureCard } from "./FeatureCard";

export const ProductivitySection = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold mt-12 mb-8 text-center">
        Enhance your <span className="gradient-text">productivity</span> with AI
      </h1>
      
      <CategoryTabs />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard 
          icon={<SearchIcon className="text-blue-800" size={24} />}
          title="Research"
          description="Deep research with industry-leading accuracy"
          iconBg="bg-blue-100"
        />
        
        <FeatureCard 
          icon={<Paintbrush className="text-purple-800" size={24} />}
          title="Create"
          description="Transform ideas into polished images and visuals"
          iconBg="bg-purple-100"
        />
        
        <FeatureCard 
          icon={<Atom className="text-blue-800" size={24} />}
          title="Compute"
          description="Solve complex data and engineering challenges"
          iconBg="bg-blue-100"
        />
        
        <FeatureCard 
          icon={<PlusCircle className="text-white" size={24} />}
          title="Build your own"
          description="Create your own custom agent"
          iconBg="bg-zinc-700"
        />
      </div>
    </div>
  );
};
