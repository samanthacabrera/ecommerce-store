import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import handleCheckout from "./StripeCheckout";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (cart.length === 0) return alert("Your cart is empty.");
      console.log("Cart contents before checkout:", cart);
      await handleCheckout(cart);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-12">
      <h1 className="text-4xl tracking-wide text-center mb-8 pt-24">Checkout</h1>

      <div>
        <h2 className="text-xl mb-8">Order Summary</h2>
        {cart.length === 0 ? (
          <p className="opacity-50">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={`${item.id}-${item.color}`} className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <h3 className="text-lg">{item.name}</h3>
                    <p className="text-sm">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="border-t pt-4 mt-4 flex justify-between text-lg">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-xl">Shipping Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-3 rounded-md w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-3 rounded-md w-full"
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Street Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="border p-3 rounded-md w-full"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="border p-3 rounded-md w-full"
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={formData.zip}
            onChange={handleChange}
            required
            className="border p-3 rounded-md w-full"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
            className="border p-3 rounded-md w-full"
          />
        </div>

        <button
              type="submit"
              className="w-full bg-white text-[lightslategray] py-3 rounded-md text-lg hover:bg-transparent hover:border hover:text-white transition-all duration-300 ease-in-out"
          >
              Checkout with Stripe
          </button>
      </form>
    </div>
  );
};

export default Checkout;
