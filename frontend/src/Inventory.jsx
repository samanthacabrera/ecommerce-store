import { Link } from "react-router-dom";
import Footer from "./Footer";

const Inventory = ({ products }) => {
  return (
    <div className="max-w-4xl mx-auto pt-40">
      <div className="">
       
        <h1 className="text-4xl italic text-center mb-8">See What's In Stock</h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 py-12">
        {products.map((product) => (
          <div 
            key={product._id} 
            className="relative group"
          >
            <div className="relative w-full h-[500px] overflow-hidden rounded-xl border border-white/10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[102%]"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full text-neutral-600 bg-white rounded-b-xl bg-opacity-80 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-2xl mb-2">{product.name}</h3>
              {/* <p>${product.price.toFixed(2)}</p> */}
              <p className="mb-2">{product.description}</p>
              {/* <p>In Stock: {product.inventory}</p> */}
              <Link
                to={`/product/${product._id}`}
                className=""
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Inventory;
