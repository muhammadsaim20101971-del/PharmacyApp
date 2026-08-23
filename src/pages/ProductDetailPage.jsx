import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import PRODUCTS from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./ProductDetailPage.css";

const NEARBY_BRANCHES = [
  { name: "Model Town", distance: "1.2 km", stock: "In stock" },
  { name: "Satellite Town", distance: "3.8 km", stock: "In stock" },
  { name: "Cantt", distance: "6.5 km", stock: "Low stock" },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const product =
    PRODUCTS.find((item) => String(item.id) === id) || PRODUCTS[0];

  const [quantity, setQuantity] = useState(1);
  const [priceAlert, setPriceAlert] = useState(false);
  const [notifyRequested, setNotifyRequested] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const wishlisted = isWishlisted(product.id);

  const handleToggleWishlist = () => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      compareAtPrice: product.compareAtPrice,
      unit: product.unit,
      inStock: product.inStock,
      requiresPrescription: product.requiresPrescription,
    });
  };

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        compareAtPrice: product.compareAtPrice,
        unit: product.unit,
      },
      quantity
    );
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const relatedProducts = PRODUCTS.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <div>
      <Navbar />

      <section className="product-detail">
        <div className="product-detail__inner">
          <div className="product-detail__breadcrumb">
            <Link to="/catalog">Catalog</Link>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span className="product-detail__breadcrumb-current">{product.name}</span>
          </div>

          <div className="product-detail__main">
            <div className="product-detail__media">
              {product.requiresPrescription && (
                <span className="product-detail__badge">Rx required</span>
              )}
              <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="9" width="18" height="9" rx="2" />
                <path d="M3 13h18" />
                <path d="M8 9V6a4 4 0 0 1 8 0v3" />
              </svg>
            </div>

            <div className="product-detail__info">
              <span className="product-detail__category">{product.category}</span>
              <h1 className="product-detail__name">{product.name}</h1>
              <p className="product-detail__unit">{product.unit}</p>

              <div className="product-detail__price-row">
                <span className="product-detail__price">Rs. {product.price}</span>
                {product.compareAtPrice && (
                  <span className="product-detail__compare-price">
                    Rs. {product.compareAtPrice}
                  </span>
                )}
              </div>

              <p className="product-detail__description">
                {product.longDescription}
              </p>

              <ul className="product-detail__highlights">
                {product.highlights.map((point) => (
                  <li key={point}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              {product.inStock ? (
                <>
                  <div className="product-detail__quantity">
                    <span className="product-detail__quantity-label">Quantity</span>
                    <div className="product-detail__quantity-control">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="product-detail__actions">
                    <button className="product-detail__cta" onClick={handleAddToCart}>
                      {justAdded ? "Added to cart ✓" : "Add to cart"}
                    </button>
                    <button
                      className={`product-detail__wishlist-btn ${
                        wishlisted ? "product-detail__wishlist-btn--active" : ""
                      }`}
                      onClick={handleToggleWishlist}
                      aria-label="Add to wishlist"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
                        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <div className="product-detail__actions">
                  <button
                    className={`product-detail__cta product-detail__cta--outline ${
                      notifyRequested ? "product-detail__cta--done" : ""
                    }`}
                    onClick={() => setNotifyRequested(true)}
                  >
                    {notifyRequested ? "You'll be notified" : "Notify me"}
                  </button>
                  <span className="product-detail__stock-note">
                    Currently out of stock
                  </span>
                </div>
              )}

              <label className="product-detail__price-alert">
                <input
                  type="checkbox"
                  checked={priceAlert}
                  onChange={() => setPriceAlert((prev) => !prev)}
                />
                <span className="product-detail__price-alert-box" />
                Notify me if the price drops
              </label>

              <div className="product-detail__branches">
                <h3 className="product-detail__branches-title">
                  Available at {NEARBY_BRANCHES.length} nearby branches
                </h3>
                <div className="product-detail__branches-list">
                  {NEARBY_BRANCHES.map((branch) => (
                    <div className="product-detail__branch" key={branch.name}>
                      <span className="product-detail__branch-name">
                        {branch.name}
                      </span>
                      <span className="product-detail__branch-distance">
                        {branch.distance}
                      </span>
                      <span
                        className={`product-detail__branch-stock ${
                          branch.stock === "Low stock"
                            ? "product-detail__branch-stock--low"
                            : ""
                        }`}
                      >
                        {branch.stock}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail__extra">
            <div className="product-detail__panel">
              <h2 className="product-detail__panel-title">Product details</h2>
              <div className="product-detail__table">
                {product.details.map((row) => (
                  <div className="product-detail__table-row" key={row.label}>
                    <span className="product-detail__table-label">{row.label}</span>
                    <span className="product-detail__table-value">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-detail__panel">
              <div className="product-detail__reviews-header">
                <h2 className="product-detail__panel-title">Customer reviews</h2>
                <div className="product-detail__rating-summary">
                  <span className="product-detail__rating-value">4.6</span>
                  <div className="product-detail__stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="15" height="15" viewBox="0 0 24 24" fill="#E8965A" stroke="#E8965A" strokeWidth="1.5">
                        <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
                      </svg>
                    ))}
                  </div>
                  <span className="product-detail__rating-count">Based on 24 reviews</span>
                </div>
              </div>

              <div className="product-detail__review-list">
                <div className="product-detail__review">
                  <div className="product-detail__review-top">
                    <span className="product-detail__review-name">Ayesha K.</span>
                    <div className="product-detail__stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} width="13" height="13" viewBox="0 0 24 24" fill="#E8965A" stroke="#E8965A" strokeWidth="1.5">
                          <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p>Delivered quickly and the packaging was sealed properly. Will order again.</p>
                </div>

                <div className="product-detail__review">
                  <div className="product-detail__review-top">
                    <span className="product-detail__review-name">Hamza R.</span>
                    <div className="product-detail__stars">
                      {[1, 2, 3, 4].map((star) => (
                        <svg key={star} width="13" height="13" viewBox="0 0 24 24" fill="#E8965A" stroke="#E8965A" strokeWidth="1.5">
                          <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
                        </svg>
                      ))}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E8965A" strokeWidth="1.5">
                        <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
                      </svg>
                    </div>
                  </div>
                  <p>Good quality and fair price compared to my local pharmacy.</p>
                </div>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="product-detail__related">
              <h2 className="product-detail__related-title">
                You might also need
              </h2>
              <ProductGrid products={relatedProducts} />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}