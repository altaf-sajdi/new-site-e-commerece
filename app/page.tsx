import { products } from '@/lib/data';
import { ProductGrid } from '@/components/product-grid';
import { FeaturedCategories } from '@/components/sections/featured-categories';
import { Newsletter } from '@/components/sections/newsletter';

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      <section className="relative h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Welcome to Our Store</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our curated collection of premium products, from cutting-edge electronics to stylish accessories.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <FeaturedCategories />
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <ProductGrid products={products} />
      </section>

      <Newsletter />
    </div>
  );
}