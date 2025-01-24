import Link from 'next/link';
import { Store } from 'lucide-react';

const categories = [
  { label: 'All Products', href: '/' },
  { label: 'Electronics', href: '/category/electronics' },
  { label: 'Accessories', href: '/category/accessories' },
];

export function MobileNav() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <Link href="/" className="flex items-center gap-2">
        <Store className="h-6 w-6" />
        <span className="text-xl font-bold">Store</span>
      </Link>
      <nav className="flex flex-col gap-4">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {category.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}