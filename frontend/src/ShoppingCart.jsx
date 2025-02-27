import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const ShoppingCart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="max-w-2xl mx-auto min-h-screen space-y-12 p-12">
      <h1 className="text-4xl tracking-wide pt-24">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="opacity-50 text-sm">Your cart is empty.</p>
      ) : (
        <div className="space-y-8">
          {cart.map((item) => (
            <div 
              key={`${item.id}-${item.color}`} 
              className="flex justify-between items-center border-b border-gray-300 pb-6 transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex items-center space-x-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
                <div>
                  <h2 className="text-lg font-medium tracking-wide">{item.name}</h2>
                  <p className="text-sm">Color: {item.color.charAt(0).toUpperCase() + item.color.slice(1)}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      className="border px-3 py-1 rounded-full hover:scale-105 transition ease-in-out"
                    >
                      −
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                      disabled={item.quantity >= item.inventory[item.color]} 
                      className="border px-3 py-1 rounded-full hover:scale-105 transition ease-in-out"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id, item.color)}
                className="text-red-600 bg-white rounded px-4 py-1 text-xs opacity-60 hover:opacity-80 transition ease-in-out"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex space-x-6 mt-8">
        <Link to="/collection" className="border p-2 text-sm">Continue Shopping</Link>
        <Link to="/checkout" className="border p-2 text-sm">Checkout</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
