const PrivacyPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-32">
      <h3 className="text-xl font-normal text-center mb-4">Privacy Policy</h3>
      <p className="text-sm mb-4 text-center">Effective Date: 03/03/2025</p>

      <p className="mb-4 text-sm">
        Yarnsana ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, make a purchase, or contact us. By using this website, you agree to the collection and use of information in accordance with this policy.
      </p>

      <div className="space-y-12">
        <section className="border-b pb-2">
          <h3 className="font-normal text-sm mb-1">1. Information We Collect</h3>

          <h4 className="font-normal text-sm mb-1">A. Contact Form Submissions</h4>
          <p className="text-sm">
            When you submit a message through our contact form, we receive your email address and any other details you provide. This information is used solely to respond to your inquiry. We do not store, sell, or use your email for marketing purposes.
          </p>

          <h4 className="font-normal text-sm mt-2 mb-1">B. Payment Information</h4>
          <p className="text-sm">
            All payments are securely processed through Stripe. We do not collect, store, or have access to your credit or debit card details. Please refer to <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Stripe’s Privacy Policy</a> for more information.
          </p>

          <h4 className="font-normal text-sm mt-2 mb-1">C. Automatically Collected Data</h4>
          <p className="text-sm">
            When you visit our website, we may automatically collect certain non-personally identifiable information, such as your IP address, browser type, and site interactions, using cookies or tracking technologies.
          </p>
        </section>

        <section className="border-b pb-2">
          <h3 className="font-normal text-sm mb-1">2. How We Use Your Information</h3>
          <p className="text-sm">
            We use the information we collect to respond to inquiries, process payments securely via Stripe, analyze website usage, and comply with legal obligations.
          </p>
        </section>

        <section className="border-b pb-2">
          <h3 className="font-normal text-sm mb-1">3. Information Sharing</h3>
          <p className="text-sm">
            We do not sell, trade, or rent personal information to third parties. However, payment details are shared with Stripe, and legal disclosures may be required if mandated by law.
          </p>
        </section>

        <section className="border-b pb-2">
          <h3 className="font-normal text-sm mb-1">4. Data Security</h3>
          <p className="text-sm">
            We take reasonable measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="border-b pb-2">
          <h3 className="font-normal text-sm mb-1">5. Your Rights and Choices</h3>
          <p className="text-sm">
            You can request access to or deletion of your contact form submissions. To adjust how data is collected, you may modify your browser settings to limit cookie tracking.
          </p>
        </section>

        <section className="border-b pb-2">
          <h3 className="font-normal text-sm mb-1">6. Third-Party Services</h3>
          <p className="text-sm">
            Our website may contain links to external services, including payment processors. We encourage you to review their privacy policies before providing any information.
          </p>
        </section>

        <section className="border-b pb-2">
          <h3 className="font-normal text-sm mb-1">7. Changes to This Privacy Policy</h3>
          <p className="text-sm">
            We may update this Privacy Policy as needed. Changes will be posted with an updated effective date.
          </p>
        </section>

        <section>
          <h3 className="font-normal text-sm mb-1">8. Contact Information</h3>
          <p className="text-sm">
            If you have any questions about this Privacy Policy, you may contact us through the contact form on our website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
