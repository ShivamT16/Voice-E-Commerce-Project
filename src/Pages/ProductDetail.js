import { useContext, useState } from "react";

import { CartContext } from "..";
import { WishListContext } from "..";
import { ProductContext } from "..";

export const ProductDetail = ({ products }) => {
  const { handleCartUpdate } = useContext(CartContext);
  const { handleWishListUpdate } = useContext(WishListContext);
  const { product } = useContext(ProductContext);

  return (
    <div>
      {products
        .filter(({ id }) => id === product)
        .map((item) => {
          const { id, name, price, description, image } = item;
          return (
            <div className="detaill">
              <div key={id} className="detail">
                <div className="detail1">
                  <img alt="product img" src={image} />
                  <ul className="pname">{name}</ul>
                  <p>INR: {price}</p>
                </div>
                <div className="detail2">
                  <p> {description} </p>

                  <button onClick={() => handleCartUpdate(item)}>
                    Add to Cart
                  </button>
                  <button onClick={() => handleWishListUpdate(item)}>
                    Add to Favourite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
