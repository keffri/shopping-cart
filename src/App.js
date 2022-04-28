import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
