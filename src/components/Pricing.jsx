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
    priceMonthly: 999,
    priceAnnual: 8392,
    discount: null,
    popular: false,
    included: [true, true, false, false, false, false, false],
  },
  {
    name: "Pro",
    priceMonthly: 4999,
    priceAnnual: 41992,
    discount: null,
    popular: true,
    included: [true, true, true, true, false, false, false],
  },
  {
    name: "Elite",
    priceMonthly: 9999,
    priceAnnual: 83992,
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

  const handleTrial = () => {
    navigate("/checkout", {
      state: {
        selectedPlan: {
          name: "2-Day Trial Pack",
          price: 99,
          isAnnual: false,
        },
      },
    });
  };

  return (
    <section className="pricing-section">
      <div className="container">
        <header className="section-header">
          <h2>Choose Your Plan</h2>
          <p>Powerful trade identification tools for every trader</p>
          <div className="gold-underline"></div>
        </header>

        {/* 2-Day Trial Banner – Premium Look */}
        <div className="trial-banner">
          <div className="trial-content">
            <div className="trial-badge">Limited Time Offer</div>
            <h3>2-Day Trial Pack</h3>
            <p>Test all core features risk-free before committing</p>
            <div className="trial-price">
              Only <strong>₹99</strong> for 2 days
            </div>
          </div>
          <button className="btn-trial" onClick={handleTrial}>
            Get Started
          </button>
        </div>

        {/* Billing Toggle */}
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
              Save up to 30%
            </span>
          </button>
        </div>

        {/* Pricing Cards */}
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

                <ul className="feature-list">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={plan.included[idx] ? "included" : "excluded"}
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
          <a
            href="https://signup.fyers.in/?utm-source=AP-Leads&utm-medium=AP3297"
            className="fyers-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Fyers Account →
          </a>
          <p>Open a Fyers account and request a callback to get 10% extra off.</p>
        </div>
      </div>
    </section>
  );
};