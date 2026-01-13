import { getProducts, getCategories } from "@/lib/api";
import ProductDashboard from "@/components/ProductDashboard";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

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