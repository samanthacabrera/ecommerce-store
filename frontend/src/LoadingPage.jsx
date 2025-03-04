import { useEffect, useState } from "react";
import Hero from "./Hero";

const LoadingPage = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 3500); 
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <Hero />
        <div className="absolute top-2/3">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-gray-300 border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
