import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = () => {
  return (
    <div className="checkoutProduct">
      <img src="" alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title"></p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>30.00</strong>
        </p>

        <div className="checkoutProduct__rating">⭐⭐⭐</div>

        <button>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
