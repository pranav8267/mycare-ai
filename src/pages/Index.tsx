
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { ProductivitySection } from "@/components/ProductivitySection";
import { SearchBar } from "@/components/SearchBar";

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <main className="pt-4 pb-8">
          <ProductivitySection />
          <SearchBar />
        </main>
      </div>
    </div>
  );
};

export default Index;
