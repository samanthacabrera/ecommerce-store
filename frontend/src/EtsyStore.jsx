import { ExternalLink } from 'lucide-react';

const EtsyStore = () => {
    return (
        <div className="flex flex-col justify-center h-full w-full px-4">
            <div className="max-w-4xl mx-auto w-full space-y-12">
            <h2 className="text-4xl">Find Yarn<span className="italic">sara</span> on Etsy</h2>
            <div className="space-y-4 p-12 bg-white/5 rounded-xl border border-white/10">
                <p> Yarnsara started on Etsy, and it’s still a great place to explore past creations, read customer reviews, and shop new drops. </p>
                <p> While this website is where everything comes together, you can always check out the Etsy shop if you want to see more. Please show your support and follow our shop on Etsy if you’d like! </p>
                <a 
                    href="https://www.etsy.com/shop/yarnsara" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 w-fit rounded-xl mx-auto text-white hover:bg-white/10 transition duration-300 ease-in-out"
                > 
                <span>Visit Yarnsara on Etsy</span>
                <ExternalLink className="ml-2" size={18} />
                </a>
            </div>
            </div>
        </div>
    );
};

export default EtsyStore;
