const Process = () => {
    return (
        <div className="max-w-2xl mx-auto p-12">
            <h2 className="text-4xl text-center italic mb-24">The Process</h2>

            <div className="space-y-20">
                <div className="space-y-4">
                    <h3 className="text-2xl tracking-wide">Sourcing Materials</h3>
                    <p className="leading-loose">Most of my matieral is from local donations from friends in the Denver, CO area. I also purchase T-shirts from thrift stores, prioritizing 
                        clearance items that are at high risk of being discarded. This approach reduces textile waste in my area
                        while ensuring a steady supply of fabric.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-2xl tracking-wide">Washing & Sanitizing</h3>
                    <p className="leading-loose">
                        All sourced materials undergo a thorough washing and sanitization process. This step removes any residual dirt, oils, or 
                        allergens, ensuring that each fabric is clean and safe for repurposing.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-2xl tracking-wide">Sorting the Fabrics</h3>
                    <p className="leading-loose">
                        Fabrics are sorted based on material composition and color to maintain consistency in 
                        durability, performance, and aesthetic. Only two types of fabric are used: 
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>100% Cotton:</strong> Best for a strong, structured hold. Its firm, non-stretch weave provides a secure grip, ensuring the strap stays in place during transport.
                        </li>
                        <li>
                            <strong>Cotton-Polyester Blends:</strong> Best for a soft, flexible feel. Its slight stretch and smooth texture make it easy to wrap around your mat, offering an adaptable fit.
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-2xl tracking-wide">Creating the Yarn</h3>
                    <p className="leading-loose">
                        Each T-shirt is carefully cut into uniform strips to maximize material efficiency. The strips are then sewn together to form a continuous strand, ensuring strength and durability. Finally, the fabric is stretched, allowing the edges to curl naturally, creating a smooth, easy-to-work-with upcycled yarn for crocheting.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-2xl tracking-wide">Handcrafting the Collection</h3>
                    <p className="leading-loose">
                        I personally craft and inspect every piece, ensuring durability, consistency, and a high-quality finish before it’s packaged.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Process;
