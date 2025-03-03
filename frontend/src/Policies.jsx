const Policies = () => {
    return (
        <div className="max-w-2xl mx-auto p-12 space-y-12">
            <h2 className="text-4xl text-center italic mb-24">Shop Policies</h2>
            <p>
                Transparency and sustainability are at the core of Yarn<span className="italic">sara</span>. Please read through the shop policies before placing an order to ensure a smooth experience.
            </p>
            <div>
                <h3>Shipping</h3>
                <p>
                    Orders are processed within 7-14 business days and shipped via standard USPS. Shipping times vary based on location.
                </p>
            </div>
            <div>
            <h3 >Payment Methods</h3>
                <p>
                    Yarn<span className="italic">sara</span> accepts all major credit/debit cards, PayPal, and Apple Pay. All payments are securely processed through Stripe to ensure a safe and seamless transaction.
                </p>
            </div>
            <div>
                <h3>Returns & Exchanges</h3>
                <p>
                    All sales are final. If there’s an issue with your order, please reach out within 7 days of delivery. While I don’t offer returns, I’m happy to arrange an exchange if your item is unused and in its original condition.
                </p>
            </div>
            <div>
                <h3>Cancellations</h3>
                <p>
                    Orders can be canceled within 24 hours of placement. After that, work on your order may have already begun, and cancellations will not be accepted.
                </p>
            </div>
            <div>
                <h3>Customization & Special Requests</h3>
                <p>
                    Custom orders may be available depending on fabric stock and time constraints. Feel free to reach out if you have a specific request!
                </p>
            </div>
        </div>
    );
};

export default Policies;
