import React from "react";

const CheckOutPage = (props) => {
  const closeCheckOut = () => {
    props.setCheckingOut(false);
  };

  return (
    <div className="checkOut">
      <h1 className="checkOut__title">Check Out</h1>
      <p>Thank you for your purchases!</p>
      <button className="checkOut--btn" onClick={closeCheckOut}>
        Close
      </button>
    </div>
  );
};

export default CheckOutPage;
