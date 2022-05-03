import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1>Elden Bling</h1>
      </div>

      <div className="navbar__linksContainer">
        <ul className="navbar__links">
          <li className="navbar__link">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__link">
            <Link to="/shop">Shop</Link>
          </li>
        </ul>

        <Link className="navbar__link" to="/cart">
          Cart ({props.cartItems.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
