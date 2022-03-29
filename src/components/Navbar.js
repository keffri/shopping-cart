import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a className="navbar__link" href="/">
          Shoppy
        </a>
      </div>

      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="/">Home</a>
        </li>
        <li className="navbar__link">
          <a href="/shop">Shop</a>
        </li>
      </ul>
      <div className="navbar__cart">
        <a className="navbar__link" href="/cart">
          Cart
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
