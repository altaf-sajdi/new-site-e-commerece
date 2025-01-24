export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
        Welcome to Store, your ultimate destination for premium electronics and accessories.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
        <p className="mb-6">
        Founded with a passion for technology and innovation,
         Store has been delivering premium products to customers since 2025.
          Our mission is to provide only the highest quality items designed to elevate your everyday life.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
        Our mission is to offer our customers thoughtfully curated products that blend quality,
         innovation, and style. 
         We are committed to making premium technology accessible to all while ensuring
          exceptional customer service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Quality Commitment</h2>
        <p className="mb-6">
        Every product in our store is meticulously selected and rigorously tested to meet our high standards. 
        We collaborate directly with trusted manufacturers and renowned brands to provide you with the finest products available.
        </p>
      </div>
    </div>
  );
}