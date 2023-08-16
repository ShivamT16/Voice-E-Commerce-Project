// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { CartContext, CartProvider } from "./Contexts/CartContext";
import { WishListContext, WishListProvider } from "./Contexts/WishListContext";
import { ProductContext, ProductProvider } from "./Contexts/ProductContext";
import { AddressContext, AddressProvider } from "./Contexts/AddressContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { CartContext };
export { WishListContext };
export { ProductContext };
export { AddressContext };

root.render(
  //<StrictMode>
  <Router>
    <ProductProvider>
      <CartProvider>
        <WishListProvider>
          <AddressProvider>
            <App />
          </AddressProvider>
        </WishListProvider>
      </CartProvider>
    </ProductProvider>
  </Router>
  //</StrictMode>
);
