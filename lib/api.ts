import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/products/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Fetch product error:", error);
    return null;
  }
}