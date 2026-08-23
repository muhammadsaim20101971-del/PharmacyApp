import React from "react";
import { Link } from "react-router-dom";
import "./FinalCta.css";

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta__inner">
        <h2 className="final-cta__title">
          Ready to take the wait out of pharmacy runs?
        </h2>
        <p className="final-cta__subtext">
          Browse medicines and health essentials, or set up an account in
          under a minute.
        </p>

        <div className="final-cta__actions">
          <Link to="/catalog" className="final-cta__btn final-cta__btn--primary">
            Browse medicines
          </Link>
          <Link to="/register" className="final-cta__btn final-cta__btn--outline">
            Create an account
          </Link>
        </div>
      </div>
    </section>
  );
}