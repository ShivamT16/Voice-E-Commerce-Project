import "./styles.css";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { useState, useContext } from "react";

import { DataBase, address } from "./Data/productsDB";
import { Product } from "./Pages/Product";
import { ProductDetail } from "./Pages/ProductDetail";
import { Cart } from "./Pages/Cart";
import { Home } from "./Pages/Home";
import { Wired } from "./Pages/Wired";
import { Wireless } from "./Pages/Wireless";
import { WishList } from "./Pages/WishList";
import { Speaker } from "./Pages/Speaker";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { Addresses } from "./Pages/Addresses";
import { Checkout } from "./Pages/Checkout";
import { ProductContext } from "..";

const searchImg = "https://img.icons8.com/?size=512&id=132&format=png";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const { handleProduct } = useContext(ProductContext);

  return (
    <div className="App">
      <nav>
        <NavLink className="nav1" to="/">
          VOiCE
        </NavLink>
        <div className="src">
          <Link className="navv2" to="/product">
            <input
              className="nav2"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Link>
          <button className="navv3">
            <img className="nav3" src={searchImg} alt="search" />
          </button>
        </div>
        <div className="nav4">
          <NavLink style={{ textDecoration: "none" }} to="/product">
            Explore
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", margin: "2rem" }}
            to="/wishList"
          >
            WishList
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/cart">
            Cart
          </NavLink>
          <NavLink
            to=""
            style={{ textDecoration: "none", margin: "2rem" }}
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </NavLink>
        </div>
      </nav>

      {search &&
        DataBase.filter(
          ({ name, category }) =>
            name.toUpperCase().toLowerCase().includes(search) ||
            category.toUpperCase().toLowerCase().includes(search)
        ).map((item) => {
          const { id, name, category, image } = item;
          return (
            <div
              key={id}
              onClick={() => {
                handleProduct(id);
                setSearch("");
              }}
            >
              <Link className="link" to="/productDetail">
                <img
                  style={{ height: "2rem", width: "2rem", border: "none" }}
                  alt="hh"
                  src={image}
                />
                {name} || ({category})
              </Link>
            </div>
          );
        })}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product products={DataBase} />} />
        <Route
          path="/productDetail"
          element={<ProductDetail products={DataBase} />}
        />
        {isLoggedIn && <Route path="/cart" element={<Cart />} />}
        {!isLoggedIn && <Route path="/cart" element={<Login />} />}
        <Route path="/wired" element={<Wired products={DataBase} />} />
        <Route path="/wireless" element={<Wireless products={DataBase} />} />
        {isLoggedIn && (
          <Route path="/wishList" element={<WishList products={DataBase} />} />
        )}
        {!isLoggedIn && <Route path="/wishList" element={<Login />} />}
        <Route path="/speaker" element={<Speaker products={DataBase} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/address" element={<Addresses data={address} />} />
        <Route path="/checkout" element={<Checkout data={address} />} />
      </Routes>
    </div>
  );
}
