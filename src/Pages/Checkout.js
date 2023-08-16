import { useContext } from "react";
import { AddressContext } from "..";
import { CartContext } from "..";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Checkout = ({ data }) => {
  const { cart } = useContext(CartContext);
  const { address } = useContext(AddressContext);
  const notify = () => toast.success("Order Placed");
  return (
    <div>
      <h2> Order Summary </h2>
      <div className="check">
        {cart.map((item) => {
          const { id, name, price, image } = item;
          return (
            <div key={id} className="checkout">
              <img className="image" alt="product img" src={image} />
              <div style={{ textAlign: "left" }}>
                <ul>{name}</ul>
                <ul>Price: {price} INR</ul>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <h4 style={{ textAlign: "right" }}>
        Total price:- {cart.reduce((acc, curr) => (acc += curr.price), 0)}
      </h4>
      <div className="check">
        <h3> Selected Address </h3>
        {data
          .filter(({ id }) => id === address)
          .map(({ id, firstName, lastName, locality, state, pincode }) => {
            return (
              <div className="Address1" key={id}>
                <p>
                  {firstName} {lastName},
                </p>
                <p>
                  {locality}, {state}, {pincode}
                </p>
              </div>
            );
          })}
      </div>
      <button onClick={notify}> Place Order </button>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
