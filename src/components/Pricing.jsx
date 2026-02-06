import React from "react";
import { FaCheck, FaTimes, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    price: 4999,
    features: [
      { text: "Trend Signals", included: true },
      { text: "S/R Levels", included: false },
      { text: "Breakouts", included: false },
      { text: "Volume Filter", included: false },
      { text: "Alerts", included: false },
      { text: "Visual Background", included: true },
    ],
    isPopular: false,
  },
  {
    name: "Premium",
    price: 14999,
    features: [
      { text: "Trend Signals", included: true },
      { text: "S/R Levels", included: true },
      { text: "Breakouts", included: true },
      { text: "Volume Filter", included: false },
      { text: "Alerts", included: true },
      { text: "Visual Background", included: true },
    ],
    isPopular: true,
  },
  {
    name: "Advanced",
    price: 29999,
    features: [
      { text: "Trend Signals", included: true },
      { text: "S/R Levels", included: true },
      { text: "Breakouts", included: true },
      { text: "Volume Filter", included: true },
      { text: "Alerts", included: true },
      { text: "Visual Background", included: true },
    ],
    isPopular: false,
  },
];

export const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <header className="section-header">
          <h2>Choose Your Plan</h2>
          <p>Unlock powerful trend identification tools tailored to your trading style</p>
          <div className="gold-underline"></div>
        </header>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.isPopular ? "popular" : ""}`}
            >
              {plan.isPopular && <div className="popular-badge">Most Popular</div>}

              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="currency">₹</span>
                {plan.price.toLocaleString("en-IN")}
              </div>

              <ul className="feature-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={feature.included ? "included" : "excluded"}>
                    {feature.included ? <FaCheck /> : <FaTimes />}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-select">Get Started</button>
            </div>
          ))}
        </div>

        {/* Support Info */}
        <div className="support-section">
          <h4>Need Help Choosing?</h4>
          <p>Contact us — we’re here to assist</p>

          <div className="support-options">
            <div className="support-item">
              <FaEnvelope className="icon" />
              <span>Email</span>
              <a href="mailto:support@sharebazaaronline.in">
                support@sharebazaaronline.in
              </a>
            </div>

            <div className="support-item">
              <FaWhatsapp className="icon whatsapp" />
              <span>WhatsApp</span>
              <a href="https://wa.me/919511480021">Chat with us</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};