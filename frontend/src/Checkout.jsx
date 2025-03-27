import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import handleCheckout from "./StripeCheckout";
import Footer from "./Footer";

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
    <div className="max-w-4xl mx-auto pt-12">
      <h1 className="text-4xl tracking-wide text-center mb-8 pt-24">Checkout</h1>

      <div>
        <h3 className="text-xl pt-4">Order Summary</h3>
        {cart.length === 0 ? (
          <p className="opacity-50">Your cart is empty.</p>
        ) : (
          <ul className="space-y-12 py-16">
            {cart.map((item) => (
              <li key={`${item.id}-${item.color}`} className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg">{item.name}</h3>
                    <p className="text-sm">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="border-t py-12 flex justify-between text-lg">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <form className="flex flex-col items-center justify-center my-40 py-20 text-[lightslategray] bg-white/90 rounded-sm" onSubmit={handleSubmit}>
        <h3 className="text-2xl md:text-4xl my-6">Shipping Details</h3>

        <div className="flex flex-col space-y-6 py-12">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full text-center border-b border-neutral-300 pb-2 text-neutral-600 placeholder-neutral-400 bg-transparent focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full text-center border-b border-neutral-300 pb-2 text-neutral-600 placeholder-neutral-400 bg-transparent focus:outline-none"
        />
        <input
          type="text"
          name="address"
          placeholder="Street Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full text-center border-b border-neutral-300 pb-2 text-neutral-600 placeholder-neutral-400 bg-transparent focus:outline-none"
        />  
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full text-center border-b border-neutral-300 pb-2 text-neutral-600 placeholder-neutral-400 bg-transparent focus:outline-none"
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={formData.zip}
          onChange={handleChange}
          required
          className="w-full text-center border-b border-neutral-300 pb-2 text-neutral-600 placeholder-neutral-400 bg-transparent focus:outline-none"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
          className="w-full text-center border-b border-neutral-300 pb-2 text-neutral-600 placeholder-neutral-400 bg-transparent focus:outline-none"
          />
        </div>
        <button 
          type="submit" 
          className="w-fit px-4 py-1 rounded-sm bg-[lightslategray] text-lg text-white/90 border border-opacity-0 hover:text-[lightslategray] hover:bg-transparent hover:border-opacity-100 hover:border-[lightslategray] transition-all duration-300"
        >
          Checkout with Stripe
        </button>
      </form>
      <Footer/>
    </div>
  );
};

export default Checkout;
