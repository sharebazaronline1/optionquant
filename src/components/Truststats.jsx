import React, { useEffect, useState } from "react";
import { FaChartLine, FaStar, FaUsers } from "react-icons/fa";

export const TrustStats = () => {
  const [count, setCount] = useState({ strategies: 0, rating: 0, users: 0 });

  useEffect(() => {
    let s = 0, r = 0, u = 0;
    const interval = setInterval(() => {
      s = Math.min(s + 1, 15);
      r = Math.min(r + 0.1, 4.8);
      u = Math.min(u + 50, 3700);

      setCount({
        strategies: s,
        rating: r.toFixed(1),
        users: u
      });

      if (s === 15 && r >= 4.8 && u === 3700) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trust-stats">
      <div className="stat-box">
        <FaChartLine className="stat-icon" />
        <h3>{count.strategies}+</h3>
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
  );
};
