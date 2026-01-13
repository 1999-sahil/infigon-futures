import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import AddToFavoriteBtn from "./AddToFavoritesBtn";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full">
      <div className="relative h-64 p-6 flex items-center justify-center bg-white">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain h-48 w-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <AddToFavoriteBtn id={product.id} />
        </div>
      </div>
      
      <Link href={`/products/${product.id}`} className="flex-1 p-4 flex flex-col">
        <p className="text-xs font-semibold text-blue-600 uppercase mb-2">
          {product.category}
        </p>
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2" title={product.title}>
          {product.title}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <div className="flex items-center text-sm text-gray-500 gap-1">
            <span>★</span> {product.rating.rate}
          </div>
        </div>
      </Link>
    </div>
  );
}