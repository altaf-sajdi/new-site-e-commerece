import { products } from '@/lib/data';
import { ProductGrid } from '@/components/product-grid';

export default function ElectronicsPage() {
  const electronicsProducts = products.filter(
    (product) => product.category === 'Electronics'
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Electronics</h1>
      <ProductGrid products={electronicsProducts} />
    </div>
  );
}