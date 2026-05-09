import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

import {
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";

import { ImSpinner2 } from "react-icons/im";

const Signals = () => {
  const [signals, setSignals] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchSignals = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("trading_signals")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      if (error) {
        console.error(error);
      } else {
        setSignals(data || []);
      }

      setLoading(false);
    };

    fetchSignals();
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === signals.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? signals.length - 1 : prev - 1
    );
  };

  return (
    <div className="signals-page">

      {/* HERO */}
      <section className="signals-hero">
        <div className="signals-badge">
          LIVE MARKET SIGNALS
        </div>

        <h2>
          Professional Trading Signals
        </h2>

        <p>
          Real-time market opportunities shared by our analysts
        </p>
      </section>

      {/* CONTENT */}
      <section className="signals-wrapper">

        {loading ? (
          <div className="signals-loading">
            <ImSpinner2
              className="spin"
              size={42}
            />
          </div>
        ) : signals.length === 0 ? (
          <div className="signals-empty">
            No trading signals available
          </div>
        ) : (
          <div className="signals-carousel">

            {/* LEFT */}
            <button
              className="carousel-arrow"
              onClick={prevSlide}
            >
              <FaChevronLeft />
            </button>

            {/* CARD */}
            <div className="signal-card">

              {/* IMAGE */}
              <div
                className="signal-image-wrap"
                onClick={() =>
                  setSelectedImage(
                    signals[current]?.image_url
                  )
                }
              >
                <img
                  src={signals[current]?.image_url}
                  alt={signals[current]?.title}
                  className="signal-image"
                />

                <div className="signal-overlay">
                  <FaExpand size={18} />
                  <span>View Full Signal</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="signal-body">

                <div className="signal-meta-top">

                  <div className="signal-date">
                    <FaCalendarAlt size={12} />

                    <span>
                      {new Date(
                        signals[current]?.created_at
                      ).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                </div>

                <h3 className="signal-title">
                  {signals[current]?.title}
                </h3>
              </div>
            </div>

            {/* RIGHT */}
            <button
              className="carousel-arrow"
              onClick={nextSlide}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="signal-modal"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="signal-modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="signal-close"
              onClick={() =>
                setSelectedImage(null)
              }
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Signal"
              className="signal-modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Signals;