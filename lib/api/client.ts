const API_BASE_URL = '/api';

export async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}/products`, {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}

export async function fetchProductById(id: string) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error('Failed to fetch product');
  }
  return response.json();
}