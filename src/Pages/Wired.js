import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "..";
import { WishListContext } from "..";
import { ProductContext } from "..";

export function Wired({ products }) {
  const { handleCartUpdate } = useContext(CartContext);
  const { handleWishListUpdate } = useContext(WishListContext);
  const { handleProduct } = useContext(ProductContext);
  return (
    <div className="product">
      {products
        .filter(({ id, name, price, category }) => category === "wired")
        .map((item) => {
          const { id, name, price, image } = item;
          return (
            <div
              key={id}
              className="product1"
              onClick={() => handleProduct(id)}
            >
              <Link className="link" to="/productDetail">
                <img alt="product img" src={image} />
                <ul>{name} </ul>
                <p> INR: {price}</p>
              </Link>
              <button onClick={() => handleCartUpdate(item)}>
                Add to Cart
              </button>
              <button onClick={() => handleWishListUpdate(item)}>
                Add to Favourite
              </button>
            </div>
          );
        })}
    </div>
  );
}
