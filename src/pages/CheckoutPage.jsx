import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import "./CheckoutPage.css";

const DELIVERY_FEE = 150;

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
  });

  const deliveryFee = deliveryMethod === "delivery" ? DELIVERY_FEE : 0;
  const total = cartTotal + deliveryFee;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const generatedId = `HA-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(generatedId);
    setOrderPlaced(true);
    clearCart();
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div>
        <Navbar />
        <section className="checkout-page">
          <div className="checkout-page__inner">
            <div className="checkout-empty">
              <p>Your cart is empty — add something before checking out.</p>
              <Link to="/catalog" className="checkout-empty__cta">
                Browse medicines
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div>
        <Navbar />
        <section className="checkout-page">
          <div className="checkout-page__inner">
            <div className="order-confirmed">
              <div className="order-confirmed__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h1 className="order-confirmed__title">Order confirmed</h1>
              <p className="order-confirmed__text">
                Your order <strong>#{orderNumber}</strong> has been placed
                successfully. A pharmacist will review it shortly.
              </p>
              <div className="order-confirmed__actions">
                <Link to="/catalog" className="order-confirmed__cta">
                  Continue shopping
                </Link>
                <button
                  className="order-confirmed__cta order-confirmed__cta--outline"
                  onClick={() => navigate("/")}
                >
                  Back to home
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <section className="checkout-page">
        <div className="checkout-page__inner">
          <div className="checkout-page__heading">
            <span className="checkout-page__eyebrow">Checkout</span>
            <h1 className="checkout-page__title">Confirm your order</h1>
          </div>

          <form className="checkout-page__layout" onSubmit={handlePlaceOrder}>
            <div className="checkout-page__form">
              <div className="checkout-section">
                <h3 className="checkout-section__title">Delivery details</h3>

                <div className="checkout-field-row">
                  <div className="checkout-field">
                    <label>Full name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="checkout-field">
                    <label>Phone number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="03XX-XXXXXXX"
                      required
                    />
                  </div>
                </div>

                <div className="checkout-field">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="House / street / area"
                    required
                    disabled={deliveryMethod === "pickup"}
                  />
                </div>

                <div className="checkout-field">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    disabled={deliveryMethod === "pickup"}
                  />
                </div>
              </div>

              <div className="checkout-section">
                <h3 className="checkout-section__title">Delivery method</h3>
                <div className="checkout-options">
                  <label
                    className={`checkout-option ${
                      deliveryMethod === "delivery" ? "checkout-option--active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="deliveryMethod"
                      checked={deliveryMethod === "delivery"}
                      onChange={() => setDeliveryMethod("delivery")}
                    />
                    <div>
                      <span className="checkout-option__title">Home delivery</span>
                      <span className="checkout-option__subtitle">
                        Arrives within 30–60 min · Rs. {DELIVERY_FEE}
                      </span>
                    </div>
                  </label>

                  <label
                    className={`checkout-option ${
                      deliveryMethod === "pickup" ? "checkout-option--active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="deliveryMethod"
                      checked={deliveryMethod === "pickup"}
                      onChange={() => setDeliveryMethod("pickup")}
                    />
                    <div>
                      <span className="checkout-option__title">Branch pickup</span>
                      <span className="checkout-option__subtitle">
                        Collect from nearest branch · Free
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="checkout-section">
                <h3 className="checkout-section__title">Payment method</h3>
                <div className="checkout-options">
                  <label
                    className={`checkout-option ${
                      paymentMethod === "cod" ? "checkout-option--active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />
                    <div>
                      <span className="checkout-option__title">Cash on Delivery</span>
                      <span className="checkout-option__subtitle">
                        Pay when your order arrives
                      </span>
                    </div>
                  </label>

                  <label
                    className={`checkout-option ${
                      paymentMethod === "card" ? "checkout-option--active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                    />
                    <div>
                      <span className="checkout-option__title">Debit / Credit Card</span>
                      <span className="checkout-option__subtitle">
                        Visa, Mastercard supported
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="checkout-summary">
              <h3 className="checkout-summary__title">Order summary</h3>

              <div className="checkout-summary__items">
                {cartItems.map((item) => (
                  <div className="checkout-summary__item" key={item.id}>
                    <span>
                      {item.name} <span className="checkout-summary__qty">× {item.quantity}</span>
                    </span>
                    <span>Rs. {item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="checkout-summary__divider" />

              <div className="checkout-summary__row">
                <span>Subtotal</span>
                <span>Rs. {cartTotal}</span>
              </div>
              <div className="checkout-summary__row">
                <span>Delivery fee</span>
                <span>{deliveryFee === 0 ? "Free" : `Rs. ${deliveryFee}`}</span>
              </div>

              <div className="checkout-summary__divider" />

              <div className="checkout-summary__row checkout-summary__row--total">
                <span>Total</span>
                <span>Rs. {total}</span>
              </div>

              <button type="submit" className="checkout-summary__place-order">
                Place order
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}