import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./WishlistPage.css";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const isEmpty = wishlistItems.length === 0;

  const handleMoveToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      compareAtPrice: item.compareAtPrice,
      unit: item.unit,
    });
    removeFromWishlist(item.id);
  };

  return (
    <div>
      <Navbar />

      <section className="wishlist-page">
        <div className="wishlist-page__inner">
          <div className="wishlist-page__heading">
            <span className="wishlist-page__eyebrow">Saved for later</span>
            <h1 className="wishlist-page__title">
              {isEmpty ? "Your wishlist is empty" : "Your wishlist"}
            </h1>
          </div>

          {isEmpty ? (
            <div className="wishlist-page__empty">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
              <p className="wishlist-page__empty-text">
                Tap the heart icon on any product to save it here for later.
              </p>
              <Link to="/catalog" className="wishlist-page__empty-cta">
                Browse medicines
              </Link>
            </div>
          ) : (
            <div className="wishlist-grid">
              {wishlistItems.map((item) => (
                <div className="wishlist-card" key={item.id}>
                  <button
                    className="wishlist-card__remove"
                    onClick={() => removeFromWishlist(item.id)}
                    aria-label="Remove from wishlist"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>

                  <Link to={`/product/${item.id}`} className="wishlist-card__media">
                    {item.requiresPrescription && (
                      <span className="wishlist-card__badge">Rx required</span>
                    )}
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <rect x="3" y="9" width="18" height="9" rx="2" />
                      <path d="M3 13h18" />
                      <path d="M8 9V6a4 4 0 0 1 8 0v3" />
                    </svg>
                  </Link>

                  <div className="wishlist-card__body">
                    <span className="wishlist-card__category">{item.category}</span>
                    <Link to={`/product/${item.id}`} className="wishlist-card__name-link">
                      <h3 className="wishlist-card__name">{item.name}</h3>
                    </Link>
                    <span className="wishlist-card__unit">{item.unit}</span>

                    <div className="wishlist-card__footer">
                      <span className="wishlist-card__price">Rs. {item.price}</span>

                      {item.inStock ? (
                        <button
                          className="wishlist-card__cta"
                          onClick={() => handleMoveToCart(item)}
                        >
                          Move to cart
                        </button>
                      ) : (
                        <span className="wishlist-card__stock-note">
                          Out of stock
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}