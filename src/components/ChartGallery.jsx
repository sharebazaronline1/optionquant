import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Amit Verma",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I have been using OptionQuant strategies for the past few months. The signals are structured and easy to follow. My risk control has improved significantly.",
    image: "img/charts/1.jpeg"
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "What I like most is the discipline-based approach. Trades are planned properly instead of being random. It helped me avoid overtrading.",
    image: "img/charts/2.jpeg"
  },
  {
    id: 3,
    name: "Rahul Sharma",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "The system gives me more confidence before entering trades. I follow structured setups now instead of emotional decisions.",
    image: "img/charts/3.jpeg"
  },
  {
    id: 4,
    name: "Neha Singh",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Earlier I depended on tips. Now I rely on defined strategies and risk-based trades. My results are more consistent than before.",
    image: "img/charts/4.jpeg"
  },
  {
    id: 5,
    name: "Karthik Reddy",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "The analysis style is simple and practical. Even complex option strategies are explained in a way that is easy to apply.",
    image: "img/charts/5.jpeg"
  },
  {
    id: 6,
    name: "Pooja Nair",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "I like that the focus is on process and discipline rather than unrealistic profit claims. It feels professional and reliable.",
    image: "img/charts/6.jpeg"
  },
  {
    id: 7,
    name: "Manish Gupta",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "I mainly use it for intraday setups. The clarity around entries and exits has helped reduce impulsive trades.",
    image: "img/charts/7.jpeg"
  },
  {
    id: 8,
    name: "Priya Menon",
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    text: "OptionQuaant helped me understand market context better instead of just chasing price movements.",
    image: "img/charts/8.jpeg"
  },
  {
    id: 9,
    name: "Vikram Joshi",
    photo: "https://randomuser.me/api/portraits/men/18.jpg",
    text: "The biggest improvement for me is consistency. Losses are controlled and trades feel more planned than emotional.",
    image: "img/charts/9.jpeg"
  }
];

export const ChartGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="oq-testimonials">
      <header className="oq-header">
        <span className="highlight">REAL USER EXPERIENCES</span>
        <h2>What Our Users Say</h2>
        <p>Feedback shared by people using OptionQuant strategies</p>
      </header>

      <div className="oq-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="oq-testimonial-card">
            <div className="oq-user">
              <img src={t.photo} alt={t.name} className="oq-avatar" />
              <h4>{t.name}</h4>
              
            <div className="oq-stars">★★★★★</div>
            </div>


            <p className="oq-text">“{t.text}”</p>

            <span
              className="view-link"
              onClick={() => setSelectedImage(t.image)}
            >
              View trade result →
            </span>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Trade Result" className="modal-image" />
            <button className="modal-close" onClick={() => setSelectedImage(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
};
