import React from "react";

const ItemPage = (props) => {
  const closeItem = () => {
    props.changeView(!props.view);
  };

  return (
    <div className="itempage">
      <div className="itempage__image">
        <img src={props.data.img} alt="armor" className="itempage__img" />
      </div>
      <div className="itempage__info">
        <h1 className="itempage__title">{props.data.name}</h1>
        <p className="itempage__text">{props.data.price}</p>
        <p className="itempage__text">{props.data.description}</p>
        <button className="itempage__button">Add to Cart</button>
        <button className="itempage__button" onClick={closeItem}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ItemPage;
