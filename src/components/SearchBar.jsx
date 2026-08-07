import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ placeholder = "Search medicines, devices, and more..." }) {
  const [query, setQuery] = useState("");

  return (
    <div className="search-bar">
      <svg
        className="search-bar__icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      {query.length > 0 && (
        <button
          className="search-bar__clear"
          aria-label="Clear search"
          onClick={() => setQuery("")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}