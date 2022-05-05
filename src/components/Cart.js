import React from "react";
import ItemCard from "./ItemCard";
import rune_icon from "../images/rune_icon.png";

const Cart = (props) => {
  return (
    <div className="cart">
      <h1 className="cart__title">Cart</h1>
      <div className="cart__container">
        <div className="cart__items">
          {props.cartItems.map((item) => {
            return <ItemCard data={item} key={item.id} />;
          })}
        </div>
        <div className="cart__info">
          <ul>
            {props.cartItems.map((item) => {
              return (
                <li className="cart--text">
                  {item.name} | {item.price} <img src={rune_icon} alt="rune" />
                </li>
              );
            })}
          </ul>
          <h2 className="cart--total">
            Total: {props.cartItems.reduce((sum, i) => sum + i.price, 0)}{" "}
            <img src={rune_icon} alt="rune" />
          </h2>
          <button className="cart--checkOut">Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
