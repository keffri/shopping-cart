import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1>Elden Bling</h1>
      </div>

      <div className="navbar__linksContainer">
        <ul className="navbar__links">
          <li className="navbar__link">
            <a href="/">Home</a>
          </li>
          <li className="navbar__link">
            <a href="/shop">Shop</a>
          </li>
          <li className="navbar__link">
            <a href="/about">About</a>
          </li>
        </ul>

        <a className="navbar__link" href="/cart">
          Cart (#)
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
