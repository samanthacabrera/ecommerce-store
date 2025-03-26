import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const ShoppingCart = () => {
  const { cart, updateQuantity, removeFromCart, timeLeft } = useCart();

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-2xl mx-auto min-h-screen space-y-12 p-12">
      <h1 className="text-4xl tracking-wide pt-24">Shopping Cart</h1>

      {cart.length > 0 && (
        <p className="text-sm tracking-wide">
          Cart expires in: <strong>{formatTime(timeLeft)}</strong>
        </p>
      )}

      {cart.length === 0 ? (
        <p className="opacity-50 text-sm">Your cart is empty.</p>
      ) : (
        <div className="">
          {cart.map((item) => (
            <div 
              key={`${item._id}`} 
              className="flex justify-between items-center border-y border-gray-300 py-12 px-2 rounded-sm transition-all duration-300 hover:bg-white/5"
            >
              <div className="flex items-center space-x-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
                <div className="flex flex-col items-start">
                  <h3 className="text-lg font-medium tracking-wide">{item.name}</h3>
                  <p className="">${item.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <button 
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      className="border px-3 py-1 rounded-full hover:scale-105 transition ease-in-out"
                    >
                      −
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      disabled={item.quantity >= item.inventory} 
                      className="border px-3 py-1 rounded-full hover:scale-105 transition ease-in-out"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item._id,)}
                className="text-red-700/80"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex space-x-6 mt-8">
        <Link to="/collection" className="button">Continue Shopping</Link>
        <Link to="/checkout" className="button">Checkout</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
