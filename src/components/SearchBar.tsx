
import { useState } from "react";
import { GemIcon, Search, Paperclip, Mic } from "lucide-react";
import { SearchResponse } from "./SearchResponse";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setShowResponse(true);
    }
  };

  return (
    <>
      <div className="relative w-full max-w-3xl mx-auto mt-2">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input 
              type="text" 
              className="search-input py-3"
              placeholder="How can I help?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
              <button type="button" className="p-2 text-zinc-400 hover:text-white transition-colors">
                <Mic size={18} />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 mt-2">
            <button type="button" className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
              <GemIcon size={14} />
              <span className="text-xs">Advanced</span>
            </button>
            
            <button type="button" className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
              <Search size={14} />
              <span className="text-xs">Web</span>
            </button>
            
            <button type="button" className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
              <Paperclip size={14} />
              <span className="text-xs">Attach</span>
            </button>
          </div>
          <div className="text-center mt-1">
            <p className="text-xs text-zinc-500">
              By using you.com, you agree to our <a href="#" className="text-blue-400 hover:underline">Terms</a> & <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </form>
      </div>
      <SearchResponse query={query} visible={showResponse} />
    </>
  );
};
