'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Price } from '@/components/ui/price';
import { Product } from '@/lib/types';
import { useCart } from '@/hooks/use-cart';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const cart = useCart();

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-all hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <Price amount={product.price} className="text-lg" />
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          variant="outline"
          onClick={() => router.push(`/products/${product.id}`)}
        >
          View Details
        </Button>
        <Button onClick={() => cart.addItem(product)}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}