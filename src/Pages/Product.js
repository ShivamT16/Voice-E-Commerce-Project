import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "..";
import { WishListContext } from "..";
import { ProductContext } from "..";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Product({ products }) {
  const { handleCartUpdate } = useContext(CartContext);
  const { handleWishListUpdate } = useContext(WishListContext);
  const { handleProduct } = useContext(ProductContext);

  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const notify = () => toast.success("Added to Favourites");
  const notify1 = () => toast.success("Added to Cart");

  useEffect(() => {
    Mainfunction();
  }, []);

  const Mainfunction = () => {
    setLoading(true);
    setTimeout(() => {
      setState(products);
      setLoading(false);
    }, 1000);
  };

  const handleClick = (e) => {
    setState(
      products.filter(({ id, category }) => category === e.target.value)
    );
  };
  const handleTick = () => {
    const Trend = [...state].sort((a, b) => a.price - b.price);
    setState(Trend);
  };
  const handleTickk = () => {
    const Trend = [...state].sort((a, b) => b.price - a.price);
    setState(Trend);
  };
  const handleChange = (e) => {
    setState(products.filter(({ id, rating }) => rating === e.target.value));
  };

  return (
    <div className="filter">
      <div className="filter1">
        <button onClick={() => setState(products)}> Clear Filters </button>
        <p className="filter2">
          <strong>Price </strong>
        </p>
        <p className="filter2">
          <input type="radio" name="price" onClick={handleTick} />
          Low to High
        </p>
        <p className="filter2">
          <input type="radio" name="price" onClick={handleTickk} />
          High to Low
        </p>
        <br></br>
        <p className="filter2">
          <strong>Category</strong>
        </p>
        <p className="filter2">
          <input
            type="checkbox"
            value="wired"
            name="category"
            onClick={handleClick}
          />
          Wired
        </p>
        <p className="filter2">
          <input
            type="checkbox"
            value="wireless"
            name="category"
            onClick={handleClick}
          />
          Wireless
        </p>
        <p className="filter2">
          <input
            type="checkbox"
            value="speaker"
            name="category"
            onClick={handleClick}
          />
          Speakers
        </p>
        <p className="filter2">
          <strong>Rating </strong>
        </p>
        <p>
          1
          <input type="range" min="1" max="5" onChange={handleChange} />5
        </p>
      </div>
      {loading && "loading..."}
      <div className="product">
        {state.map((item) => {
          const { id, name, price, image, rating } = item;
          return (
            <div
              key={id}
              className="product1"
              onClick={() => handleProduct(id)}
            >
              <Link className="link" to="/productDetail">
                <img alt="product img" src={image} />
                <ul>{name}</ul>
                <p>
                  INR:{price} {rating}
                </p>
              </Link>
              <button
                onClick={() => {
                  handleCartUpdate(item);
                  notify1();
                }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  handleWishListUpdate(item);
                  notify();
                }}
              >
                Add to Favourite
              </button>
              <ToastContainer autoClose={2000} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
