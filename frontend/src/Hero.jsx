import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen relative">
            <div className="bg-white/5 backdrop-blur-md py-16 px-20 rounded-xl border border-white/10 shadow-sm mx-4">
                <h1 className="text-4xl tracking-widest mb-4">yarn<span className="italic">sara</span></h1>
                <p className="tracking-wider mb-2">100% upcycled & handcrafted yoga accessories</p>   
            </div>
            <div className="absolute bottom-20 opacity-50">
                <ArrowDown className="text-white w-8 h-8 animate-pulse" />
            </div>
        </div>
    );
};

export default Hero;
