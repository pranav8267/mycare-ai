
import { GemIcon, Search, Paperclip, Mic } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto mt-12">
      <div className="relative">
        <input 
          type="text" 
          className="search-input"
          placeholder="How can I help?"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
          <button className="p-2 text-zinc-400 hover:text-white transition-colors">
            <Mic size={20} />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 mt-3">
        <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
          <GemIcon size={16} />
          <span className="text-sm">Advanced</span>
        </button>
        
        <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
          <Search size={16} />
          <span className="text-sm">Web</span>
        </button>
        
        <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
          <Paperclip size={16} />
          <span className="text-sm">Attach</span>
        </button>
      </div>
      <div className="text-center mt-5">
        <p className="text-xs text-zinc-500">
          By using you.com, you agree to our <a href="#" className="text-blue-400 hover:underline">Terms</a> & <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};
