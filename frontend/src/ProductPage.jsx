import { useParams, Link } from "react-router-dom";
import products from "./products.js";

const ProductPage = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <h2 className="text-center text-xl mt-20">Product not found</h2>;

    return (
        <div className="flex flex-col items-center space-y-12 p-12 max-w-3xl mx-auto">
            <h1 className="text-3xl tracking-wider pt-20">{product.name}</h1>
            <img 
                src={product.image} 
                alt={product.name} 
                className="h-80 w-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-lg tracking-wide">${product.price}</p>
            <p className="text-sm tracking-wide">
                {product.inventory > 0 ? `In Stock: ${product.inventory}` : "Out of Stock"}
            </p>
            <p className="text-center leading-loose">{product.description}</p>

            <div className="flex space-x-6 mt-6">
                <Link 
                    to="/" 
                    className="border rounded-full px-6 py-2 hover:scale-105 transition duration-200"
                >
                    Add to Cart
                </Link>
                <Link 
                    to="/" 
                    className="border rounded-full px-6 py-2 hover:scale-105 transition duration-200"
                >
                    Back to Homepage
                </Link>
            </div>
        </div>
    );
};

export default ProductPage;
