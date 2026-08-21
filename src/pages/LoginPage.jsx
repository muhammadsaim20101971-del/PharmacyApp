import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AuthPages.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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

      <div className="auth-card">
        <h1 className="auth-card__title">Welcome back</h1>
        <p className="auth-card__subtitle">
          Log in to track orders, manage your wishlist, and more.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="button" className="auth-field__forgot">
            Forgot password?
          </button>

          <button type="submit" className="auth-card__submit">
            Log in
          </button>
        </form>

        <div className="auth-card__divider">
          <span>or</span>
        </div>

        <p className="auth-card__switch">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}