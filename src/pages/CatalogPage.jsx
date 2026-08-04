import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import "./CatalogPage.css";

export default function CatalogPage() {
  return (
    <div>
      <Navbar />

      <section className="catalog-page">
        <div className="catalog-page__inner">
          <div className="catalog-page__heading">
            <span className="catalog-page__eyebrow">Catalog</span>
            <h1 className="catalog-page__title">Browse medicines &amp; health products</h1>
          </div>

          <ProductGrid />
        </div>
      </section>

      <Footer />
    </div>
  );
}