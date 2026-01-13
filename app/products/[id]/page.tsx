import { getProductById } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Star } from "lucide-react";
import AddToFavoriteBtn from "@/components/AddToFavoritesBtn";

interface Props {
  params: { id: string };
}

export default async function ProductPage({ params }: Props) {
  // In Next.js 15+, params is a promise. If using 14 or lower, remove await.
  const { id } = await params;
  
  try {
    const product = await getProductById(id);
    if (!product) notFound();

    return (
      <div className="max-w-4xl mx-auto pt-4">
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 transition-colors font-medium">
          <ArrowLeft size={18} className="mr-2" />
          Back to browsing
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden grid md:grid-cols-2">
          {/* Image Section */}
          <div className="p-8 bg-gray-50 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 relative">
             <div className="absolute top-4 right-4 z-10">
                <AddToFavoriteBtn id={product.id} />
             </div>
             <div className="relative w-full aspect-square max-w-sm mix-blend-multiply">
               <Image
                 src={product.image}
                 alt={product.title}
                 fill
                 className="object-contain"
                 priority
               />
             </div>
          </div>

          {/* Details Section */}
          <div className="p-8 flex flex-col justify-center">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs mb-3">
              {product.category}
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price}
              </span>
              <div className="flex items-center bg-yellow-50 px-2 py-1 rounded text-yellow-700 font-medium text-sm">
                <Star size={14} className="fill-yellow-500 text-yellow-500 mr-1" />
                {product.rating.rate} <span className="text-gray-400 ml-1">({product.rating.count})</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              {product.description}
            </p>

            <button className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-gray-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}