import { Link } from "react-router-dom";

const ShoppingCart = ({ cart }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-12 p-12">
      <h1 className="text-4xl tracking-wide pt-24">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-200 text-sm">Your cart is empty.</p>
      ) : (
        <div className="space-y-8">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex justify-between items-center border-b border-gray-300 pb-6 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
                <div>
                  <h2 className="text-lg font-medium tracking-wide">{item.name}</h2>
                  <p className="">${item.price.toFixed(2)}</p>
                  <p className="">Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    <div className="flex space-x-6">
        <Link 
          to="/collection" 
          className="border p-2 text-sm"
        >
          Continue Shopping
        </Link>
        <Link 
          to="/" 
          className="border p-2 text-sm"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
