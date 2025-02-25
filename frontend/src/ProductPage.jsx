import { useParams, Link } from "react-router-dom";
import products from "./products.js";

const ProductPage = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <h2 className="text-center">Product not found</h2>;

    return (
        <div className="flex flex-col items-center space-y-12 p-12">
            <h1 className="text-2xl">{product.name}</h1>
            <p>${product.price}</p>
            <img src={product.image} alt={product.name} className="h-60"/>
            <div className="flex space-x-4">
                <Link to="/">Add to Cart</Link>
                <Link to="/">Back to Homepage</Link>
            </div>
        </div>
    );
};

export default ProductPage;
