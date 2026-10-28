import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        console.log("Pizza recibida:", pizza);
        setCart((currentCart) => {
            const pizzaExistente = currentCart.find(
                (item) => item.id === pizza.id
            );
            if (pizzaExistente) {
                return currentCart.map((item) =>
                    item.id === pizza.id
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }
            return [...currentCart, { ...pizza, count: 1 }];
        });
    };

    const removeFromCart = (pizzaId) => {
        setCart((currentCart) =>
            currentCart.filter((item) => item.id !== pizzaId)
        );
    };

    const increaseQuantity = (pizzaId) => {
        setCart((currentCart) =>
            currentCart.map((item) =>
                item.id === pizzaId
                    ? { ...item, count: item.count + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (pizzaId) => {
        setCart((currentCart) =>
            currentCart
                .map((item) =>
                    item.id === pizzaId
                        ? { ...item, count: item.count - 1 }
                        : item
                )
                .filter((item) => item.count > 0)
        );
    };

    const total = cart.reduce(
        (acumulador, item) => acumulador + item.price * item.count,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};