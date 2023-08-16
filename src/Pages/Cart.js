import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "..";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const [remove, setRemove] = useState(cart);

  const handleDelete = (element) => {
    const Delete = remove.filter(({ id }) => id !== element);
    setRemove(Delete);
  };

  return (
    <div>
      <h3> Total Item In The Cart - {remove.length} </h3>
      <div className="product">
        {remove.map((item) => {
          const { id, name, price, image } = item;

          return (
            <div key={id} className="product1">
              <img alt="product img" src={image} />
              <ul>{name}</ul>
              <ul>INR:{price}</ul>

              <button onClick={() => handleDelete(id)}> Remove </button>
            </div>
          );
        })}
      </div>
      <h3>
        Total price:- {remove.reduce((acc, curr) => (acc += curr.price), 0)}
      </h3>
      <Link className="link" to="/address">
        <button>Next</button>
      </Link>
    </div>
  );
};
