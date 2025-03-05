import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import LoadingPage from "./LoadingPage";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Home from "./Home";
import Collection from "./Collection";
import ProductPage from "./ProductPage";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";
import Policies from "./Policies";
import PrivacyPolicy from "./Privacy";
import Footer from "./Footer";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <CartProvider>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/collection" element={<Collection products={products} />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/terms" element={<Policies />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </div>
      )}
    </CartProvider>
  );
}

export default App;
