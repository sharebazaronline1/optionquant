


import React, { useState } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";


const testimonialsData = [
  {
    id: 1,
    name: "Amit Verma",
    stars: 5,
    photo: "https://randomuser.me/api/portraits/men/39.jpg",
    text: "Before using OptionQuaant strategies, I was mostly trading based on emotions and random ideas. Now I follow proper entry and exit rules. My losses are controlled and I feel much more confident in my trading decisions.",
    image: "img/charts/1.jpeg"
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    stars: 4,
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "The strategies helped me reduce overtrading. I now wait patiently for proper setups instead of jumping into every move. It has improved both my discipline and mindset.",
    image: "img/charts/2.jpeg"
  },
  {
    id: 3,
    name: "Rahul Sharma",
    stars: 4,
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Earlier I used to exit trades out of fear. After following OptionQuaant rules, I respect stop loss and targets. Even when trades fail, I feel more in control.",
    image: "img/charts/3.jpeg"
  },
  {
    id: 4,
    name: "Neha Singh",
    stars: 5,
    photo: "",
    text: "I moved away from tips and social media noise. The strategies feel professional and structured. I now understand why I enter a trade instead of blindly following others.",
    image: "img/charts/4.jpeg"
  },
  {
    id: 5,
    name: "Karthik Reddy",
    stars: 4,
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "The biggest improvement for me is risk management. Each trade has a plan, and that has reduced stress and impulsive decisions.",
    image: "img/charts/5.jpeg"
  },
  {
    id: 6,
    name: "Pooja Nair",
    stars: 5,
    photo: "https://randomuser.me/api/portraits/women/84.jpg",
    text: "Trading feels more systematic now. I don’t panic during market swings because I know my risk beforehand. This has improved my confidence a lot.",
    image: "img/charts/6.jpeg"
  },
  {
    id: 7,
    name: "Manish Gupta",
    stars: 3,
    photo: "",
    text: "Earlier I took too many trades in a day. Now I focus only on selected setups. My trading has become more controlled and less emotional.",
    image: "img/charts/7.jpeg"
  },
  {
    id: 8,
    name: "Priya Menon",
    stars: 4,
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    text: "The strategies are based on logic and market structure. I feel more prepared before entering trades instead of reacting to price movements.",
    image: "img/charts/8.jpeg"
  },
  {
    id: 9,
    name: "Vikram Joshi",
    stars: 5,
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Consistency has improved for me. Even small profits feel meaningful because they follow a proper process rather than luck.",
    image: "img/charts/9.jpeg"
  },
  {
    id: 10,
    name: "Rohit Malhotra",
    stars: 4,
    photo: "https://randomuser.me/api/portraits/men/58.jpg",
    text: "The structured rules helped me avoid random trades. I now wait for confirmation and avoid chasing the market.",
    image: "img/charts/10.jpeg"
  },
  {
    id: 11,
    name: "Anjali Desai",
    stars: 3,
    photo: "https://randomuser.me/api/portraits/women/75.jpg",
    text: "What I like is that there are no false promises. The focus is on risk control and discipline rather than quick profits.",
    image: "img/charts/11.jpeg"
  },
  {
    id: 12,
    name: "Suresh Iyer",
    stars: 4,
    photo: "",
    text: "Earlier I followed news and opinions. Now I follow a proper method that gives clarity on when to trade and when to stay out.",
    image: "img/charts/12.jpeg"
  },
  {
    id: 13,
    name: "Varun Mehta",
    stars: 5,
    photo: "https://randomuser.me/api/portraits/men/40.jpg",
    text: "These strategies taught me patience. My mindset has changed from making money daily to following rules daily.",
    image: "img/charts/1.jpeg"
  },
  {
    id: 14,
    name: "Riya Shah",
    stars: 4,
    photo: "",
    text: "I feel more confident placing trades because I understand the reasoning behind them. It feels more professional now.",
    image: "img/charts/2.jpeg"
  },
  {
    id: 15,
    name: "Nitin Arora",
    stars: 3,
    photo: "https://randomuser.me/api/portraits/men/29.jpg",
    text: "The strategies helped me control emotional trading during volatile markets.",
    image: "img/charts/3.jpeg"
  },
  {
    id: 16,
    name: "Pallavi Joshi",
    stars: 5,
    photo: "",
    text: "My trades are more systematic now. I don’t feel confused while entering or exiting positions.",
    image: "img/charts/4.jpeg"
  },
  {
    id: 17,
    name: "Deepak Kumar",
    stars: 4,
    photo: "https://randomuser.me/api/portraits/men/35.jpg",
    text: "Clear structure and defined rules reduced my losses. That itself is a big improvement.",
    image: "img/charts/5.jpeg"
  },
  {
    id: 18,
    name: "Shreya Kulkarni",
    stars: 5,
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "It feels like a solid system rather than random signals. That gives peace of mind.",
    image: "img/charts/6.jpeg"
  },
  {
    id: 19,
    name: "Arjun Patel",
    stars: 4,
    photo: "https://randomuser.me/api/portraits/men/48.jpg",
    text: "Good balance between risk and reward. I feel safer taking trades now.",
    image: "img/charts/7.jpeg"
  },
  {
    id: 20,
    name: "Megha Rao",
    stars: 5,
    photo: "",
    text: "Strategies are easy to follow and practical for daily trading.",
    image: "img/charts/8.jpeg"
  },
  {
    id: 21,
    name: "Sanjay Khanna",
    stars: 3,
    photo: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "It helped me avoid emotional trades and focus on planned entries.",
    image: "img/charts/9.jpeg"
  },
  {
    id: 22,
    name: "Kavita Mishra",
    stars: 4,
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    text: "Good clarity in trade setups. I no longer feel lost while trading.",
    image: "img/charts/10.jpeg"
  },
  {
    id: 23,
    name: "Ramesh Nair",
    stars: 5,
    photo: "https://randomuser.me/api/portraits/men/99.jpg",
    text: "My trading has become more disciplined and structured than before.",
    image: "img/charts/11.jpeg"
  },
  {
    id: 24,
    name: "Isha Jain",
    stars: 4,
    photo: "https://randomuser.me/api/portraits/women/99.jpg",
    text: "Simple and logical approach. It feels sustainable for long term trading.",
    image: "img/charts/12.jpeg"
  },

  /* ---- Letter Avatar Users (no photo) ---- */

  { id: 25, name: "Harish Malhotra", stars: 4, photo: "", text: "I now follow defined rules instead of emotional decisions. That alone improved my trading.", image: "img/charts/1.jpeg" },
  { id: 26, name: "Divya Arora", stars: 5, photo: "", text: "The strategies give me confidence because risk is always planned.", image: "img/charts/2.jpeg" },
  { id: 27, name: "Tarun Bansal", stars: 3, photo: "", text: "My overtrading has reduced and my discipline has improved.", image: "img/charts/3.jpeg" },
  { id: 28, name: "Kiran Joshi", stars: 4, photo: "", text: "Clear structure makes trading easier for me.", image: "img/charts/4.jpeg" },
  { id: 29, name: "Ayesha Khan", stars: 5, photo: "", text: "I finally feel like I have a proper system to follow.", image: "img/charts/5.jpeg" },
  { id: 30, name: "Rohini Patil", stars: 4, photo: "", text: "Good focus on risk management and patience.", image: "img/charts/6.jpeg" },
  { id: 31, name: "Naveen Rao", stars: 3, photo: "", text: "My emotional trading has reduced significantly.", image: "img/charts/7.jpeg" },
  { id: 32, name: "Swati Kulkarni", stars: 5, photo: "", text: "Feels like a professional trading framework.", image: "img/charts/8.jpeg" },
  { id: 33, name: "Mohit Jain", stars: 4, photo: "", text: "Strategies are realistic and easy to follow.", image: "img/charts/9.jpeg" },
  { id: 34, name: "Neeraj Gupta", stars: 3, photo: "", text: "Helped me control impulsive trades.", image: "img/charts/10.jpeg" },
  { id: 35, name: "Pankaj Verma", stars: 4, photo: "", text: "My trading decisions are now more logical.", image: "img/charts/11.jpeg" },
  { id: 36, name: "Sonal Mehta", stars: 5, photo: "", text: "The process feels more important than profits now.", image: "img/charts/12.jpeg" },
  { id: 37, name: "Alok Mishra", stars: 4, photo: "", text: "Better control over risk and entries.", image: "img/charts/1.jpeg" },
  { id: 38, name: "Kritika Sharma", stars: 5, photo: "", text: "I feel more confident trading with a plan.", image: "img/charts/2.jpeg" },
  { id: 39, name: "Vinayak Deshpande", stars: 4, photo: "", text: "Trading is calmer and more planned now.", image: "img/charts/3.jpeg" },
  { id: 40, name: "Ritu Malhotra", stars: 3, photo: "", text: "Helped me avoid unnecessary trades.", image: "img/charts/4.jpeg" },
  { id: 41, name: "Ashok Nair", stars: 5, photo: "", text: "Feels like a disciplined system.", image: "img/charts/5.jpeg" },
  { id: 42, name: "Preeti Joshi", stars: 4, photo: "", text: "Improved my patience and decision making.", image: "img/charts/6.jpeg" },
  { id: 43, name: "Raghav Bhat", stars: 3, photo: "", text: "Now I avoid emotional entries.", image: "img/charts/7.jpeg" },
  { id: 44, name: "Nisha Kulkarni", stars: 5, photo: "", text: "More systematic trading approach.", image: "img/charts/8.jpeg" },
  { id: 45, name: "Ajay Srivastava", stars: 4, photo: "", text: "Good focus on structure and discipline.", image: "img/charts/9.jpeg" }
];



/* ---------------- COMPONENT ---------------- */
export const ChartGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem("testimonials");
    return saved ? JSON.parse(saved) : testimonialsData;
  });

  const [form, setForm] = useState({
    name: "",
    text: "",
    rating: 0,
    photo: "",
    image: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = testimonials.slice(startIndex, startIndex + itemsPerPage);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm({ ...form, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleResultUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.text || form.rating === 0) return;

    const newTestimonial = {
      id: Date.now(),
      name: form.name || "Anonymous",
      stars: form.rating,
      photo: form.photo,
      text: form.text,
      image: form.image
    };

    const updated = [newTestimonial, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem("testimonials", JSON.stringify(updated));

    setForm({ name: "", text: "", rating: 0, photo: "", image: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="oq-testimonials">
      <header className="oq-header">
        <span className="highlight">REAL USER EXPERIENCES</span>
        <h2>What Our Users Say</h2>
        <p>Feedback shared by people using OptionQuaant strategies</p>
      </header>

      <div className="oq-grid">
        {currentItems.map((t) => (
          <div key={t.id} className="oq-testimonial-card">
            <div className="oq-user">
              {t.photo ? (
                <img src={t.photo} alt={t.name} className="oq-avatar-img" />
              ) : (
                <div className="oq-avatar-letter">{t.name.charAt(0)}</div>
              )}
              <h4>{t.name}</h4>
              <div className="oq-stars">
                {"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}
              </div>
            </div>

            <p className="oq-text">“{t.text}”</p>

            {t.image && (
              <span className="view-link" onClick={() => setSelectedImage(t.image)}>
                View trade result →
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="oq-pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>← Prev</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next →</button>
      </div>

      {/* -------- REVIEW FORM -------- */}
      <div className="oq-review-block">
        <h2>Share Your Experience</h2>

        {submitted && (
          <div className="review-success">
            <FaCheckCircle /> Thank you! Your review has been added.
          </div>
        )}

        <form className="review-form" onSubmit={handleSubmit}>
          <div className="stars-input">
            {[1,2,3,4,5].map(star => (
              <FaStar
                key={star}
                className={(hoveredRating || form.rating) >= star ? "filled" : ""}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setForm({ ...form, rating: star })}
              />
            ))}
          </div>

          <input
            placeholder="Your name (optional)"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <textarea
            placeholder="Write your review..."
            value={form.text}
            onChange={e => setForm({ ...form, text: e.target.value })}
          />

          {/* Upload DP */}
         <div className="upload-row">
  <label>Upload Profile Photo</label>
  <input type="file" accept="image/*" onChange={handlePhotoUpload} />
</div>

<div className="upload-row">
  <label>Upload Trade Result </label>
  <input type="file" accept="image/*" onChange={handleResultUpload} />
</div>

          <button type="submit">Submit Review</button>
        </form>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Trade Result" className="modal-image" />
            <button className="modal-close">✕</button>
          </div>
        </div>
      )}
    </section>
  );
};