import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
