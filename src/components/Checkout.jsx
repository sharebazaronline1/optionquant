import React, { useState } from "react";
import { FaCreditCard, FaLock, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const CheckOut = () => {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan || {
    name: "OptionQuant Premium",
    price: 14999,
    isAnnual: false,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coupon: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const applyCoupon = () => {
    setIsLoading(true);
    setTimeout(() => {
      const coupon = formData.coupon.toLowerCase().trim();
      const validCoupons = ["option10", "save10", "quant10", "prem10"];

      if (validCoupons.includes(coupon)) {
        setDiscount(10);
        setCouponApplied(true);
      } else {
        alert("Invalid coupon code");
      }
      setIsLoading(false);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Integrate real payment gateway here (e.g., Razorpay)
    setTimeout(() => {
      alert(`Payment of ₹${finalTotal.toLocaleString()} processed for ${selectedPlan.name}!`);
      setIsLoading(false);
    }, 1500);
  };

  // Calculations
  const basePrice = selectedPlan.price;
  const discountAmount = basePrice * (discount / 100);
  const priceAfterDiscount = basePrice - discountAmount;
  const gstAmount = priceAfterDiscount * 0.18; // 18% GST
  const finalTotal = Math.round(priceAfterDiscount + gstAmount); // Rounded final total

  return (
    <section className="checkout-section">
      <div className="container">
        {/* Progress Indicator */}
        <div className="progress-indicator">
          <div className="progress-step active">
            <FaCheckCircle /> Details
          </div>
          <div className="progress-line"></div>
          <div className="progress-step">
            <FaLock /> Payment
          </div>
        </div>

        <header className="checkout-header">
          <h1><FaShieldAlt className="trust-icon" /> Secure Checkout</h1>
          <p>Complete your purchase safely and quickly</p>
          <div className="gold-underline"></div>
        </header>

        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-grid">
            {/* Billing Details */}
            <div className="billing-details">
              <h2>Your Details</h2>
              <p className="trust-text">All information is encrypted and secure</p>

              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 34576 43246"
                  required
                />
              </div>

              <div className="form-field coupon-field">
                <label htmlFor="coupon">Coupon Code</label>
                <input
                  id="coupon"
                  type="text"
                  name="coupon"
                  value={formData.coupon}
                  onChange={handleChange}
                  placeholder="Enter code (optional)"
                />
                <button
                  type="button"
                  className="btn-apply"
                  onClick={applyCoupon}
                  disabled={isLoading}
                >
                  {isLoading ? "Applying..." : "Apply"}
                </button>
              </div>

              {couponApplied && (
                <p className="coupon-success">
                  <FaCheckCircle /> Coupon applied! {discount}% off
                </p>
              )}
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <h2>Summary</h2>

              <div className="summary-item">
                <span>{selectedPlan.name}</span>
                <span>₹{basePrice.toLocaleString()}</span>
              </div>

              {discount > 0 && (
                <div className="summary-item discount">
                  <span>Discount ({discount}%)</span>
                  <span>-₹{discountAmount.toLocaleString()}</span>
                </div>
              )}

              <div className="summary-item">
                <span>GST (18%)</span>
                <span>₹{Math.round(gstAmount).toLocaleString()}</span>
              </div>

              <hr className="summary-divider" />

              <div className="summary-total">
                <span>Total (incl. GST)</span>
                <span>₹{finalTotal.toLocaleString()}</span>
              </div>

              {/* Payment Methods */}
              <div className="payment-methods">
                <h3>Choose Payment</h3>
                <label className={`method-option ${paymentMethod === "upi" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                  />
                  <span>UPI / Net Banking</span>
                </label>

                <label className={`method-option ${paymentMethod === "card" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                  />
                  <span>Credit / Debit Card</span>
                </label>
              </div>

              <button type="submit" className="btn-pay" disabled={isLoading}>
                <FaLock className="lock-icon" /> {isLoading ? "Processing..." : "Pay Securely"}
              </button>

              <p className="secure-note">
                <FaCreditCard /> Payments processed securely
              </p>

              <div className="trust-indicators">
                <span><FaShieldAlt /> 100% Secure</span>
                <span><FaLock /> Encrypted</span>
              </div>
            </div>
          </div>
        </form>

        {/* Fyers Note */}
        <div className="fyers-note">
          <p>
            Note: For instant order placement and precise trade execution, a Fyers trading account is required.
          </p>
          <a href="#" className="fyers-link">Open Fyers Account →</a>
          <p>Get additional 10% discount on the OptionQuant Buy & Sell Signal Indicator.</p>
        </div>
      </div>
    </section>
  );
};