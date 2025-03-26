import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";
  const { addToCart, cart } = useCart();
  const [product, setProduct] = useState(null);
  const [addingToCart, setAddingToCart] = useState(false);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(`Fetching product with ID: ${id}`);
        const response = await fetch(`${API_BASE_URL}/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        console.log("Product data fetched:", data);
        setProduct(data);
      } catch (err) {
        console.log("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2 className="text-center text-xl mt-20">Product not found</h2>;
  }

  // console.log("Product data:", product);
  // console.log("Cart items:", cart);

  const cartItem = cart.find((item) => item._id === product._id);
  const inCartCount = cartItem ? cartItem.quantity : 0;
  const availableStock = product.inventory - inCartCount;

  // console.log("Cart item for this product:", cartItem);
  // console.log("Available stock:", availableStock);
  // console.log("In cart count:", inCartCount);

  const handleAddToCart = () => {
    if (inCartCount >= product.inventory) {
      console.log("Cannot add more, stock limit reached");
      return;
    }

    console.log("Adding product to cart:", product);
    setAddingToCart(true);

    setTimeout(() => {
      addToCart({ ...product });
      setAddingToCart(false);
    }, 500);
  };


  return (
    <div className="flex flex-col items-center space-y-20 p-12 max-w-3xl mx-auto">
      
      <nav className="w-full tracking-wide pt-24">
        <Link to="/" className="hover:opacity-80 transition ease-in-out">Home</Link> &gt;{" "}
        <Link to="/collection" className="hover:opacity-80 transition ease-in-out">Collection</Link> &gt;{" "}
        <span className="italic">{product.name}</span>
      </nav>
      
      <h1 className="text-4xl tracking-wide">{product.name}</h1>

      <div className="flex flex-col space-y-20 w-full">
      <img
        src={product.image}
        alt={product.name}
        className="h-80 w-80 mx-auto object-cover rounded-lg shadow-md"
      />
       <p className="tracking-tight lg:w-full lg:pl-24 self-center leading-loose">{product.description} Each piece is lovingly crafted from upcycled materials, making every item one-of-a-kind. Expect slight variations in color and texture.</p>
      </div>

    
      <div className="border border-gray-400 p-4 rounded-md text-sm w-3/4 md:w-1/2 mx-auto text-center tracking-wide">
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

      <div className="flex justify-around text-sm tracking-wider">
        <p>{availableStock > 0 ? `In Stock: ${availableStock}` : "Out of Stock"}</p>
        <p>{inCartCount > 0 ? `In Cart: ${inCartCount}` : "Not in Cart"}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          disabled={addingToCart || availableStock <= 0}
          onClick={handleAddToCart}
          className={`flex items-center justify-center space-x-2 ${
            availableStock <= 0
              ? "opacity-50 cursor-not-allowed border-gray-300"
              : "hover:scale-[1.02]"
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
        >
          <button>Buy Now</button>
        </Link>
      </div>

      <p className="text-center text-sm tracking-wide mt-8">New drops every Sunday at 8:00 MST.</p>
        
      </div>
    </div>
  );
};

export default ProductPage;
