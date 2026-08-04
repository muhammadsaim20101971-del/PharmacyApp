import React, { useState } from "react";
import "./ProductCard.css";

export default function ProductCard({
  name = "Metformin 500mg",
  category = "Diabetes Care",
  price = 340,
  compareAtPrice = null,
  unit = "Strip of 10",
  inStock = true,
  requiresPrescription = false,
}) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="product-card">
      <div className="product-card__media">
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
          className={`product-card__wishlist ${isWishlisted ? "product-card__wishlist--active" : ""}`}
          aria-label="Add to wishlist"
          onClick={() => setIsWishlisted((prev) => !prev)}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </button>
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <h3 className="product-card__name">{name}</h3>
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
            <button className="product-card__cta">Add to cart</button>
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