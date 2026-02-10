import React from "react";
import { FaCoins, FaChartLine, FaExchangeAlt, FaBitcoin } from "react-icons/fa";

export const Markets = () => {
  return (
    <section id="markets" className="optionquant-markets">
      <div className="container">
        {/* Section Title */}
        <div className="markets-header">
          <span className="header-line"></span>
          <h2>Perfect for All Markets</h2>
          <span className="header-line"></span>
        </div>

        {/* Cards – 5 items in clean grid */}
        <div className="markets-grid">
          <div className="market-card">
            <div className="market-icon gold">
              <FaCoins />
            </div>
            <h4>Gold</h4>
            <div className="card-divider"></div>
            <p>(XAUUSD)</p>
          </div>

          <div className="market-card">
            <div className="market-icon indices">
              <FaChartLine />
            </div>
            <h4>Indices</h4>
            <div className="card-divider"></div>
            <p>NIFTY, BANKNIFTY</p>
          </div>

          <div className="market-card">
            <div className="market-icon equity">
              <FaChartLine />
            </div>
            <h4>Equity</h4>
            <div className="card-divider"></div>
            <p>Stocks, Shares</p>
          </div>

          <div className="market-card">
            <div className="market-icon forex">
              <FaExchangeAlt />
            </div>
            <h4>Forex Pairs</h4>
            <div className="card-divider"></div>
            <p>EURUSD, GBPJPY</p>
          </div>

          <div className="market-card">
            <div className="market-icon crypto">
              <FaBitcoin />
            </div>
            <h4>Crypto</h4>
            <div className="card-divider"></div>
            <p>Bitcoin, Ethereum</p>
          </div>
        </div>

        {/* Footer text */}
        <div className="markets-footer">
          Works on Any Timeframe <span>(15m–30m)</span> for second-screen confirmation
        </div>
      </div>
    </section>
  );
};