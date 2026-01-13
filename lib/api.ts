// lib/api.ts
import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

/**
 * Shared fetch helper to handle errors gracefully during build time
 */
async function fetcher<T>(endpoint: string): Promise<T | null> {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      // Revalidate every hour (3600 seconds)
      // This helps with performance and prevents hitting the API on every click
      next: { revalidate: 3600 }, 
    });

    if (!res.ok) {
      console.warn(`API error at ${endpoint}: ${res.statusText}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(`Network error at ${endpoint}:`, error);
    return null;
  }
}

export async function getProducts(): Promise<Product[]> {
  const data = await fetcher<Product[]>("/products");
  return data ?? []; // Return empty array instead of crashing if null
}

export async function getProductById(id: string): Promise<Product | null> {
  return await fetcher<Product>(`/products/${id}`);
}

export async function getCategories(): Promise<string[]> {
  const data = await fetcher<string[]>("/products/categories");
  return data ?? []; // Return empty array if the API fails
}