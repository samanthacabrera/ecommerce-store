import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-screen flex justify-between items-center p-4 backdrop-blur-md bg-white/5 z-50 border-b">
            <Link to="/" className="text-xl tracking-widest">
                yarn<span className="italic">sara</span>
            </Link>

            <div className="flex space-x-6">
                <Link to="/" className="hover:scale-105 transition duration-300 ease-in-out">Home</Link>
                <Link to="/collection" className="hover:scale-105 transition duration-300 ease-in-out">Collection</Link>
                <Link to="/" className="hover:scale-105 transition duration-300 ease-in-out">About</Link>
            </div>
        </nav>
    );
};

export default Navbar;
