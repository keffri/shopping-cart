import React from "react";

const ItemCard = (props) => {
  return (
    <div className="card">
      <img src={props.data.img} alt="img" className="item__image" />
      <div className="item__info">
        <p className="item__name">{props.data.name}</p>
        <p className="item__price">{props.data.price} Runes</p>
        <p className="item__description">{props.data.description}</p>
      </div>
    </div>
  );
};

export default ItemCard;
