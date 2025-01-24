export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Returns Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Return Guidelines</h2>
          <div className="prose max-w-none text-muted-foreground">
            <p className="mb-4">
              We want you to be completely satisfied with your purchase. If you're not happy
              with your order, you can return it within 30 days of delivery.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Items must be unused and in original packaging</li>
              <li>All accessories and documentation must be included</li>
              <li>Return shipping costs are the responsibility of the customer</li>
              <li>Refunds will be processed within 5-7 business days</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How to Return</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">1. Contact Us</h3>
              <p className="text-muted-foreground">
                Email our support team to receive a return authorization number.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">2. Pack Items</h3>
              <p className="text-muted-foreground">
                Securely pack items in original packaging with all accessories.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">3. Ship</h3>
              <p className="text-muted-foreground">
                Send the package to our returns center with tracking.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Opened software or digital products</li>
            <li>Personalized or custom-made items</li>
            <li>Items marked as final sale</li>
            <li>Gift cards</li>
          </ul>
        </section>

        <section className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-4">
            Our customer service team is here to assist you with any questions about returns.
          </p>
          <p className="font-medium">
            Contact us at: returns@store.com
          </p>
        </section>
      </div>
    </div>
  );
}