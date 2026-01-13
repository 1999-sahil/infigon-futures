"use client";

import { useEffect, useState } from "react";
import { getProducts, getCategories, getProductById } from "@/lib/api";
import ProductDashboard from "@/components/ProductDashboard";
import { Product } from "@/types/product";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [pData, cData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);
        
        if (pData.length === 0) throw new Error("No data");
        
        setProducts(pData);
        setCategories(cData);
      } catch (err) {
        console.error("Client fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <div className="p-20 text-center">Loading products...</div>;

  if (error) {
    return (
      <div className="p-20 text-center text-red-500">
        <h2 className="text-xl font-bold">Connection Issue</h2>
        <p>We were unable to load data from the API. Please try again.</p>
        <button onClick={() => window.location.reload()} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold">Product Explorer</h1>
      <ProductDashboard products={products} categories={categories} />
    </div>
  );
}