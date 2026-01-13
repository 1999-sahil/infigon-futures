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
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-800">API is currently unavailable</h2>
        <p className="text-gray-500 mt-2">Please refresh the page in a few moments.</p>
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