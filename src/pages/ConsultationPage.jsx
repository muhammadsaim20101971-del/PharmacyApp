import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ConsultationPage.css";

const PHARMACISTS = [
  {
    id: "rabia",
    name: "Dr. Rabia Naveed",
    specialty: "General Pharmacology",
    experience: "8 years experience",
    status: "online",
    replyTime: "Replies in under 2 min",
  },
  {
    id: "hamza",
    name: "Dr. Hamza Sheikh",
    specialty: "Chronic Care & Diabetes",
    experience: "11 years experience",
    status: "online",
    replyTime: "Replies in under 5 min",
  },
  {
    id: "ayesha",
    name: "Dr. Ayesha Malik",
    specialty: "Pediatric Medicine",
    experience: "6 years experience",
    status: "busy",
    replyTime: "Available from 6:00 PM",
  },
  {
    id: "usman",
    name: "Dr. Usman Tariq",
    specialty: "Cardiac Care",
    experience: "14 years experience",
    status: "offline",
    replyTime: "Available tomorrow, 9:00 AM",
  },
];

const STATUS_LABEL = {
  online: "Online now",
  busy: "In a consultation",
  offline: "Offline",
};

export default function ConsultationPage() {
  return (
    <div>
      <Navbar />

      <section className="consultation-page">
        <div className="consultation-page__inner">
          <div className="consultation-page__heading">
            <span className="consultation-page__eyebrow">Pharmacist consultation</span>
            <h1 className="consultation-page__title">
              Talk to a licensed pharmacist, right now
            </h1>
            <p className="consultation-page__subtext">
              Get guidance on OTC medicines, dosage questions, or drug
              interactions — chat or book a call with a verified pharmacist.
            </p>
          </div>

          <div className="pharmacist-grid">
            {PHARMACISTS.map((pharmacist) => {
              const isAvailable = pharmacist.status === "online";

              return (
                <div className="pharmacist-card" key={pharmacist.id}>
                  <div className="pharmacist-card__top">
                    <div className="pharmacist-card__avatar">
                      {pharmacist.name
                        .split(" ")
                        .slice(-2)
                        .map((word) => word[0])
                        .join("")}
                    </div>
                    <span
                      className={`pharmacist-card__status pharmacist-card__status--${pharmacist.status}`}
                    >
                      <span className="pharmacist-card__status-dot" />
                      {STATUS_LABEL[pharmacist.status]}
                    </span>
                  </div>

                  <h3 className="pharmacist-card__name">{pharmacist.name}</h3>
                  <p className="pharmacist-card__specialty">{pharmacist.specialty}</p>
                  <p className="pharmacist-card__experience">{pharmacist.experience}</p>

                  <span className="pharmacist-card__reply-time">
                    {pharmacist.replyTime}
                  </span>

                  <div className="pharmacist-card__actions">
                    <Link
                      to={isAvailable ? `/consultation/chat/${pharmacist.id}` : "#"}
                      className={`pharmacist-card__btn pharmacist-card__btn--primary ${
                        !isAvailable ? "pharmacist-card__btn--disabled" : ""
                      }`}
                    >
                      Start chat
                    </Link>
                    <Link
                      to={isAvailable ? `/consultation/call/${pharmacist.id}` : "#"}
                      className={`pharmacist-card__btn pharmacist-card__btn--outline ${
                        !isAvailable ? "pharmacist-card__btn--disabled" : ""
                      }`}
                    >
                      Video call
                    </Link>
                  </div>
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