import React from "react";
import Subtotal from "./Subtotal";
import CheckkoutProduct from "./CheckoutProduct";
import { useStateValue } from "../Stateprovider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://assets1.csnews.com/files/styles/hero/s3/2018-07/Amazon%20Prime%20Day%202018_hero_072318.jpg?itok=Iw0QqmJQ"
          alt=""
        />
        <div>
          <h3> Hello, {user?.email}</h3>
          <h2 className="chekout_title"> Your shopping basket</h2>
          {basket.map((item) => (
            <CheckkoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
