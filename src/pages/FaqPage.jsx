import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./FaqPage.css";

const FAQ_CATEGORIES = [
  {
    category: "Orders & Delivery",
    items: [
      {
        question: "How long does delivery usually take?",
        answer:
          "Most orders arrive within 30-60 minutes if you're near a connected branch. You'll see an estimated delivery window at checkout before you place your order.",
      },
      {
        question: "Can I track my order in real time?",
        answer:
          "Yes. Once your order is placed, you can track its status — Placed, Confirmed, Out for delivery, Delivered — from the My Orders page.",
      },
      {
        question: "What if an item in my order is out of stock?",
        answer:
          "If a nearby branch has it in stock, we'll automatically fulfil it from there. If it's unavailable everywhere, we'll notify you before dispatching the rest of your order.",
      },
    ],
  },
  {
    category: "Prescriptions & Medicines",
    items: [
      {
        question: "Do I need to upload a prescription for all medicines?",
        answer:
          "Only for medicines marked \"Rx required\" on the product page. Over-the-counter (OTC) items can be ordered without a prescription.",
      },
      {
        question: "How is my prescription verified?",
        answer:
          "A licensed pharmacist reviews every prescription-required order before it's dispatched, to confirm dosage and authenticity.",
      },
      {
        question: "Are the medicines genuine?",
        answer:
          "Yes, all medicines are sourced directly from licensed distributors and stored according to manufacturer guidelines, with batch and expiry details shown on each product page.",
      },
    ],
  },
  {
    category: "Account & Payments",
    items: [
      {
        question: "What payment methods are supported?",
        answer:
          "We currently support Cash on Delivery and debit/credit card payments at checkout.",
      },
      {
        question: "Can I register as a shopkeeper or retailer?",
        answer:
          "Yes — select \"Shopkeeper / Retailer\" when creating an account. Wholesale accounts are reviewed before bulk pricing is enabled.",
      },
      {
        question: "How do I cancel or pause a subscription plan?",
        answer:
          "Go to My Subscriptions, where you can pause a plan temporarily or cancel it entirely at any time.",
      },
    ],
  },
];

export default function FaqPage() {
  const [openId, setOpenId] = useState("Orders & Delivery-0");

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <Navbar />

      <section className="faq-page">
        <div className="faq-page__inner">
          <div className="faq-page__heading">
            <span className="faq-page__eyebrow">Support</span>
            <h1 className="faq-page__title">Frequently asked questions</h1>
            <p className="faq-page__subtext">
              Can't find what you're looking for? Chat with a pharmacist
              anytime for help.
            </p>
          </div>

          {FAQ_CATEGORIES.map((group) => (
            <div className="faq-category" key={group.category}>
              <h2 className="faq-category__title">{group.category}</h2>

              <div className="faq-list">
                {group.items.map((item, index) => {
                  const id = `${group.category}-${index}`;
                  const isOpen = openId === id;

                  return (
                    <div
                      className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                      key={id}
                    >
                      <button
                        className="faq-item__question"
                        onClick={() => toggle(id)}
                      >
                        {item.question}
                        <svg
                          className="faq-item__chevron"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>

                      {isOpen && (
                        <p className="faq-item__answer">{item.answer}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}