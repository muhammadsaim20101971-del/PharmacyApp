import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import FilterSidebar from "../components/FilterSidebar";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import PRODUCTS from "../data/products";
import "./CatalogPage.css";

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [prescriptionOnly, setPrescriptionOnly] = useState(false);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setMaxPrice(5000);
    setInStockOnly(false);
    setPrescriptionOnly(false);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const matchesPrice = product.price <= maxPrice;

      const matchesStock = !inStockOnly || product.inStock;

      const matchesPrescription =
        !prescriptionOnly || product.requiresPrescription;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesStock &&
        matchesPrescription
      );
    });
  }, [searchQuery, selectedCategories, maxPrice, inStockOnly, prescriptionOnly]);

  return (
    <div>
      <Navbar />

      <section className="catalog-page">
        <div className="catalog-page__inner">
          <div className="catalog-page__heading">
            <span className="catalog-page__eyebrow">Catalog</span>
            <h1 className="catalog-page__title">Browse medicines &amp; health products</h1>
          </div>

          <div className="catalog-page__search">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          <div className="catalog-page__layout">
            <FilterSidebar
              selectedCategories={selectedCategories}
              onToggleCategory={toggleCategory}
              maxPrice={maxPrice}
              onMaxPriceChange={setMaxPrice}
              inStockOnly={inStockOnly}
              onToggleInStock={() => setInStockOnly((prev) => !prev)}
              prescriptionOnly={prescriptionOnly}
              onTogglePrescription={() => setPrescriptionOnly((prev) => !prev)}
              onClear={clearFilters}
            />

            <div className="catalog-page__results">
              <ProductGrid products={filteredProducts} />
              <Pagination totalPages={3} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}