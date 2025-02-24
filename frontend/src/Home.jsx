import products from "./products.js";

const Home = () => {
    return (
        <div className="flex flex-col items-center space-y-12">
            <h1 className="text-2xl tracking-widest pt-12">yarn<span className="italic">sara</span></h1>
            <p>100% upcycled crocheted yoga accessories</p>   
            <h3>Products</h3>
            <div>
                {products.map((product) => (
                <div key={product.id} className="border p-4 m-2">
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Home;