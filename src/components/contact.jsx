import { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [status, setStatus] = useState(""); // success message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdt07P9r4dpumMjaQ96Xku0nzpGn4ojgPUJUXLWeuJBdP5zBw/formResponse";

    const data = new URLSearchParams();
    data.append("entry.1695068244", formData.name);
    data.append("entry.499238012", formData.email);
    data.append("entry.799755491", formData.mobile);

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: data,
    })
      .then(() => {
        setStatus(" Thank you! We will contact you shortly.");
        setFormData({ name: "", email: "", mobile: "" });
      })
      .catch(() => {
        setStatus(" Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <footer id="contact" className="oq-footer">
      <div className="oq-container">

        {/* BRAND */}
        <div className="oq-col brand-col">
          <span className="brand-o">O</span>
          <span className="brand-text">ption</span>
          <span className="brand-q">Q</span>
          <span className="brand-text">uaant</span>

          <p className="tagline">Professional Trend Identification System</p>

          <div className="contact-lines">
            <p>💬 <a href="https://wa.me/919511480021">Chat on WhatsApp</a></p>
            <p>✉️ <a href="mailto:support@sharebazaaronline.in">support@sharebazaaronline.in</a></p>
          </div>

          <div className="socials">
            <a href="/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="/" aria-label="Instagram"><FaInstagram /></a>
            <a href="/" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* LINKS */}
        <div className="oq-col">
          <h4>Links</h4>
          <ul>
            <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
            <li><a href="/refund">Refund</a></li>
            <li><a href="/disclaimer-privacy">Disclaimer & Privacy</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>

        {/* CALLBACK FORM */}
        <div className="oq-col callback-col">
          <h4>Request a Callback</h4>

          <form className="callback-form" onSubmit={handleSubmit}>
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

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "📞 Call Me"}
            </button>

            {/* ✅ Success / Error Message */}
            {status && <p className="form-status">{status}</p>}
          </form>

          
        </div>

      </div>

      <div className="oq-bottom">
        © {new Date().getFullYear()} OptionQuaant — Powered by SharebazaarOnline
      </div>
    </footer>
  );
};
