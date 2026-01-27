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

        {/* Header */}
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

        {/* Cards */}
        <div className="row justify-content-center g-4">
          {features.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 d-flex">
              {/* Make card fill full height */}
              <div className="feature-card flex-fill d-flex flex-column">

                <div className={`feature-icon ${item.color} mb-3`}>
                  {item.icon}
                </div>

                <h4 className="feature-title">{item.title}</h4>
                <div className="card-divider" />
                <p className="mt-auto">{item.text}</p> {/* pushes text to bottom if needed */}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
