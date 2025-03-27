import { Link } from "react-router-dom";
import Footer from "./Footer";

const Collection = ({products}) => {
  return (
    <div>
      <div className="pt-20 max-w-4xl mx-8 lg:mx-auto space-y-20">
        <h1 className="text-6xl text-center italic my-24">Explore Our Collection</h1>
        
        <div className="grid gap-40 py-20">
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
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-4xl">
                  {product.name}
                </h3>
                <p className="text-lg opacity-80">${product.price.toFixed(2)}</p>
                <p className="text-sm opacity-80 md:max-w-sm mx-auto">{product.description}</p>
                <Link 
                  to={`/product/${product._id}`} 
                  className="button"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Collection;
