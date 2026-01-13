"use client";

import { useState, useMemo } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { Search, Filter, Heart } from "lucide-react";
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
      <div className="sticky top-4 z-30 px-2 py-4 rounded-lg flex flex-col md:flex-row gap-4 justify-between bg-neutral-200 shadow">
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 bg-white border-neutral-300 focus:border-neutral-400 focus:bg-white border text-sm rounded-lg outline-none transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <select
              className="appearance-none capitalize pl-4 pr-10 py-2 bg-white border border-neutral-300 hover:border-neutral-400 rounded-lg focus:bg-white outline-none cursor-pointer text-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <Filter
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
              size={14}
            />
          </div>

          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className={`px-4 py-2 rounded-lg transition-colors bg-white border border-neutral-300 text-sm ${
              showFavorites
                ? "bg-red-50 border-red-200 text-red-600"
                : "hover:border-neutral-400"
            }`}
          >
            {showFavorites ? <span className="flex items-center gap-1"><Heart className="text-rose-500 size-4" /> Favorites</span> : <span className="flex items-center gap-1"><Heart className="text-neutral-400 size-4" /> Favorites</span>}
          </button>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-neutral-300">
          <p className="text-gray-500">No products found.</p>
          <button
            onClick={() => {
              setSearch("");
              setCategory("all");
              setShowFavorites(false);
            }}
            className="mt-2 text-blue-600 hover:underline font-medium"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
