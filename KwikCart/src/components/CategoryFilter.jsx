import React from "react";
import { initialProducts } from "../data/product";
import { Tag } from "lucide-react";

const availableCategories = [
  "All",
  ...new Set(initialProducts.map((p) => p.category)),
];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="mb-8 rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-950/80 dark:shadow-none">
      <div className="flex flex-wrap items-center gap-3">
        <Tag className="w-5 h-5 text-blue-600" />
        {availableCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition duration-200 ${
              selectedCategory === category
                ? "bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/30"
                : "bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-blue-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
