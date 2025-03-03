import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Collection = () => {
  const [products, setProducts] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`); 
      const data = await response.json(); 
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  fetchProducts();
}, []);



  return (
    <div className="px-6 py-20 max-w-5xl mx-auto space-y-20">
      <h1 className="text-6xl text-center italic my-24">Explore Our Collection</h1>
      
      <div className="space-y-20">
        {products.map((product, index) => (
          <div 
            key={product._id}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="relative w-full md:w-1/2 aspect-[3/4] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl tracking-wider uppercase transition-opacity duration-300 hover:opacity-80">
                {product.name}
              </h2>
              <p className="text-lg opacity-60">${product.price.toFixed(2)}</p>
              <p className="text-sm opacity-70 leading-relaxed">{product.description}</p>
              <Link 
                to={`/product/${product._id}`} 
                className="inline-block border p-2 text-sm"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
