"use client";

import { useState, useMemo } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { Search, Filter } from "lucide-react";
import { useFavorites } from "@/context/FavoritesContext";

interface Props {
  products: Product[];
  categories: string[];
}

export default function ProductDashboard({ products, categories }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showFavorites, setShowFavorites] = useState(false);
  const { favorites } = useFavorites();

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "all" || p.category === category;
      const matchFav = showFavorites ? favorites.includes(p.id) : true;
      return matchSearch && matchCategory && matchFav;
    });
  }, [search, category, showFavorites, products, favorites]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="sticky top-4 z-30 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-transparent focus:bg-white border focus:border-blue-500 rounded-lg outline-none transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <select
              className="appearance-none pl-4 pr-10 py-2 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 outline-none cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
          </div>

          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors border ${
              showFavorites
                ? "bg-red-50 border-red-200 text-red-600"
                : "bg-gray-50 border-transparent text-gray-600 hover:bg-gray-100"
            }`}
          >
            {showFavorites ? "❤️ Saved" : "🤍 Saved"}
          </button>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
          <p className="text-gray-500">No products found.</p>
          <button 
            onClick={() => {setSearch(''); setCategory('all'); setShowFavorites(false)}}
            className="mt-2 text-blue-600 hover:underline font-medium"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}