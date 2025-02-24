import products from "./products.js";

const Home = () => {
    return (
        <div>
            <h1>E-Commerce Store</h1>
             <div>
            <h1>Products</h1>
                <div className="grid grid-cols-3">
                    {products.map((product) => (
                    <div key={product.id} className="border p-4 w-fit ">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;