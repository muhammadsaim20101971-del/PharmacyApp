import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./ProductCard.css";

export default function ProductCard({
  id = 1,
  name = "Metformin 500mg",
  category = "Diabetes Care",
  price = 340,
  compareAtPrice = null,
  unit = "Strip of 10",
  inStock = true,
  requiresPrescription = false,
}) {
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const wishlisted = isWishlisted(id);

  const handleAddToCart = () => {
    addToCart({ id, name, category, price, compareAtPrice, unit });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleToggleWishlist = (event) => {
    event.preventDefault();
    toggleWishlist({ id, name, category, price, compareAtPrice, unit, inStock, requiresPrescription });
  };

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-card__media">
        <span className="product-card__media-icon">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="9" width="18" height="9" rx="2" />
            <path d="M3 13h18" />
            <path d="M8 9V6a4 4 0 0 1 8 0v3" />
          </svg>
        </span>

        {requiresPrescription && (
          <span className="product-card__badge">Rx required</span>
        )}

        <button
          className={`product-card__wishlist ${wishlisted ? "product-card__wishlist--active" : ""}`}
          aria-label="Add to wishlist"
          onClick={handleToggleWishlist}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </button>
      </Link>

      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <Link to={`/product/${id}`} className="product-card__name-link">
          <h3 className="product-card__name">{name}</h3>
        </Link>
        <span className="product-card__unit">{unit}</span>

        <div className="product-card__footer">
          <div className="product-card__price-row">
            <span className="product-card__price">Rs. {price}</span>
            {compareAtPrice && (
              <span className="product-card__compare-price">
                Rs. {compareAtPrice}
              </span>
            )}
          </div>

          {inStock ? (
            <button
              className={`product-card__cta ${justAdded ? "product-card__cta--done" : ""}`}
              onClick={handleAddToCart}
            >
              {justAdded ? "Added ✓" : "Add to cart"}
            </button>
          ) : (
            <button className="product-card__cta product-card__cta--outline">
              Notify me
            </button>
          )}
        </div>

        {!inStock && (
          <span className="product-card__stock-note">Currently out of stock</span>
        )}
      </div>
    </div>
  );
}