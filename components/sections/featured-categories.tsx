import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
    href: '/category/electronics'
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80',
    href: '/category/accessories'
  }
];

export function FeaturedCategories() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className="group relative overflow-hidden rounded-lg"
        >
          <div className="relative aspect-[16/9]">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}