import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (item) => {
    const findProduct = cart.find((checkProd) => checkProd.id === item.id);

    if (findProduct) {
      setCart(
        cart.map((cartProd) => {
          if (cartProd === item.id) {
            return { ...cartProd, quantity: cartProd.quantity + 1 };
          } else {
            return {
              ...cartProd
            };
          }
        })
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, handleCartUpdate }}>
      {children}
    </CartContext.Provider>
  );
}
