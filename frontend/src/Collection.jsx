import { Link } from "react-router-dom";
import products from "./products";

const Collection = () => {
  return (
    <div className="px-6 py-20 max-w-5xl mx-auto space-y-20">
      <h1 className="text-4xl text-center tracking-wide uppercase">Explore Our Collection</h1>
      
      <div className="space-y-20">
        {products.map((product, index) => (
          <div 
            key={product.id} 
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
                to={`/product/${product.id}`} 
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
