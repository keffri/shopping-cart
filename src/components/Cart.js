import React from "react";
import CartItemCard from "./CartItemCard";
import rune_icon from "../images/rune_icon.png";
import uniqid from "uniqid";

const Cart = (props) => {
  return (
    <div className="cart">
      <h1 className="cart__title">Cart</h1>
      <div className="cart__container">
        <div className="cart__items">
          {props.cartItems.map((item) => {
            return (
              <CartItemCard
                data={item}
                key={uniqid()}
                cartItems={props.cartItems}
                setCartItems={props.setCartItems}
              />
            );
          })}
        </div>
        <div className="cart__info">
          <ul>
            {props.cartItems.map((item) => {
              return (
                <li className="cart--text" key={uniqid()}>
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
