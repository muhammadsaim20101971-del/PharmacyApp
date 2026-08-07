import React, { useState } from "react";
import "./Pagination.css";

export default function Pagination({ totalPages = 5 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="pagination__arrow"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="pagination__pages">
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`pagination__page ${page === currentPage ? "pagination__page--active" : ""}`}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="pagination__arrow"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </nav>
  );
}