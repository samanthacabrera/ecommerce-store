const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-sm border border-white/10 p-20  mx-4">
                <h1 className="text-4xl tracking-widest">yarn<span className="italic">sara</span></h1>
                <p className="tracking-wider py-4">100% upcycled & handcrafted yoga accessories.</p>   
            </div>
        </div>
    )
}

export default Hero;