import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const features = [
  "Visual Background",
  "Trade Signals",
  "Volume Filter",
  "Alerts",
  "Trade Strategy",
  "Breakouts",
   "S/R Levels",
  
  
];

const plans = [
  {
    name: "Starter",
    priceMonthly: 4999,
    priceAnnual: 35999,
    discount: "40% off",
    popular: false,
    included: [true, true, false, false, false, false, false],
  },
  {
    name: "Pro",
    priceMonthly: 9999,
    priceAnnual: 59999,
    discount: null,
    popular: true,
    included: [true, true, true, true, false, false, false],
  },
  {
    name: "Elite",
    priceMonthly: 19999,
    priceAnnual: 143999,
    discount: null,
    popular: false,
    included: [true, true, true, true, true, true, true],
  },
];

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const navigate = useNavigate();

  const handleGetStarted = (plan) => {
    navigate("/checkout", {
      state: {
        selectedPlan: {
          name: plan.name,
          price: isAnnual ? plan.priceAnnual : plan.priceMonthly,
          isAnnual,
        },
      },
    });
  };

  return (
    <section className="pricing-section">
      <div className="container">
        <header className="section-header">
          <h2>Choose Your Plan</h2>
          <p>Powerful Trade identification tools for every trader</p>
          <div className="gold-underline"></div>
        </header>

        <div className="billing-toggle">
  <button
    className={!isAnnual ? "active" : ""}
    onClick={() => setIsAnnual(false)}
  >
    Monthly
  </button>
  <button
    className={isAnnual ? "active" : ""}
    onClick={() => setIsAnnual(true)}
  >
    Annually
    <span className={`save-badge ${isAnnual ? "active-save" : ""}`}>
      Save up to 40%
    </span>
  </button>
</div>

        <div className="pricing-grid">
          {plans.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.name}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}

                <h3 className="plan-name">{plan.name}</h3>

                <div className="plan-price">
                  <span className="currency">₹</span>
                  {price.toLocaleString("en-IN")}
                  <span className="period">/{isAnnual ? "year" : "month"}</span>
                </div>

                {isAnnual && plan.discount && (
                  <div className="savings">{plan.discount}</div>
                )}

                <ul className="feature-list">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={
                        plan.included[idx] ? "included" : "excluded"
                      }
                    >
                      {plan.included[idx] ? <FaCheck /> : <FaTimes />}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ul className="support-list">
                  <li className="support-title">Support</li>
                  
                   <li>
                    {plan.name === "Elite" ? <FaCheck className="check" /> : <FaTimes className="cross" />} Call 
                  </li>
                   <li>
                    <FaCheck className="check" /> Email
                  </li>
                  <li>
                    {plan.name !== "Starter" ? <FaCheck className="check" /> : <FaTimes className="cross" />} WhatsApp
                  </li>
                 
                 
                </ul>

                <button
                  className="btn-select"
                  onClick={() => handleGetStarted(plan)}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        <div className="pricing-note">
          <p>
            Note: For instant order placement and precise trade execution, a Fyers trading account is required.
          </p>
          <a href="https://signup.fyers.in/?utm-source=AP-Leads&utm-medium=AP3297" className="fyers-link"
  target="_blank"
  rel="noopener noreferrer">
            Open Fyers Account → 
          </a>
          <p>Open a Fyers account and request a callback to get 10% extra off.</p>
        </div>
      </div>
    </section>
  );
};