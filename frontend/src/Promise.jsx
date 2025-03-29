const Promise = () => {
    return (
        <div>
            <section className="bg-gray-100 py-24 text-center px-6">
                <h2 className="text-4xl font-light mb-10">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                <div>
                    <h3 className="text-xl font-semibold">✨ Premium Craftsmanship</h3>
                    <p className="text-gray-600 mt-2">Handcrafted with precision and attention to detail.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">🌍 Sustainable Materials</h3>
                    <p className="text-gray-600 mt-2">We prioritize eco-friendly and ethically sourced materials.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">💎 Timeless Design</h3>
                    <p className="text-gray-600 mt-2">Classic pieces that remain stylish season after season.</p>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Promise;