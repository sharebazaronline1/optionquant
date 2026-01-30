import React from "react";

export const LifetimeCTA = () => {
  return (
    <section id="lifetime" className="optionquant-cta">
      <div className="container">
        <div className="cta-content">

          {/* Top long divider */}
          <div className="cta-divider"></div>

          {/* Heading */}
          <h2>
            Get Yearly Access to <span>OptionQuaant</span> for <b>₹14,998</b>
          </h2>

          {/* Subtitle with small dividers */}
          <div className="cta-divider-small"></div>

          <p className="cta-meta">
           Precise Entry Signals • No Repaints • 100% Control
          </p>

          <div className="cta-divider-small"></div>

          {/* CTA Button */}
          <a href="#contact" className="cta-button">
            How It Works
          </a>

          {/* Bottom long divider */}
          <div className="cta-divider bottom"></div>

        </div>
      </div>
    </section>
  );
};
