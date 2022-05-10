import React from "react";
import rune_icon from "../images/rune_icon.png";

const CartItemCard = (props) => {
  const removeCartItem = (id) => {
    props.setCartItems(props.cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.data.img} alt="img" className="item__image" />
      <div className="item__info">
        <p className="item__name">{props.data.name}</p>
        <div className="item--inline">
          <p className="item__price">{props.data.price}</p>
          <img src={rune_icon} alt="rune" />
        </div>
        <p className="item__description">{props.data.description}</p>
      </div>
      <button
        className="item__remove"
        onClick={() => removeCartItem(props.data.id)}
      >
        X
      </button>
    </div>
  );
};

export default CartItemCard;
