import React from "react";
import { useStateValue } from "../Stateprovider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          {" "}
           <strong>{price}</strong>{" "}<small>.Rs</small>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>
      <img className="Product_image" src={image} alt="" />
      <button className="add_to_cart_button" onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
