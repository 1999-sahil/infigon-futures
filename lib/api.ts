// lib/api.ts
import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  'Accept': 'application/json',
};

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      // Revalidate every hour
      next: { revalidate: 3600 }, 
      headers,
      cache: 'no-store'
    });
    if (!res.ok) return []; 
    return res.json();
  } catch (error) {
    console.error("Fetch products error:", error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch(`${BASE_URL}/products/categories`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Fetch categories error:", error);
    return [];
  }
}