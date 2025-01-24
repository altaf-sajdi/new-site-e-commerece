'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Price } from '@/components/ui/price';
import { Product } from '@/lib/types';
import { useCart } from '@/hooks/use-cart';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const cart = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <Price amount={product.price} className="text-2xl" />
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div className="pt-4">
            <Button
              size="lg"
              onClick={() => cart.addItem(product)}
              className="w-full md:w-auto"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}