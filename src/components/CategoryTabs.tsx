
import { useState } from "react";

const categories = [
  { id: "featured", name: "Featured" },
  { id: "marketing", name: "Marketing" },
  { id: "sales", name: "Sales" },
  { id: "engineering", name: "Engineering" },
  { id: "product", name: "Product" },
  { id: "data", name: "Data Analysis" },
  { id: "finance", name: "Finance" },
];

export const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("featured");

  return (
    <div className="flex flex-nowrap gap-2 my-8 overflow-x-auto pb-2 hide-scrollbar">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-pill whitespace-nowrap ${
            activeCategory === category.id ? "category-pill-active" : "category-pill-inactive"
          }`}
          onClick={() => setActiveCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
