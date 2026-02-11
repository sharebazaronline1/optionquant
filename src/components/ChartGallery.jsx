import React, { useState, useEffect } from "react";

const testimonials =[
  {
    id: 1,
    name: "Amit Verma",
    role: "Full-Time Options Trader, Delhi",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "I have been trading Nifty options for 3 years and tried many indicators. OptionQuant is the first one that actually helped me stay in trend and avoid overtrading. My losses reduced a lot after using it.",
    chartImage: "img/charts/chart2.jpeg",
  },
  {
    id: 2,
    name: "Sneha ",
    role: "Swing Trader, Pune",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Earlier I used to get confused with multiple signals. This system gives very clear buy and exit levels. I mainly trade BankNifty and the accuracy is really good on 15 min and 30 min charts.",
    chartImage: "img/charts/chart3.jpeg",
  },
  {
    id: 3,
    name: "Rahul ",
    role: "Intraday Trader, Chennai",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "The trailing stop feature is very useful. It helped me protect profits instead of giving them back to the market. Support team also guided me properly during setup.",
    chartImage: "img/charts/chart4.jpeg",
  },
  {
    id: 4,
    name: "Neha Sharma",
    role: "Part-Time Trader, Jaipur",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "I trade after office hours and needed something simple. OptionQuant signals are easy to understand and I don’t have to sit whole day in front of screen. Good experience so far.",
    chartImage: "img/charts/chart5.jpeg",
  },
  {
    id: 5,
    name: "Karthik Reddy",
    role: "Options Buyer, Hyderabad",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    text: "I mainly trade weekly options. Earlier my entries were random. After using this system, my entries are more disciplined and I wait for proper confirmation. It really improved my confidence.",
    chartImage: "img/charts/chart6.jpeg",
  },
  {
    id: 6,
    name: "Pooja Nair",
    role: "Beginner Trader, Kochi",
    avatar: "https://randomuser.me/api/portraits/women/49.jpg",
    text: "I am new to trading and was scared of options. Their indicator and training videos made things much easier. I don’t blindly trade now and understand trend better.",
    chartImage: "img/charts/chart7.jpeg",
  },
  {
    id: 7,
    name: "Manish Gupta",
    role: "Index Trader, Indore",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "What I liked most is no repainting. The signals stay on chart and I can backtest properly. This gave me trust in the system compared to others I tried before.",
    chartImage: "img/charts/chart8.jpeg",
  },
 
];


export const ChartGallery = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="oq-testimonials">
      <header className="oq-header">
        <span>TESTIMONIALS</span>
        <h2>Trusted by serious traders</h2>
        <p>Real results from real market participants</p>
      </header>

      <div
        className="oq-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="oq-nav left" onClick={prevSlide}>‹</button>

        <div className="oq-track">
          {testimonials.map((t, index) => {
            let state = "hidden";
            if (index === current) state = "active";
            else if (
              index === current - 1 ||
              (current === 0 && index === testimonials.length - 1)
            )
              state = "prev";
            else if (
              index === current + 1 ||
              (current === testimonials.length - 1 && index === 0)
            )
              state = "next";

            return (
              <div key={t.id} className={`oq-card ${state}`}>
                <div className="oq-chart">
                  <img src={t.chartImage} alt="Trade chart" />
                </div>

                <div className="oq-content">
                  <p className="oq-text">“{t.text}”</p>

                  <div className="oq-user">
                    <img src={t.avatar} alt={t.name} />
                    <div>
                      <h4>{t.name}</h4>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="oq-nav right" onClick={nextSlide}>›</button>
      </div>

      <div className="oq-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`oq-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
};
