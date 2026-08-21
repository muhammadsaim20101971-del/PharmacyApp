import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSubscription } from "../context/SubscriptionContext";
import "./MySubscriptionsPage.css";

export default function MySubscriptionsPage() {
  const { subscribedPlans, cancelSubscription } = useSubscription();
  const isEmpty = subscribedPlans.length === 0;

  return (
    <div>
      <Navbar />

      <section className="my-subscriptions">
        <div className="my-subscriptions__inner">
          <div className="my-subscriptions__heading">
            <span className="my-subscriptions__eyebrow">Your plans</span>
            <h1 className="my-subscriptions__title">
              {isEmpty ? "No active subscriptions" : "My subscriptions"}
            </h1>
          </div>

          {isEmpty ? (
            <div className="my-subscriptions__empty">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M21 12a9 9 0 1 1-3.5-7.1" />
                <polyline points="21 4 21 9 16 9" />
              </svg>
              <p>
                Subscribe to a chronic-care plan and it'll show up here with
                your next refill date.
              </p>
              <Link to="/subscriptions" className="my-subscriptions__empty-cta">
                Browse subscription plans
              </Link>
            </div>
          ) : (
            <div className="subscription-list">
              {subscribedPlans.map((plan) => (
                <div className="subscription-item" key={plan.id}>
                  <div className="subscription-item__main">
                    <span className="subscription-item__status">Active</span>
                    <h3 className="subscription-item__name">{plan.name}</h3>
                    <p className="subscription-item__description">
                      {plan.description}
                    </p>
                  </div>

                  <div className="subscription-item__meta">
                    <div className="subscription-item__meta-block">
                      <span className="subscription-item__meta-label">
                        Subscribed on
                      </span>
                      <span className="subscription-item__meta-value">
                        {plan.subscribedOn}
                      </span>
                    </div>
                    <div className="subscription-item__meta-block">
                      <span className="subscription-item__meta-label">
                        Next refill
                      </span>
                      <span className="subscription-item__meta-value subscription-item__meta-value--accent">
                        {plan.nextRefill}
                      </span>
                    </div>
                  </div>

                  <div className="subscription-item__actions">
                    <button className="subscription-item__pause">Pause</button>
                    <button
                      className="subscription-item__cancel"
                      onClick={() => cancelSubscription(plan.id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}