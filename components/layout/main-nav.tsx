import Link from 'next/link';

const categories = [
  { label: 'All Products', href: '/' },
  { label: 'Electronics', href: '/category/electronics' },
  { label: 'Accessories', href: '/category/accessories' },
];

export function MainNav() {
  return (
    <nav className="flex items-center gap-6">
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
  );
}