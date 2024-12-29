import React, { useContext, useState } from "react";
import { CarShoppingContext } from "../components/CarShoppingContext";
import "./Checkout.css";
import { useNavigate } from "react-router";
import NavBar from "../components/NavBar/NavBar";

const Checkout = () => {
  const { addToCar } = useContext(CarShoppingContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const totalAmount = addToCar.reduce((total, item) => total + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate("/home");
    }, 3000);
  };

  return (
    <div className="checkout">
      <NavBar />
      <h1>Checkout Page</h1>
      <div className="checkout__summary">
        <h2>Order Summary</h2>
        <ul>
          {addToCar.map((item, index) => (
            <li key={index} className="checkout__item">
              <img src={item.imageURL} alt={item.title} className="checkout__item-image" />
              <div className="checkout__item-details">
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <p>${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
      </div>
      <div className="checkout__payment">
        <h2>Payment Options</h2>
        <form onSubmit={handleSubmit}>
          <div className="checkout__payment-option">
            <input type="radio" id="credit-card" name="payment" value="credit-card" />
            <label htmlFor="credit-card">Credit Card</label>
          </div>
          <div className="checkout__payment-option">
            <input type="radio" id="paypal" name="payment" value="paypal" />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <div className="checkout__payment-option">
            <input type="radio" id="bank-transfer" name="payment" value="bank-transfer" />
            <label htmlFor="bank-transfer">Bank Transfer</label>
          </div>
          <button type="submit" className="checkout__submit-button">Place Order</button>
        </form>
      </div>
      {showModal && (
        <div className="checkout__modal">
          <div className="checkout__modal-content">
            <h2>Thank you for your purchase!</h2>
            <p>You will be redirected to the home page shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
