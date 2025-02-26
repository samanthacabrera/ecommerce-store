import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Collection from "./Collection";
import ProductPage from "./ProductPage";


function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
    </div>
  )
}

export default App
