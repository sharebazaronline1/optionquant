import React from "react";

export const Header = () => {
  return (
    <header id="header" className="optionquant-hero">
      <div className="hero-overlay">
        {/* SVG Trend Lines */}
       

        <div className="container">
          <div className="hero-content">

            {/* Brand */}
            <div className="hero-brand">
              <h4>
                <span>O</span>ption<span>Q</span>uant
              </h4>
              <p>Professional Trend Identification System</p>
            </div>

            {/* Heading */}
            <h1>
              Master the Market Trend <br />
              <span>with Confidence</span>
            </h1>

            {/* Subtext */}
            <p className="hero-subtext">
              Boost Your Trading Accuracy with OptionQuant
              <br />
              Get Lifetime Access for Just <b>₹9,999</b>
            </p>

            {/* CTA */}
            <a href="#contact" className="btn-optionquant">
              Get OptionQuant Now
              <span>One-Time Payment · ₹9,999</span>
            </a>

          </div>
        </div>
      </div>
    </header>
  );
};
