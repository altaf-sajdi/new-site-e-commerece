import { ProductDetails } from '@/components/product-details';
import { getProductById } from '@/lib/api/products';
import { products } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}