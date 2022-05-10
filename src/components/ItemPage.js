import React from "react";
import rune_icon from "../images/rune_icon.png";
import uniqid from "uniqid";

const ItemPage = (props) => {
  const closeItem = () => {
    props.changeView(!props.view);
  };

  const addToCart = (data) => {
    props.setCartItems((prevState) => {
      return [...prevState, { ...data, id: uniqid() }];
    });
  };

  return (
    <div className="itempage">
      <div className="itempage__image">
        <img src={props.data.img} alt="armor" className="itempage__img" />
      </div>
      <div className="itempage__info">
        <h1 className="itempage__title">{props.data.name}</h1>
        <div className="item--inline">
          <p className="itempage__text">{props.data.price}</p>
          <img src={rune_icon} alt="rune" className="itempage__rune" />
        </div>
        <p className="itempage__text">{props.data.description}</p>
        <button
          className="itempage__button"
          onClick={() => addToCart(props.data)}
        >
          Add to Cart
        </button>
        <button className="itempage__button" onClick={closeItem}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ItemPage;
