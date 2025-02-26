import { useParams, Link } from "react-router-dom";
import products from "./products.js";

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product)
    return <h2 className="text-center text-xl mt-20">Product not found</h2>;

  return (
    <div className="flex flex-col items-center space-y-12 p-12 max-w-3xl mx-auto">
      <h1 className="text-4xl tracking-widest pt-24">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="h-80 w-auto object-cover rounded-lg shadow-md"
      />
      <p className="text-lg tracking-wide">${product.price}</p>
      <p className="text-center leading-loose">{product.description}</p>

      <p className={`text-sm tracking-wide ${product.inventory > 0 ? "text-green-600" : "text-red-600"}`}>
        {product.inventory > 0 ? `In Stock: ${product.inventory}` : "Out of Stock"}
      </p>

      <div className="flex space-x-6 mt-6">
        <button
          disabled={product.inventory === 0}
          onClick={() => addToCart(product)}
          className={`border rounded-full px-6 py-2 transition duration-200 ${
            product.inventory === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-105"
          }`}
        >
          Add to Cart
        </button>
        <Link
          to="/collection"
          className="border rounded-full px-6 py-2 hover:scale-105 transition duration-200"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
