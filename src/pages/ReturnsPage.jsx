import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useOrders } from "../context/OrdersContext";
import { useReturns, RETURN_STAGES } from "../context/ReturnsContext";
import "./ReturnsPage.css";

const RETURN_REASONS = [
  "Wrong item received",
  "Item damaged or expired",
  "No longer needed",
  "Ordered by mistake",
];

const STAGE_ICONS = {
  Requested: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h11a5 5 0 0 1 5 5v1" />
    </svg>
  ),
  Approved: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  "Picked up": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="19" r="1.4" />
      <circle cx="17.5" cy="19" r="1.4" />
    </svg>
  ),
  Refunded: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  ),
};

export default function ReturnsPage() {
  const { orders } = useOrders();
  const { returnRequests, requestReturn, hasReturnRequest } = useReturns();
  const [reasonByOrder, setReasonByOrder] = useState({});

  const eligibleOrders = orders.filter((order) => !hasReturnRequest(order.id));

  const handleRequest = (order) => {
    const reason = reasonByOrder[order.id] || RETURN_REASONS[0];
    requestReturn(order, reason);
  };

  return (
    <div>
      <Navbar />

      <section className="returns-page">
        <div className="returns-page__inner">
          <div className="returns-page__heading">
            <span className="returns-page__eyebrow">Support</span>
            <h1 className="returns-page__title">Returns &amp; exchanges</h1>
            <p className="returns-page__subtext">
              Request a return on any recent order, or track one that's
              already in progress.
            </p>
          </div>

          {returnRequests.length > 0 && (
            <div className="returns-page__section">
              <h2 className="returns-page__section-title">Your return requests</h2>
              <div className="return-list">
                {returnRequests.map((request) => (
                  <div className="return-item" key={request.orderId}>
                    <div className="return-item__header">
                      <div>
                        <span className="return-item__id">Order #{request.orderId}</span>
                        <span className="return-item__reason">{request.reason}</span>
                      </div>
                      <span className="return-item__total">Rs. {request.total}</span>
                    </div>

                    <div className="return-item__products">
                      {request.items.map((item) => (
                        <span key={item.id}>
                          {item.name} × {item.quantity}
                        </span>
                      ))}
                    </div>

                    <div className="return-tracker">
                      {RETURN_STAGES.map((stage, index) => (
                        <div
                          className={`return-tracker__step ${
                            index <= request.stageIndex ? "return-tracker__step--done" : ""
                          } ${index === request.stageIndex ? "return-tracker__step--active" : ""}`}
                          key={stage}
                        >
                          <span className="return-tracker__dot">
                            {index <= request.stageIndex && STAGE_ICONS[stage]}
                          </span>
                          {stage}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="returns-page__section">
            <h2 className="returns-page__section-title">Eligible orders</h2>

            {orders.length === 0 ? (
              <div className="returns-page__empty">
                <p>You don't have any orders yet.</p>
                <Link to="/catalog" className="returns-page__empty-cta">
                  Browse medicines
                </Link>
              </div>
            ) : eligibleOrders.length === 0 ? (
              <div className="returns-page__empty">
                <p>All your orders already have a return request in progress.</p>
              </div>
            ) : (
              <div className="eligible-list">
                {eligibleOrders.map((order) => (
                  <div className="eligible-item" key={order.id}>
                    <div className="eligible-item__info">
                      <span className="eligible-item__id">Order #{order.id}</span>
                      <span className="eligible-item__date">{order.placedAt}</span>
                      <div className="eligible-item__products">
                        {order.items.map((item) => (
                          <span key={item.id}>
                            {item.name} × {item.quantity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="eligible-item__actions">
                      <select
                        value={reasonByOrder[order.id] || RETURN_REASONS[0]}
                        onChange={(event) =>
                          setReasonByOrder((prev) => ({
                            ...prev,
                            [order.id]: event.target.value,
                          }))
                        }
                      >
                        {RETURN_REASONS.map((reason) => (
                          <option key={reason} value={reason}>
                            {reason}
                          </option>
                        ))}
                      </select>

                      <button
                        className="eligible-item__btn"
                        onClick={() => handleRequest(order)}
                      >
                        Request return
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}