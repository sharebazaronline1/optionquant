import React from "react";
import { FaBullseye } from "react-icons/fa";

export const HowToTrade = () => {
  return (
    <section id="how-to-trade" className="optionquant-trade">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="section-header text-center">
          <div className="title-with-lines">
            <span className="title-line"></span>
            <h2 className="main-title">
              How to Trade with <span className="highlight">OptionQuaant</span>
            </h2>
            <span className="title-line"></span>
          </div>
        </div>

        <div className="trade-panels">

          {/* BUY SETUP */}
          <div className="panel buy-panel small-panel">
            <div className="panel-content">
              <h4>BUY SETUP</h4>
              <div className="bottom-line"></div><br></br>
              <p className="condition green">
                Green Candle • Above Trend Line
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="panel center-panel">
            <div className="panel-content center-content">
              <div className="target-icon-wrapper">
                <div className="target-icon">
                  {/* AIM ICON */}
                 <FaBullseye size={60} />
                </div>
              </div>

              <p className="instruction">
                Use Trail Stop Loss on Trend Line
              </p>
            </div>
          </div>

          {/* SELL SETUP */}
          <div className="panel sell-panel small-panel">
            <div className="panel-content">
              <h4>SELL SETUP</h4>
              <div className="bottom-line"></div><br></br>
              <p className="condition red">
                Red Candle • Below Trend Line
              </p>
            </div>
          </div>

        </div>{/* How it works section */}
<div className="target-section">
  <div className="target-arrow">↑</div>
  <div className="target-box">
    <span className="target-text">
      How It Works: Trade in the direction of the trend and trail your stop-loss along the trend line
    </span>
  </div>
</div>


      </div>
    </section>
  );
};
