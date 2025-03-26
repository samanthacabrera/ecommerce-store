import { createContext, useContext, useEffect, useState} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [timeLeft, setTimeLeft] = useState(1800);

    useEffect(() => {
        if (cart.length === 0) {
            setTimeLeft(1800); 
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearCart(); 
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [cart]);
    
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item._id === product._id); 
            if (existingItem) {
                return prevCart.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        setTimeLeft(1800);
    };

    const updateQuantity = (productId, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === productId  
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    };

    const clearCart = () => {
        setCart([]);
        setTimeLeft(1800);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, timeLeft }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
