'use client';

import { Button } from '@/components/ui/button';
import { CartItemCard } from '@/components/cart-item';
import { Price } from '@/components/ui/price';
import { useCart } from '@/hooks/use-cart';

export default function CartPage() {
  const cart = useCart();
  const total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some products to your cart to get started.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cart.items.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <Price amount={total} />
          </div>
          <Button className="w-full" size="lg">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}