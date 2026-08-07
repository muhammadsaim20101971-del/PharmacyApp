import React from "react";
import ProductCard from "./ProductCard";
import PRODUCTS from "../data/products";
import "./ProductGrid.css";

export default function ProductGrid({ products = PRODUCTS }) {
  if (products.length === 0) {
    return (
      <div className="product-grid__empty">
        <p>No products match your filters right now.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}