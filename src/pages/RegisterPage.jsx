import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AuthPages.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("customer");

  const [customerForm, setCustomerForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [shopForm, setShopForm] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    password: "",
  });

  const handleCustomerChange = (event) => {
    const { name, value } = event.target;
    setCustomerForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleShopChange = (event) => {
    const { name, value } = event.target;
    setShopForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="auth-page">
      <Link to="/" className="auth-page__logo">
        <span className="auth-page__logo-icon">
          <span className="auth-page__logo-bar auth-page__logo-bar--v" />
          <span className="auth-page__logo-bar auth-page__logo-bar--h" />
        </span>
        <span className="auth-page__logo-text">
          HealthAnchor
          <span className="auth-page__logo-sub">Pharmacy</span>
        </span>
      </Link>

      <div className="auth-card auth-card--wide">
        <h1 className="auth-card__title">Create your account</h1>
        <p className="auth-card__subtitle">
          Choose the account type that fits you best.
        </p>

        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab ${accountType === "customer" ? "auth-tab--active" : ""}`}
            onClick={() => setAccountType("customer")}
          >
            Customer
          </button>
          <button
            type="button"
            className={`auth-tab ${accountType === "shopkeeper" ? "auth-tab--active" : ""}`}
            onClick={() => setAccountType("shopkeeper")}
          >
            Shopkeeper / Retailer
          </button>
        </div>

        {accountType === "customer" ? (
          <form onSubmit={handleSubmit}>
            <div className="auth-field">
              <label>Full name</label>
              <input
                type="text"
                name="fullName"
                value={customerForm.fullName}
                onChange={handleCustomerChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="auth-field-row">
              <div className="auth-field">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  value={customerForm.email}
                  onChange={handleCustomerChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="auth-field">
                <label>Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={customerForm.phone}
                  onChange={handleCustomerChange}
                  placeholder="03XX-XXXXXXX"
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={customerForm.password}
                onChange={handleCustomerChange}
                placeholder="Create a password"
                required
              />
            </div>

            <button type="submit" className="auth-card__submit">
              Create account
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="auth-field">
              <label>Business / pharmacy name</label>
              <input
                type="text"
                name="businessName"
                value={shopForm.businessName}
                onChange={handleShopChange}
                placeholder="e.g. City Medical Store"
                required
              />
            </div>

            <div className="auth-field-row">
              <div className="auth-field">
                <label>Owner name</label>
                <input
                  type="text"
                  name="ownerName"
                  value={shopForm.ownerName}
                  onChange={handleShopChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="auth-field">
                <label>Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={shopForm.phone}
                  onChange={handleShopChange}
                  placeholder="03XX-XXXXXXX"
                  required
                />
              </div>
            </div>

            <div className="auth-field-row">
              <div className="auth-field">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  value={shopForm.email}
                  onChange={handleShopChange}
                  placeholder="business@example.com"
                  required
                />
              </div>
              <div className="auth-field">
                <label>Drug license number</label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={shopForm.licenseNumber}
                  onChange={handleShopChange}
                  placeholder="License / registration no."
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={shopForm.password}
                onChange={handleShopChange}
                placeholder="Create a password"
                required
              />
            </div>

            <p className="auth-note">
              Wholesale accounts are reviewed before bulk pricing is enabled.
            </p>

            <button type="submit" className="auth-card__submit">
              Submit for review
            </button>
          </form>
        )}

        <p className="auth-card__switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}