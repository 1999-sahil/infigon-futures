import { getProducts, getCategories } from "@/lib/api";
import ProductDashboard from "@/components/ProductDashboard";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  // If the API failed during build, we show a friendly message 
  // rather than letting the build fail.
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-xl font-semibold">No products available</h2>
        <p className="text-gray-500">Please try refreshing the page.</p>
      </div>
    );
  }

  return (
    <div className="space-y-5 md:space-y-8">
      <header>
        <h1 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900">Product Explorer</h1>
        <p className="text-gray-500 mt-1 md:mt-2">Browse our collection of premium items.</p>
      </header>
      <ProductDashboard products={products} categories={categories} />
    </div>
  );
}