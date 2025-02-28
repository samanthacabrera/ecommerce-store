import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-4xl tracking-wide text-center mb-8 pt-24">Order Confirmed!</h1>
      <div className="max-w-2xl space-y-4 tracking-wide leading-loose">
        <p>
          Thank you for your purchase! Your order has been successfully placed, and we’re preparing it with care.
        </p>
        <p>
          You’ll receive an email confirmation with tracking details once your order ships.
        </p>
      </div>

      <div className="mt-8 space-x-4">
        <Link 
          to="/" 
          className="border px-4 py-2 text-sm transition hover:scale-105"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
