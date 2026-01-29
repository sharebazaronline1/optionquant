import React, { useState } from "react";

const chartImages = [
  "img/charts/chart2.jpeg",
  "img/charts/chart3.jpeg",
  "img/charts/chart4.jpeg",
  "img/charts/chart5.jpeg",
  "img/charts/chart6.jpeg",
  "img/charts/chart7.jpeg",
  "img/charts/chart8.jpeg"
];

export const ChartCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? chartImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === chartImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="chart-carousel">
      <div className="container">

        <header className="carousel-header">
          <h1>TradingView Chart Gallery</h1>
          <p>Recent trade setups and market analysis</p>
        </header>

        <div className="carousel-wrapper">

          <button className="arrow left" onClick={prevSlide}>❮</button>

          <div className="carousel-track">
            {chartImages.map((img, index) => (
              <div
                className={`carousel-slide ${index === current ? "active" : ""}`}
                key={index}
              >
                {index === current && <img src={img} alt={`Chart ${index + 1}`} />}
              </div>
            ))}
          </div>

          <button className="arrow right" onClick={nextSlide}>❯</button>

        </div>

      </div>
    </section>
  );
};
