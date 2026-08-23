import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useOrders, ORDER_STAGES } from "../context/OrdersContext";
import "./MyOrdersPage.css";

const STAGE_ICONS = {
  Placed: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M20 7 12 3 4 7v10l8 4 8-4V7Z" />
      <path d="M4 7l8 4 8-4" />
      <path d="M12 11v10" />
    </svg>
  ),
  Confirmed: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  "Out for delivery": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="19" r="1.4" />
      <circle cx="17.5" cy="19" r="1.4" />
    </svg>
  ),
  Delivered: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
};

export default function MyOrdersPage() {
  const { orders } = useOrders();
  const isEmpty = orders.length === 0;

  return (
    <div>
      <Navbar />

      <section className="my-orders">
        <div className="my-orders__inner">
          <div className="my-orders__heading">
            <span className="my-orders__eyebrow">Order tracking</span>
            <h1 className="my-orders__title">
              {isEmpty ? "No orders yet" : "My orders"}
            </h1>
          </div>

          {isEmpty ? (
            <div className="my-orders__empty">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M3 7h11v10H3z" />
                <path d="M14 10h4l3 3v4h-7z" />
                <circle cx="7" cy="19" r="1.6" />
                <circle cx="17.5" cy="19" r="1.6" />
              </svg>
              <p>Orders you place will show up here with live status tracking.</p>
              <Link to="/catalog" className="my-orders__empty-cta">
                Browse medicines
              </Link>
            </div>
          ) : (
            <div className="order-list">
              {orders.map((order) => (
                <div className="order-item" key={order.id}>
                  <div className="order-item__header">
                    <div>
                      <span className="order-item__id">Order #{order.id}</span>
                      <span className="order-item__date">{order.placedAt}</span>
                    </div>
                    <span className="order-item__total">Rs. {order.total}</span>
                  </div>

                  <div className="order-item__products">
                    {order.items.map((item) => (
                      <span key={item.id}>
                        {item.name} × {item.quantity}
                      </span>
                    ))}
                  </div>

                  <div className="order-tracker">
                    {ORDER_STAGES.map((stage, index) => (
                      <div
                        className={`order-tracker__step ${
                          index <= order.stageIndex ? "order-tracker__step--done" : ""
                        } ${index === order.stageIndex ? "order-tracker__step--active" : ""}`}
                        key={stage}
                      >
                        <span className="order-tracker__dot">
                          {index === order.stageIndex && (
                            <span className="order-tracker__pulse" />
                          )}
                          {index <= order.stageIndex && STAGE_ICONS[stage]}
                        </span>
                        {stage}
                      </div>
                    ))}
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