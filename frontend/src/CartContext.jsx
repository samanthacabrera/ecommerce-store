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
    
    const addToCart = (product, color) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id && item.color === color);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id && item.color === color
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, color, quantity: 1 }];
        });
        setTimeLeft(1800);
    };

    const updateQuantity = (productId, color, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId && item.color === color
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const removeFromCart = (productId, color) => {
        setCart((prevCart) => prevCart.filter((item) => !(item.id === productId && item.color === color)));
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
