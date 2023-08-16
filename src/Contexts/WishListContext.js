import { createContext, useState } from "react";

export const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  const handleWishListUpdate = (item) => {
    const findProduct = wishList.find((checkProd) => checkProd.id === item.id);

    if (findProduct) {
      setWishList(
        wishList.map((cartProd) => {
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
      setWishList([...wishList, { ...item, quantity: 1 }]);
    }
  };

  return (
    <WishListContext.Provider value={{ wishList, handleWishListUpdate }}>
      {children}
    </WishListContext.Provider>
  );
}
