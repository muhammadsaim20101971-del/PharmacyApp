import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import "./CartPage.css";

const DELIVERY_FEE = 150;

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  const isEmpty = cartItems.length === 0;
  const total = isEmpty ? 0 : cartTotal + DELIVERY_FEE;

  return (
    <div>
      <Navbar />

      <section className="cart-page">
        <div className="cart-page__inner">
          <div className="cart-page__heading">
            <span className="cart-page__eyebrow">Your cart</span>
            <h1 className="cart-page__title">
              {isEmpty ? "Your cart is empty" : "Review your order"}
            </h1>
          </div>

          {isEmpty ? (
            <div className="cart-page__empty">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
              </svg>
              <p className="cart-page__empty-text">
                You haven't added anything yet. Browse the catalog to find
                what you need.
              </p>
              <Link to="/catalog" className="cart-page__empty-cta">
                Browse medicines
              </Link>
            </div>
          ) : (
            <div className="cart-page__layout">
              <div className="cart-page__items">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <Link to={`/product/${item.id}`} className="cart-item__media">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="9" width="18" height="9" rx="2" />
                        <path d="M3 13h18" />
                        <path d="M8 9V6a4 4 0 0 1 8 0v3" />
                      </svg>
                    </Link>

                    <div className="cart-item__info">
                      <span className="cart-item__category">{item.category}</span>
                      <Link to={`/product/${item.id}`} className="cart-item__name-link">
                        <h3 className="cart-item__name">{item.name}</h3>
                      </Link>
                      <span className="cart-item__unit">{item.unit}</span>
                    </div>

                    <div className="cart-item__quantity">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <div className="cart-item__price">
                      Rs. {item.price * item.quantity}
                    </div>

                    <button
                      className="cart-item__remove"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h3 className="cart-summary__title">Order summary</h3>

                <div className="cart-summary__row">
                  <span>Subtotal</span>
                  <span>Rs. {cartTotal}</span>
                </div>
                <div className="cart-summary__row">
                  <span>Delivery fee</span>
                  <span>Rs. {DELIVERY_FEE}</span>
                </div>

                <div className="cart-summary__divider" />

                <div className="cart-summary__row cart-summary__row--total">
                  <span>Total</span>
                  <span>Rs. {total}</span>
                </div>

                <Link to="/checkout" className="cart-summary__checkout">
                  Proceed to checkout
                </Link>

                <Link to="/catalog" className="cart-summary__continue">
                  Continue shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}