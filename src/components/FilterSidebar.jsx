import React from "react";
import "./FilterSidebar.css";

const CATEGORIES = [
  "Diabetes Care",
  "Pain Relief",
  "Wellness",
  "Health Devices",
  "Antibiotics",
];

export default function FilterSidebar({
  selectedCategories,
  onToggleCategory,
  maxPrice,
  onMaxPriceChange,
  inStockOnly,
  onToggleInStock,
  prescriptionOnly,
  onTogglePrescription,
  onClear,
}) {
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
          <button className="filter-sidebar__clear" onClick={onClear}>
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
                onChange={() => onToggleCategory(category)}
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
          onChange={(event) => onMaxPriceChange(Number(event.target.value))}
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
              onChange={onToggleInStock}
            />
            <span className="filter-checkbox__box" />
            <span className="filter-checkbox__label">In stock only</span>
          </label>

          <label className="filter-checkbox">
            <input
              type="checkbox"
              checked={prescriptionOnly}
              onChange={onTogglePrescription}
            />
            <span className="filter-checkbox__box" />
            <span className="filter-checkbox__label">Prescription required</span>
          </label>
        </div>
      </div>
    </aside>
  );
}