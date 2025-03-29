const Policies = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-32">
      <h3 className="text-xl font-normal text-center mb-4">Terms & Policies</h3>
      
      <p className="mb-4 text-sm">
        Transparency and sustainability are at the core of Yarn<span className="italic">sara</span>. Please read through the shop policies before placing an order to ensure a smooth experience.
      </p>
      
      <div className="space-y-4">
        <section className="border-b pb-2">
          <h3 className="font-normal text-sm mb-1">Shipping</h3>
          <p className="text-sm">
            Orders are processed within 7-14 business days and shipped via standard USPS. Shipping times vary based on location.
          </p>
        </section>
        
        <section className="border-b pb-2">
          <h3 className="font-normal text-sm mb-1">Payment Methods</h3>
          <p className="text-sm">
            Yarn<span className="italic">sara</span> accepts all major credit/debit cards, PayPal, and Apple Pay. All payments are securely processed through Stripe to ensure a safe and seamless transaction.
          </p>
        </section>
        
        <section className="border-b pb-2">
          <h3 className="font-normal text-sm mb-1">Returns & Exchanges</h3>
          <p className="text-sm">
            All sales are final. If there's an issue with your order, please reach out within 7 days of delivery. While I don't offer returns, I'm happy to arrange an exchange if your item is unused and in its original condition.
          </p>
        </section>
        
        <section className="border-b pb-2">
          <h3 className="font-normal text-sm mb-1">Cancellations</h3>
          <p className="text-sm">
            Orders can be canceled within 24 hours of placement. After that, work on your order may have already begun, and cancellations will not be accepted.
          </p>
        </section>
        
        <section>
          <h3 className="font-normal text-sm mb-1">Customization & Special Requests</h3>
          <p className="text-sm">
            Custom orders may be available depending on fabric stock and time constraints. Feel free to reach out if you have a specific request!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Policies;