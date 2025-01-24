export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Orders & Shipping</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">How long does shipping take?</h3>
              <p className="text-muted-foreground">Standard shipping typically takes 3-5 business days within the continental US.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Do you ship internationally?</h3>
              <p className="text-muted-foreground">Yes, we ship to most countries. International shipping times vary by location.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Returns & Refunds</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">What is your return policy?</h3>
              <p className="text-muted-foreground">We offer a 30-day return policy for unused items in original packaging.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">How do I initiate a return?</h3>
              <p className="text-muted-foreground">Contact our customer service team to receive a return authorization number.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Are your products genuine?</h3>
              <p className="text-muted-foreground">Yes, all our products are 100% authentic and sourced directly from manufacturers.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Do products come with warranty?</h3>
              <p className="text-muted-foreground">Most electronics come with a manufacturer's warranty. Check product details for specific coverage.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}