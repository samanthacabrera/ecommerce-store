import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-4xl tracking-wide text-center mb-8 pt-24">Order Confirmed!</h1>
      <p className="text-lg">
        Thank you for your purchase. Your order has been successfully placed.
      </p>

      <div className="mt-8 space-x-4">
        <Link 
          to="/" 
          className="border px-6 py-2 rounded-full transition hover:scale-105"
        >
          Back to Homepage
        </Link>
        <Link 
          to="/collection" 
          className="border px-6 py-2 rounded-full transition hover:scale-105"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
