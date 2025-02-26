const EtsyStore = () => {
    return (
        <div className="max-w-2xl mx-auto p-12 space-y-6">
            <h2 className="text-3xl text-center">Find Yarn<span className="italic">sara</span> on Etsy</h2>
            <p> Yarnsara started on Etsy, and it’s still a great place to explore past creations, read customer reviews, and shop new drops. </p>
            <p> While this website is where everything comes together, you can always check out the Etsy shop if you want to see more. Please show your support and follow our shop on Etsy if you’d like! </p>
            <a 
                href="https://www.etsy.com/shop/yarnsara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border-b border-current hover:opacity-80 transition duration-200 ease-in-out"
            >
                Visit Yarnsara on Etsy →
            </a>
        </div>
    );
};

export default EtsyStore;
