"use client";

import { useFavorites } from "@/context/FavoritesContext";
import { Heart } from "lucide-react";

export default function AddToFavoriteBtn({ id }: { id: number }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(id);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(id);
      }}
      className={`p-2 rounded-full transition-colors ${
        favorite ? "bg-red-50 text-red-500" : "bg-white/80 text-gray-400 hover:bg-gray-100"
      }`}
    >
      <Heart size={20} className={favorite ? "fill-current" : ""} />
    </button>
  );
}