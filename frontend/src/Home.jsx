import { Link } from "react-router-dom";
import products from "./products.js";
import Mission from "./Mission.jsx";
import Policies from "./Policies.jsx";
import EtsyStore from "./EtsyStore.jsx";

const Home = () => {
    return (
        <div className="flex flex-col items-center space-y-12 p-12">
            <div className="text-center pt-20">
                <h1 className="text-4xl tracking-widest">yarn<span className="italic">sara</span></h1>
                <p className="tracking-wide py-4">100% upcycled crocheted yoga accessories</p>   
            </div>
            <h3>Products</h3>
            <div>
                {products.map((product) => (
                 <Link key={product.id} to={`/product/${product.id}`}>
                    <div className="group border p-4 m-2 hover:scale-105 transition duration-300 ease-in-out">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="absolute left-full -top-12 mx-12 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow"
                        />
                    </div>
                 </Link>
                ))}
            </div>
            <Mission/>
            <EtsyStore/>
            <Policies/>
        </div>
    )
}

export default Home;