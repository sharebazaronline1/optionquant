import React from "react";
import {
  FaChartLine,
  FaFilter,
  FaChartBar,
  FaCheckCircle
} from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine />,
    title: "ATR Trend Engine",
    text: "Volatility-Based Dynamic Trailing Line",
    color: "gold"
  },
  {
    icon: <FaFilter />,
    title: "EMA Trend Filter",
    text: "Trend Confirmation & Noise Reduction",
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
        <div className="row justify-content-center">
          {features.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-5 d-flex">
              {/* d-flex ensures equal height in Bootstrap */}
              <div className="feature-card">

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
