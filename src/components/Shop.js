import React, { useState } from "react";
import ItemCard from "./ItemCard";
import armorSets from "../armorSets";

const Shop = () => {
  const [order, setOrder] = useState("alphabeticalAZ");

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

  return (
    <div className="shop">
      <h1 className="shop__title">Shop</h1>
      <select className="shop__select" value={order} onChange={handleChange}>
        <option value="alphabeticalAZ">Alphabetical: A - Z</option>
        <option value="alphabeticalZA">Alphabetical: Z - A</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="priceLowHigh">Price: Low to High</option>
      </select>
      <div className="shop__container">
        {order === "alphabeticalAZ" &&
          armorSets.map((item) => {
            return <ItemCard data={item} key={item.id} />;
          })}
        {order === "alphabeticalZA" &&
          reversedArmors.map((item) => {
            return <ItemCard data={item} key={item.id} />;
          })}
        {order === "priceHighLow" &&
          highToLowArmor.map((item) => {
            return <ItemCard data={item} key={item.id} />;
          })}
        {order === "priceLowHigh" &&
          lowToHighArmors.map((item) => {
            return <ItemCard data={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default Shop;
