import React from "react";
import { useStateValue } from "../Stateprovider";

function CheckoutProduct({ id, image, title, price, rating, quantity }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const increaseQuantity = () => {
    // Increase the quantity in the basket
    dispatch({
      type: "INCREASE_QUANTITY",
      id: id,
    });
  };

  const decreaseQuantity = () => {
    // Decrease the quantity in the basket
    dispatch({
      type: "DECREASE_QUANTITY",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct_image">
        <img src={image} alt="" />
      </div>

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <strong>{price * quantity}</strong>
          <small> .Rs</small>
        </p>

        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>

        <div className="checkoutProduct_quantity">
          <button
            className="quantity_button"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button className="quantity_button" onClick={increaseQuantity}>
            +
          </button>
        </div>

        <button className="remove_button" onClick={removeFromBasket}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
