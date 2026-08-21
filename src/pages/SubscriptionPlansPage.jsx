import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSubscription } from "../context/SubscriptionContext";
import "./SubscriptionPlansPage.css";

const PLANS = [
  {
    id: "diabetes",
    name: "Diabetes Care Plan",
    description: "Monthly auto-refill for Metformin and glucose monitoring strips.",
    monthlyPrice: 850,
    quarterlyPrice: 2250,
    discount: "12% off every refill",
    features: [
      "Auto-refill every 30 days",
      "Free glucometer strips top-up",
      "Priority pharmacist support",
    ],
  },
  {
    id: "hypertension",
    name: "Hypertension Care Plan",
    description: "Regular BP medication delivery, with monitoring check-ins.",
    monthlyPrice: 720,
    quarterlyPrice: 1900,
    discount: "10% off every refill",
    features: [
      "Auto-refill every 30 days",
      "Free BP log tracking sheet",
      "Priority pharmacist support",
    ],
  },
  {
    id: "wellness",
    name: "General Wellness Plan",
    description: "Vitamins and supplements for everyday preventive care.",
    monthlyPrice: 590,
    quarterlyPrice: 1550,
    discount: "8% off every refill",
    features: [
      "Auto-refill every 30 days",
      "Customizable supplement mix",
      "Free seasonal health check reminder",
    ],
  },
];

export default function SubscriptionPlansPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const { isSubscribed, subscribe } = useSubscription();

  return (
    <div>
      <Navbar />

      <section className="subscription-page">
        <div className="subscription-page__inner">
          <div className="subscription-page__heading">
            <span className="subscription-page__eyebrow">Subscription plans</span>
            <h1 className="subscription-page__title">
              Auto-refill for chronic care, on your schedule
            </h1>
            <p className="subscription-page__subtext">
              Never run out of your regular medicines. Subscribe once, and
              refills arrive automatically — with a discount every time.
            </p>
          </div>

          <div className="subscription-page__toggle">
            <button
              className={billingCycle === "monthly" ? "subscription-page__toggle-btn--active" : ""}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={billingCycle === "quarterly" ? "subscription-page__toggle-btn--active" : ""}
              onClick={() => setBillingCycle("quarterly")}
            >
              Quarterly
              <span className="subscription-page__toggle-save">Save more</span>
            </button>
          </div>

          <div className="subscription-grid">
            {PLANS.map((plan) => {
              const subscribed = isSubscribed(plan.id);
              const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.quarterlyPrice;

              return (
                <div className="plan-card" key={plan.id}>
                  <span className="plan-card__discount">{plan.discount}</span>

                  <h3 className="plan-card__name">{plan.name}</h3>
                  <p className="plan-card__description">{plan.description}</p>

                  <div className="plan-card__price-row">
                    <span className="plan-card__price">Rs. {price}</span>
                    <span className="plan-card__cycle">
                      / {billingCycle === "monthly" ? "month" : "quarter"}
                    </span>
                  </div>

                  <ul className="plan-card__features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {subscribed ? (
                    <Link to="/my-subscriptions" className="plan-card__cta plan-card__cta--done">
                      Subscribed — view details
                    </Link>
                  ) : (
                    <button
                      className="plan-card__cta"
                      onClick={() => subscribe(plan)}
                    >
                      Subscribe
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}