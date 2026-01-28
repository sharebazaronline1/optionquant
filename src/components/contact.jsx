import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const Contact = () => {

  return (
    <footer className="oq-footer">
      <div className="oq-container">

        {/* BRAND */}
        <div className="oq-col brand-col">
        <span className="brand-o">O</span>
  <span className="brand-text">ption</span>
  <span className="brand-q">Q</span>
  <span className="brand-text">uaant</span>
          <p className="tagline">Professional Trend Identification System</p>

          <div className="contact-lines">
            <p>💬 <a href="#">Chat on WhatsApp</a></p>
            <p>✉️ <a href="mailto:support@sharebazaaronline.in">support@sharebazaaronline.in</a></p>
          </div>

          <div className="socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* LINKS */}
        <div className="oq-col">
          <h4>Links</h4>
          <ul>
            <li>Disclaimer</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Refund</li>
          </ul>
        </div>

        {/* CALLBACK */}
        <div className="oq-col callback-col">
          <h4>Request a Callback</h4>

          <form className="callback-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Mobile Number" required />
            <button type="submit">📞 Call Me</button>
          </form>

          <p className="tv-note">Charts powered by TradingView</p>
        </div>

      </div>

      <div className="oq-bottom">
        © {new Date().getFullYear()} OptionQuaant — Powered by SharebazaarOnline
      </div>
    </footer>
  );
};
