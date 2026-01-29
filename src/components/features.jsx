import React from "react";
import { FaChartLine, FaFilter, FaChartBar, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine />,
    title: "ATR Trend Engine",
    text: "Volatility-Based Dynamic Trading System",
    color: "gold"
  },
  {
    icon: <FaFilter />,
    title: "EMA Trend Filter",
    text: "Trade Confirmation & Noise Reduction",
    color: "green"
  },
  {
    icon: <FaChartBar />,
    title: "Smart Candle Logic",
    text: "Clear Bullish & Bearish Candles",
    color: "red"
  },
  {
    icon: <FaCheckCircle />,
    title: "Non-Repainting",
    text: "Reliable Signals, No Repaints",
    color: "lime"
  }
];

export const Features = () => {
  return (
    <section id="features" className="optionquant-features">
      <div className="container">

        {/* HEADER */}
        <div className="section-header text-center">
          <h2>
            Why Choose <span className="highlight">OptionQuant</span>?
          </h2>

          <div className="subtitle-wrapper">
            <span className="subtitle-glow" />
            <p>Advanced Features for Serious Traders</p>
            <span className="subtitle-glow" />
          </div>
        </div>

        {/* IMAGE */}
        <div className="features-image-wrapper">
          <img
            src="img/features.png"
            alt="Trading Features"
            className="features-image"
          />
        </div>

        {/* CARDS */}
        <div className="row justify-content-center g-4 mt-4">
          {features.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 d-flex">
              <div className="feature-card flex-fill">

                <div className={`feature-icon ${item.color}`}>
                  {item.icon}
                </div>

                <h4 className="feature-title">{item.title}</h4>
                <div className="card-divider" />
                <p>{item.text}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
