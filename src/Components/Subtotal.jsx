import React from "react";
import { useStateValue } from "../Stateprovider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length} items):{" "}
        <strong>
          {basket
            ?.reduce((amount, item) => item.price * item.quantity + amount, 0)
            .toFixed(2)}
          .Rs
        </strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button className="checkout_button" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
