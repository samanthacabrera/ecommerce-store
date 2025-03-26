import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar = () => {
    const { cart } = useCart();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    return (
        <nav className="fixed top-0 left-0 w-screen flex justify-between items-center p-4 backdrop-blur-md bg-white/5 z-50 border-b">
            <Link to="/" className="text-xl tracking-widest">
                <h1>yarn<span className="italic">sara</span></h1>
            </Link>

            <div className="flex space-x-6">
                <Link to="/" className="hover:scale-105 transition duration-300 ease-in-out">Home</Link>
                <Link to="/collection" className="hover:scale-105 transition duration-300 ease-in-out">Collection</Link>
                <Link to="/cart" className="hover:scale-105 transition duration-300 ease-in-out">Cart ({cartCount})</Link>
            </div>
        </nav>
    );
};

export default Navbar;
