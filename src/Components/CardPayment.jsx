import React, { useState } from "react";
import { useStateValue } from "../Stateprovider";
import { Link, Navigate } from "react-router-dom";

function CardPayment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [cardNumber, setCardNumber] = useState("Card ending in 0242");
  const [expiry, setExpiry] = useState("Expires 03/2");

  return (
    <div className="payment-gateway-container">
      <div className="payment-gateway">
        <div className="payment-gateway-header">
          <h1 className="payment-gateway-title">Payment Gateway</h1>
        </div>

        <div className="payment-gateway-card-details">
          <svg className="payment-gateway-card-icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13 2C8.582 2 5 5.582 5 10v4c0 4.418 3.582 8 8 8 4.418 0 8-3.582 8-8V9c0-1.654-1.346-3-3-3h-5zm2 5h3c.565 0 1 .435 1 1v3c0 .565-.435 1-1 1h-3v3.586l-2-2V11h-3c-.565 0-1-.435-1-1V7c0-.565.435-1 1-1h3V2.414l2 2V7zM13 4h-3v2h3V4z"
            ></path>
          </svg>

          <span className="payment-gateway-card">
            <input
              type="text"
              className="payment-gateway-card-inputs"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </span>

          <span className="payment-gateway-card">
            <input
              type="text"
              className="payment-gateway-card-inputs expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </span>
        </div>

        <div className="payment-gateway-card-type">
          <img
            className="payment-gateway-card-image"
            src="https://img.icons8.com/color/452/visa.png"
            alt="Visa"
          />

          <div className="payment-gateway-card-label">
            <select className="payment-gateway-card-select">
              <option value="credit-debit">Credit / Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
        </div>

        <div className="payment-gateway-actions">
          <Link to={"/Payment"}>
            <button className="payment-gateway-button cancel">
              Cancel Payment
            </button>
          </Link>

          <Link to="/orders">
            <button className="payment-gateway-button buy">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardPayment;
