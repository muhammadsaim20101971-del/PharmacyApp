import React, { useState } from "react";
import "./FilterSidebar.css";

const CATEGORIES = [
  "Diabetes Care",
  "Pain Relief",
  "Wellness",
  "Health Devices",
  "Antibiotics",
];

export default function FilterSidebar() {
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

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    maxPrice < 5000 ||
    inStockOnly ||
    prescriptionOnly;

  return (
    <aside className="filter-sidebar">
      <div className="filter-sidebar__header">
        <h3 className="filter-sidebar__title">Filters</h3>
        {hasActiveFilters && (
          <button className="filter-sidebar__clear" onClick={clearFilters}>
            Clear all
          </button>
        )}
      </div>

      <div className="filter-sidebar__section">
        <h4 className="filter-sidebar__section-title">Category</h4>
        <div className="filter-sidebar__options">
          {CATEGORIES.map((category) => (
            <label className="filter-checkbox" key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span className="filter-checkbox__box" />
              <span className="filter-checkbox__label">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-sidebar__section">
        <h4 className="filter-sidebar__section-title">Max price</h4>
        <input
          type="range"
          min="0"
          max="5000"
          step="50"
          value={maxPrice}
          onChange={(event) => setMaxPrice(Number(event.target.value))}
          className="filter-sidebar__range"
        />
        <div className="filter-sidebar__range-value">Up to Rs. {maxPrice}</div>
      </div>

      <div className="filter-sidebar__section">
        <h4 className="filter-sidebar__section-title">Availability</h4>
        <div className="filter-sidebar__options">
          <label className="filter-checkbox">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={() => setInStockOnly((prev) => !prev)}
            />
            <span className="filter-checkbox__box" />
            <span className="filter-checkbox__label">In stock only</span>
          </label>

          <label className="filter-checkbox">
            <input
              type="checkbox"
              checked={prescriptionOnly}
              onChange={() => setPrescriptionOnly((prev) => !prev)}
            />
            <span className="filter-checkbox__box" />
            <span className="filter-checkbox__label">Prescription required</span>
          </label>
        </div>
      </div>
    </aside>
  );
}