
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { ProductivitySection } from "@/components/ProductivitySection";
import { SearchBar } from "@/components/SearchBar";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 px-4 flex flex-col justify-start pt-8">
          <ProductivitySection />
          <SearchBar />
        </main>
      </div>
    </div>
  );
};

export default Index;
