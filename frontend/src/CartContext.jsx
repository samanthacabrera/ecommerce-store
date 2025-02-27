import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

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
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
