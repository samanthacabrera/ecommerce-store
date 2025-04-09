import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Home from "./Home";
import Inventory from "./Inventory";
import ProductPage from "./ProductPage";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";
import Policies from "./Policies";
import PrivacyPolicy from "./Privacy";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            // const apiUrl = `${API_BASE_URL}/api/products`;
            // console.log('Attempting to fetch from:', apiUrl);
            
            // const response = await fetch(apiUrl, {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     }
            // });
            
            const response = await fetch('/products.json');

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }
            
            const data = await response.json();
            console.log('Products fetched successfully:', data);
            setProducts(data);
        } catch (error) {
            console.error('Detailed fetch error:', {
                message: error.message,
                name: error.name,
                stack: error.stack
            });
        }
    };

    fetchProducts();
}, []);

  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/inventory" element={<Inventory products={products} />} />
        <Route path="/product/:id" element={<ProductPage products={products} />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/terms" element={<Policies />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
