import React, { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData(initialState);
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="optionquant-contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2>Get in Touch</h2>
          <p>Send us a message and we’ll respond shortly.</p>
        </div>

        {/* Layout */}
        <div className="contact-layout">
          {/* Form */}
          <div className="form-panel">
            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="info-panel">
            <h3>Contact Info</h3>

            <div className="info-line">
              <i className="fas fa-box"></i>
              <span>SharebazaarOnline</span>
            </div>

          

            <div className="info-line">
              <i className="fas fa-envelope"></i>
              <a href="mailto:support@optionquant.in">
                support@sharebazaaronline.in
              </a>
            </div>

            <div className="social-row">
              <a href="#" className="social-btn facebook" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-btn twitter" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-btn youtube" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-bar">
        <p>
          © {new Date().getFullYear()} OptionQuant — Powered by
          SharebazaarOnline.com
        </p>
      </footer>
    </section>
  );
};
