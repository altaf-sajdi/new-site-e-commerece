export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Shipping Methods</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Standard Shipping</h3>
              <p className="text-muted-foreground mb-2">3-5 business days</p>
              <p className="font-medium">Free on orders over $50</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Express Shipping</h3>
              <p className="text-muted-foreground mb-2">1-2 business days</p>
              <p className="font-medium">$15.99</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Shipping Policies</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Orders are processed within 24 hours on business days</li>
            <li>Tracking information is provided via email</li>
            <li>Signature may be required for orders over $200</li>
            <li>We ship to all 50 US states and most international locations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
          <p className="text-muted-foreground mb-4">
            International shipping rates and delivery times vary by location. 
            Additional duties and taxes may apply.
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-medium">Note: International orders typically arrive within 7-14 business days.</p>
          </div>
        </section>
      </div>
    </div>
  );
}