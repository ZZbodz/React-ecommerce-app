import React from "react";
import { useStateValue } from "../Stateprovider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  // Calculate the total price including the quantity of each item
  const totalPrice = basket.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to={"/checkout"}>{basket?.length} items</Link>)
        </h1>
        {/* Payment section - delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>IIT Bhilai</p>
            <p>Bhilai, chhattisgarh</p>
          </div>
        </div>
        {/* Payment section - review items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {/* Products */}
            {basket.map((item) => (
              <CheckoutProduct
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
        {/* Payment section - total amount */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Total amount ({basket?.length} items):</h3>
          </div>
          <div className="price">
            <h3>
              <strong>{totalPrice.toFixed(2)} .Rs</strong>
            </h3>
          </div>
        </div>
        {/* Payment section - payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* Payment method */}
            <Link to={"/payment/card-details"}>
              <button className="payment_button">Pay with Card</button>
            </Link>
            <button className="payment_button">Pay with Cash</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
