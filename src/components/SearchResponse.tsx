
import { Workflow, MessageCircle } from "lucide-react";
import { Card } from "./ui/card";

interface SearchResponseProps {
  query: string;
  visible: boolean;
}

export const SearchResponse = ({ query, visible, }: SearchResponseProps) => {
  if (!visible) return null;

  return (
    <div className="w-full max-w-3xl mx-auto mt-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
          <span className="text-white text-sm">P</span>
        </div>
        <h2 className="text-xl text-white font-medium">{query}</h2>
      </div>

      <Card className="bg-zinc-900/50 border-zinc-800">
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Workflow className="w-5 h-5" />
              <span className="text-sm font-medium">Workflow</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Quick answer</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center">
                <span className="text-xs">1</span>
              </div>
              <span className="text-sm text-zinc-400">Thinking</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center">
                <span className="text-xs">2</span>
              </div>
              <span className="text-sm text-zinc-400">Activating advanced capabilities and reasoning</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center">
                <span className="text-xs">3</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-zinc-400">Researching</span>
                <span className="text-xs text-zinc-500">40 sources read</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
