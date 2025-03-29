const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold text-center mb-6">Privacy Policy</h1>
      <p className="text-sm text-center mb-10">Effective Date: March 3, 2025</p>

      <p className="text-base leading-relaxed mb-6">
        Yarnsana ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website, make a purchase, or contact us. By using this website, you agree to the collection and use of information in accordance with this policy.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-lg font-semibold mb-2">1. Information We Collect</h2>
          
          <h3 className="text-md font-medium mt-4 mb-1">A. Contact Form Submissions</h3>
          <p className="text-base leading-relaxed">
            When you submit a message through our contact form, we receive your email address and any details you provide. This information is used solely to respond to your inquiry. We do not store, sell, or use your email for marketing purposes.
          </p>

          <h3 className="text-md font-medium mt-4 mb-1">B. Payment Information</h3>
          <p className="text-base leading-relaxed">
            All payments are securely processed through Stripe. We do not collect, store, or have access to your credit or debit card details. Please refer to 
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="underline"> Stripe’s Privacy Policy</a> for more information.
          </p>

          <h3 className="text-md font-medium mt-4 mb-1">C. Automatically Collected Data</h3>
          <p className="text-base leading-relaxed">
            When you visit our website, we may automatically collect certain non-personally identifiable information, such as your IP address, browser type, and site interactions, using cookies or tracking technologies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">2. How We Use Your Information</h2>
          <p className="text-base leading-relaxed">
            We use the information we collect to respond to inquiries, process payments securely via Stripe, analyze website usage, and comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">3. Information Sharing</h2>
          <p className="text-base leading-relaxed ">
            We do not sell, trade, or rent personal information to third parties. However, payment details are shared with Stripe, and legal disclosures may be required if mandated by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">4. Data Security</h2>
          <p className="text-base leading-relaxed">
            We take reasonable measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">5. Your Rights and Choices</h2>
          <p className="text-base leading-relaxed">
            You can request access to or deletion of your contact form submissions. To adjust how data is collected, you may modify your browser settings to limit cookie tracking.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">6. Third-Party Services</h2>
          <p className="text-base leading-relaxed ">
            Our website may contain links to external services, including payment processors. We encourage you to review their privacy policies before providing any information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">7. Changes to This Privacy Policy</h2>
          <p className="text-base leading-relaxed ">
            We may update this Privacy Policy as needed. Changes will be posted with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">8. Contact Information</h2>
          <p className="text-base leading-relaxed ">
            If you have any questions about this Privacy Policy, you may contact us through the contact form on our website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
