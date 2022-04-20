import React from "react";
import rune_icon from "../images/rune_icon.png";

const ItemCard = (props) => {
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
    </div>
  );
};

export default ItemCard;
