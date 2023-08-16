import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [state, setState] = useState(false);
  const [state1, setState1] = useState();
  const [login, setLogin] = useState(false);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleChange1 = (e) => {
    setState1(e.target.value);
  };

  return (
    <div className="login">
      <h2> Login Page </h2>
      <div className="login1">
        {state} {state1}
        <p>
          Email-{" "}
          <input type="text" onChange={handleChange} placeholder={state} />
        </p>
        <p>
          Password-{" "}
          <input type="text" onChange={handleChange1} placeholder={state1} />
        </p>
        <button>Login</button>
        <Link className="link" to="/signup">
          <p> Create New Account > </p>
        </Link>
      </div>
    </div>
  );
};
