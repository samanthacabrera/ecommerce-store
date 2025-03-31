import React from "react";

const Policies = () => {
  return (
    <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl italic text-center mb-8">Terms & Policies</h1>
    <div className="max-w-xl mx-auto text-sm p-6 bg-white/5 rounded-xl border border-white/10 space-y-6">      
        <section>
          <h3 className="mb-1 px-1 border-b w-fit mx-auto">Shipping</h3>
          <p>
            Orders are processed within 7-14 business days and shipped via standard USPS. Shipping times vary based on location.
          </p>
        </section>
        
        <section>
          <h3 className="mb-1 px-1 border-b w-fit mx-auto">Payment Methods</h3>
          <p>
            Yarn<span className="italic">sara</span> accepts all major credit/debit cards, PayPal, and Apple Pay. All payments are securely processed through Stripe to ensure a safe and seamless transaction.
          </p>
        </section>
        
        <section>
          <h3 className="mb-1 px-1 border-b w-fit mx-auto">Returns & Exchanges</h3>
          <p>
            All sales are final. If there's an issue with your order, please reach out within 7 days of delivery. While I don't offer returns, I'm happy to arrange an exchange if your item is unused and in its original condition.
          </p>
        </section>
        
        <section>
          <h3 className="mb-1 px-1 border-b w-fit mx-auto">Cancellations</h3>
          <p>
            Orders can be canceled within 24 hours of placement. After that, work on your order may have already begun, and cancellations will not be accepted.
          </p>
        </section>
    </div>
  </div>
  );
};

export default Policies;