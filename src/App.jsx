import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { LifetimeCTA } from "./components/LifetimeCTA";
import { HowToTrade } from "./components/HowToTrade";
import { Markets } from "./components/Markets";
import {RefundPolicy} from "./components/RefundPolicy"
import {ChartCarousel} from "./components/ChartGallery"
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

// Smooth scroll setup (unchanged)
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// Simple 404 page
const NotFound = () => (
  <div style={{ textAlign: "center", padding: "100px 20px", color: "#fff" }}>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to="/" style={{ color: "#ffc107", fontSize: "18px" }}>
      ← Back to Home
    </Link>
  </div>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);

    // Clean hash from URL if present (from old anchor links)
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <Router>
      {/* Navigation is always visible */}
      <Navigation />

      <Routes>
        {/* Home / Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Header data={landingPageData.Header} />
              <Features data={landingPageData.Features} />
              <Markets />
              <HowToTrade />
              <LifetimeCTA />
              <Contact data={landingPageData.Contact} />
            </>
          }
        />

        {/* Individual pages */}
        <Route path="/features" element={<Features data={landingPageData.Features} />} />
        <Route path="/markets" element={<Markets />} />
         <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/how-to-trade" element={<HowToTrade />} />
        <Route path="/gallery" element={<ChartCarousel />} />
        <Route path="/lifetime" element={<LifetimeCTA />} />
        <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;