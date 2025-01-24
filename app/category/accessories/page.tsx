import { products } from '@/lib/data';
import { ProductGrid } from '@/components/product-grid';

export default function AccessoriesPage() {
  const accessoriesProducts = products.filter(
    (product) => product.category === 'Accessories'
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Accessories</h1>
      <ProductGrid products={accessoriesProducts} />
    </div>
  );
}