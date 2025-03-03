import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";
  const { addToCart, cart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        if (Object.keys(data.inventory).length > 0) {
          setSelectedColor(Object.keys(data.inventory)[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2 className="text-center text-xl mt-20">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-xl mt-20 text-red-500">{error}</h2>;
  }

  if (!product) {
    return <h2 className="text-center text-xl mt-20">Product not found</h2>;
  }

  const cartItem = cart.find(
    (item) => item.id === product.id && item.color === selectedColor
  );
  const inCartCount = cartItem ? cartItem.quantity : 0;
  const availableStock = selectedColor ? product.inventory[selectedColor] || 0 : 0;

  const handleAddToCart = () => {
    setAddingToCart(true);
    setTimeout(() => {
      addToCart(product, selectedColor);
      setAddingToCart(false);
    }, 500);
  };

  const getColorClass = (color) => {
    switch (color) {
      case "light":
        return "bg-white border border-gray-400";
      case "dark":
        return "bg-black";
      case "multi":
        return "bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center space-y-40 p-12 max-w-3xl mx-auto">
      
      <nav className="w-full tracking-wide pt-24">
        <Link to="/" className="hover:opacity-80 transition ease-in-out">Home</Link> &gt;{" "}
        <Link to="/collection" className="hover:opacity-80 transition ease-in-out">Collection</Link> &gt;{" "}
        <span className="italic">{product.name}</span>
      </nav>
      
      <h1 className="text-6xl tracking-wide uppercase">{product.name}</h1>

      <div className="flex flex-col lg:flex-row lg:space-x-8 w-full">
      <img
        src={product.image}
        alt={product.name}
        className="h-80 w-auto object-cover rounded-lg shadow-md"
      />
       <p className="text-justify tracking-tight lg:w-full lg:pl-24 self-center leading-loose">{product.description}</p>
      </div>

    
      <div className="border border-gray-400 p-4 rounded-md text-sm w-1/2 mx-auto text-center tracking-wide">
        <p className="uppercase font-medium">Fabric Content</p>
        <hr className="my-2 border-gray-300" />
        <p>{product.material}</p>
        <p>{product.saved} Upcycled T-shirts</p>

        <p className="pt-8 uppercase font-medium">Size & Fit</p>
        <hr className="my-2 border-gray-300" />
        <p>Adjustable Fit</p>
        <p>One Size Fits Most Mats</p>
        <p>Lightweight & Compact</p>

        <p className="pt-8 uppercase font-medium">Care Instructions</p>
        <hr className="my-2 border-gray-300" />
        <p>Spot Clean Only</p>
        <p>Lay Flat to Dry</p>
      </div>

  <div className="grid gap-12">
    <p className="text-sm tracking-wide ">Each piece is lovingly crafted from upcycled materials, making every item one-of-a-kind. <br/> Expect slight variations in color and texture.</p>
    <p className="text-sm tracking-wide text-center">Select Color Theme:</p>
    <div className="flex justify-center gap-3">
      {Object.keys(product.inventory).map((color) => (
        <div key={color} className="flex flex-col items-center space-y-4">
          <button
            onClick={() => setSelectedColor(color)}
            disabled={product.inventory[color] === 0}
            className={`h-12 w-12 rounded-full border transition duration-200 ${
              selectedColor === color ? "scale-110 " : "border-gray-300"
            } ${
              product.inventory[color] === 0 ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            } ${getColorClass(color)}`}
            aria-label={`Select ${color}`}
          />
          <span className={`text-xs tracking-wide capitalize ${
            selectedColor === color ? "font-medium border-b" : ""
          }`}>
            {color.replace("-", " ")}
          </span>
        </div>
      ))}
  </div>

  <div className="flex justify-around text-sm tracking-wide">
    <p>{availableStock > 0 ? `In Stock: ${availableStock}` : "Out of Stock"}</p>
    <p>{inCartCount > 0 ? `In Cart: ${inCartCount}` : "Not in Cart"}</p>
  </div>

  <div className="grid grid-cols-2 gap-4">
    <button
      disabled={availableStock === 0 || inCartCount >= availableStock || addingToCart}
      onClick={handleAddToCart}
      className={`border rounded-full px-6 py-3 text-sm tracking-wide transition-all duration-200 flex items-center justify-center space-x-2 ${
        availableStock === 0 || inCartCount >= availableStock
          ? "opacity-50 cursor-not-allowed border-gray-300"
          : "hover:scale-[1.02] "
      }`}
    >
      {addingToCart ? (
        <>
          <span className="animate-spin h-4 w-4 border-2 border-t-transparent rounded-full"></span>
          <span>Adding...</span>
        </>
      ) : (
        "Add to Cart"
      )}
    </button>

    <Link
      to="/cart"
      className="border rounded-full px-6 py-3 text-sm tracking-wide text-center transition-all duration-200 hover:scale-[1.02] flex items-center justify-center"
    >
      Buy Now
    </Link>
  </div>

      </div>
    </div>
  );
};

export default ProductPage;
