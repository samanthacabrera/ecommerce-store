import { Link } from "react-router-dom";
import products from "./products.js";

const Home = () => {
    return (
        <div className="flex flex-col items-center space-y-12 p-12">
            <h1 className="text-2xl tracking-widest">yarn<span className="italic">sara</span></h1>
            <p>100% upcycled crocheted yoga accessories</p>   
            <h3>Products</h3>
            <div>
                {products.map((product) => (
                 <Link key={product.id} to={`/product/${product.id}`}>
                    <div className="border p-4 m-2 hover:scale-105 transition duration-300 ease-in-out">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                 </Link>
                ))}
            </div>
        </div>
    )
}

export default Home;