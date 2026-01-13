import { getProducts, getCategories } from "@/lib/api";
import ProductDashboard from "@/components/ProductDashboard";

// This ensures that if the static build fails, it will try again at request time
export const dynamic = "force-dynamic";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  // Handle cases where API returns empty data during build
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="bg-orange-50 text-orange-600 p-4 rounded-full mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800">API Connection Issue</h2>
        <p className="text-gray-500 mt-2 mb-6 max-w-sm">
          Vercel is having trouble reaching the product database. This is usually temporary.
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Product Explorer</h1>
        <p className="text-gray-500 mt-2">Discover our curated list of products</p>
      </header>
      <ProductDashboard products={products} categories={categories} />
    </div>
  );
}