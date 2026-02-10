import React, { useEffect, useState } from "react";
import { FaChartLine, FaStar, FaUsers } from "react-icons/fa";

export const Header = () => {
  const [count, setCount] = useState({
    strategies: 0,
    rating: 0,
    users: 0,
  });

  useEffect(() => {
  let s = 0, r = 0, u = 0;

  const interval = setInterval(() => {
    s = Math.min(s + 1, 24);
    r = Math.min(r + 0.1, 4.8);
    u = Math.min(u + 50, 300);

    setCount({
      strategies: s,
      rating: Number(r.toFixed(1)), // keep it numeric
      users: u,
    });

    if (s >= 24 && r >= 4.8 && u >= 300) {
      clearInterval(interval);
    }
  }, 20);

  return () => clearInterval(interval);
}, []);


  return (
    <header id="header" className="optionquant-hero">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            {/* Brand */}
            <div className="hero-brand">
            
              
            
  <h4><br></br>
                <span>O</span>ption<span>Q</span>uaant
              </h4>
              </div>
            {/* Heading */}
            <h1>
            One Tool to Define Trend <br />
              <span>Entry & Exit</span>
            </h1>

            <p className="hero-subtext">
              Boost Your Trading Accuracy with OptionQuaant
              <br />
             
            </p>

            {/* CTA */}
            <a href="#how-to-trade" className="btn-optionquant">
            Start Journey
              
            </a>

            {/* Trust Stats */}
            <div className="trust-stats">
              <div className="stat-box">
                <FaChartLine className="stat-icon" />
                <h3>{count.strategies}</h3>
                <p>Tested Strategies</p>
              </div>

              <div className="stat-box">
                <FaStar className="stat-icon star-icon" />
                <h3>{count.rating}</h3>
                <p>Highest Rated (4.8/5.0)</p>
              </div>

              <div className="stat-box">
                <FaUsers className="stat-icon" />
                <h3>{count.users}+</h3>
                <p>Happy Premium Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
