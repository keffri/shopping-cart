import React, { useState } from "react";
import ItemCard from "./ItemCard";
import ItemPage from "./ItemPage";
import armorSets from "../armorSets";
import uniqid from "uniqid";

const Shop = (props) => {
  const [order, setOrder] = useState("alphabeticalAZ");

  const [viewingItem, setViewingItem] = useState(false);

  const [clickedItem, setClickedItem] = useState(null);

  const sortLow = (a, b) => {
    if (a.price < b.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    } else {
      return 0;
    }
  };

  const sortHigh = (a, b) => {
    if (a.price < b.price) {
      return 1;
    } else if (a.price > b.price) {
      return -1;
    } else {
      return 0;
    }
  };

  const reversedArmors = armorSets.slice().reverse();

  const lowToHighArmors = armorSets.slice().sort(sortLow);

  const highToLowArmor = armorSets.slice().sort(sortHigh);

  const handleChange = (e) => {
    setOrder(e.target.value);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const viewItem = (item) => {
    if (viewingItem) {
      return;
    }
    setViewingItem(true);
  };

  const handleClick = (data) => {
    viewItem();
    setClickedItem(data);
  };

  return (
    <div className="shop">
      <h1 className="shop__title">Shop</h1>
      <select className="shop__select" value={order} onChange={handleChange}>
        <option value="alphabeticalAZ">Alphabetical: A - Z</option>
        <option value="alphabeticalZA">Alphabetical: Z - A</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="priceLowHigh">Price: Low to High</option>
      </select>
      {viewingItem && (
        <ItemPage
          view={viewingItem}
          changeView={setViewingItem}
          data={clickedItem}
          setCartItems={props.setCartItems}
        />
      )}
      <div className="shop__container">
        {order === "alphabeticalAZ" &&
          armorSets.map((item) => {
            return (
              <ItemCard
                data={item}
                key={uniqid()}
                onClick={() => handleClick(item)}
              />
            );
          })}
        {order === "alphabeticalZA" &&
          reversedArmors.map((item) => {
            return (
              <ItemCard
                data={item}
                key={uniqid()}
                onClick={() => handleClick(item)}
              />
            );
          })}
        {order === "priceHighLow" &&
          highToLowArmor.map((item) => {
            return (
              <ItemCard
                data={item}
                key={uniqid()}
                onClick={() => handleClick(item)}
              />
            );
          })}
        {order === "priceLowHigh" &&
          lowToHighArmors.map((item) => {
            return (
              <ItemCard
                data={item}
                key={uniqid()}
                onClick={() => handleClick(item)}
              />
            );
          })}
      </div>
      <button className="shop__button" onClick={scrollToTop}>
        Return to Top
      </button>
    </div>
  );
};

export default Shop;
