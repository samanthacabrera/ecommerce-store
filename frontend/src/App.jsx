import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext"; 
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



function App() {
  return (
    <CartProvider>
      <div>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/terms" element={<Policies/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
