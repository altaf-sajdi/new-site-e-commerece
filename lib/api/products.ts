import { Product } from '@/lib/types';
import { products as staticProducts } from '@/lib/data';

// In a real app, this would fetch from a database
export async function getProducts(): Promise<Product[]> {
  return staticProducts;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return staticProducts.find(product => product.id === id);
}