import { useParams, Link } from "react-router-dom";
import { useCart } from "./CartContext";
import products from "./products.js";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart, cart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return <h2 className="text-center text-xl mt-20">Product not found</h2>;
  }

  const cartItem = cart.find((item) => item.id === product.id);
  const inCartCount = cartItem ? cartItem.quantity : 0;

  return (
    <div className="flex flex-col items-center space-y-12 p-12 max-w-3xl mx-auto">
      
      <nav className="w-full tracking-wide pt-24">
        <Link to="/" className="hover:opacity-80 transition ease-in-out">Home</Link> &gt;{" "}
        <Link to="/collection" className="hover:opacity-80 transition ease-in-out">Collection</Link> &gt;{" "}
        <span className="italic">{product.name}</span>
      </nav>

      <h1 className="text-6xl tracking-wide uppercase">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="h-80 w-auto object-cover rounded-lg shadow-md"
      />
      <p className="text-lg tracking-wide">${product.price}</p>
      <p className="text-center leading-loose">{product.description}</p>

      <p className="text-sm tracking-wide">
        {product.inventory > 0 ? `In Stock: ${product.inventory}` : "Out of Stock"}
      </p>

      <p className="text-sm tracking-wide">
        {inCartCount > 0 ? `In Cart: ${inCartCount}` : "Not in cart"}
      </p>

      <div className="flex space-x-6 mt-6">
        <button
          disabled={product.inventory === 0 || inCartCount >= product.inventory}
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
          to="/cart"
          className="border rounded-full px-6 py-2 hover:scale-105 transition duration-200"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
