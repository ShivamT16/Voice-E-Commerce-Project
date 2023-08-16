import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="login">
      <h2> SignUp </h2>
      <div className="login1">
        <p>
          First Name- <input type="text" />
        </p>
        <p>
          Last Name- <input type="text" />
        </p>
        <p>
          Email- <input type="text" />
        </p>
        <p>
          Password- <input type="text" />
        </p>
        <button> Create New Account </button>
        <Link className="link" to="/cart">
          <p> Already have an Account > </p>
        </Link>
      </div>
    </div>
  );
};
