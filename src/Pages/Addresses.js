import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AddressContext } from "..";

export const Addresses = ({ data }) => {
  const [state, setState] = useState(data);
  const { handleAddress } = useContext(AddressContext);

  const handleDelete = (element) => {
    const Delete = state.filter(({ id }) => id !== element);
    setState(Delete);
  };

  return (
    <div className="address">
      <h2>Select Address</h2>
      <div className="Address">
        {state.map((add) => {
          const { id, firstName, lastName, locality, state, pincode } = add;
          return (
            <div
              className="Address1"
              key={id}
              onClick={() => handleAddress(id)}
            >
              <input type="radio" name="address" />
              <p>
                {firstName} {lastName},
              </p>
              <p>
                {locality}, {state}, {pincode}
              </p>
              <button className="Addbtn" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <br></br>
      <Link className="link" to="/checkout">
        <button>
          CheckOut <strong> >>> </strong>
        </button>
      </Link>
    </div>
  );
};
