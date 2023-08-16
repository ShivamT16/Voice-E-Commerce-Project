import { useContext, useState } from "react";
import { WishListContext } from "../Contexts/WishListContext";
import { CartContext } from "..";

export const WishList = () => {
  const { handleCartUpdate } = useContext(CartContext);
  const { wishList } = useContext(WishListContext);
  const [remove, setRemove] = useState(wishList);

  const handleDelete = (element) => {
    const Delete = remove.filter(({ id }) => id !== element);
    setRemove(Delete);
  };

  return (
    <div>
      <h2> Here is Your WishList </h2>
      <div className="product">
        {remove.map((item) => {
          const { id, name, price, image } = item;

          return (
            <div key={id} className="product1">
              <img alt="product img" src={image} />
              <ul>{name}</ul>
              <ul>INR:{price}</ul>
              <button onClick={() => handleCartUpdate(item)}>
                Add to Cart
              </button>
              <button onClick={() => handleDelete(id)}> Remove </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
