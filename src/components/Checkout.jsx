import React, { useState,useEffect } from "react";
import { FaLock, FaCheckCircle, FaShieldAlt, FaSpinner,FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import QRCode from "qrcode";

export const CheckOut = () => {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan || {
    name: "OptionQuant Premium",
    price: 14999,
    isAnnual: false,
  };


  const API_URL = "https://script.google.com/macros/s/AKfycbxEEDL-a8gHibi3YkdyrVYdx2tWXd0g4W49XrGNtYQbinzBmiFA4nfQkmJ8cDJ7omk/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coupon: "",
  });

  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
    const [qrDataURL, setQrDataURL] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showQRPopup, setShowQRPopup] = useState(false);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [tradeviewUserid, setTradeviewUserId] = useState("");
  const [orderId] = useState(() =>
    `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const applyCoupon = () => {
    setIsLoading(true);
    setTimeout(() => {
      const coupon = formData.coupon.trim().toLowerCase();
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

// Add this near your other useEffects
useEffect(() => {
  if (!showQRPopup) {
    setTransactionId("");
    setTradeviewUserId("");
    setPaymentSubmitted(false);
  }
}, [showQRPopup]);

  const handlePayClick = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions before proceeding.");
      return;
    }

    setIsLoading(true);

    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          action: "create",
          orderId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          plan: selectedPlan.name,
          amount: finalTotal,
          coupon: formData.coupon,
        }),
      });

      setShowQRPopup(true);
      setPaymentSubmitted(false);
    } catch (err) {
      alert("Failed to initiate order");
    }

    setIsLoading(false);
  };

  const handleQRSubmit = async (e) => {
  e.preventDefault();

  if (!transactionId.trim() || !tradeviewUserid.trim()) {
    alert("Please enter both Transaction ID / UTR and Tradeview UserID");
    return;
  }

  setIsLoading(true);

  try {
    await fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        action: "update",
        orderId,
        transactionId,
        tradeviewUserid,
      }),
    });

   
    setTransactionId("");
    setTradeviewUserId("");

    // Show success message
    setPaymentSubmitted(true);

    // Auto close modal after 5 seconds and reset everything
    setTimeout(() => {
      setShowQRPopup(false);
      
    }, 5000);

  } catch (err) {
    alert("Failed to submit payment details. Please try again.");
  }

  setIsLoading(false);
};

  // Calculations
  const basePrice = selectedPlan.price;
  const discountAmount = basePrice * (discount / 100);
  const priceAfterDiscount = basePrice - discountAmount;
  const gstAmount = priceAfterDiscount * 0.18;
  const finalTotal = Math.round(priceAfterDiscount + gstAmount);
const upiString = `upi://pay?pa=karunya.tm3-3@okicici&pn=OptionQuant&tn=${orderId}&am=${finalTotal}&cu=INR`;
 useEffect(() => {
    const generateQR = async () => {
      try {
        const url = await QRCode.toDataURL(upiString, {
          width: 200,        
          margin: 2,        
          color: {
            dark: "#000000", 
            light: "#FFFFFF" 
          },
          errorCorrectionLevel: "H" // high for easier scanning
        });
        setQrDataURL(url);
      } catch (err) {
        console.error("QR generation failed", err);
      }
    };
    generateQR();
  }, [upiString]);
 

  return (
    <section className="checkout-section">
      <div className="container">
        <div className="progress-indicator">
          <div className="progress-step active">
            <FaCheckCircle /> Details
          </div>
          <div className="progress-line" />
          <div className="progress-step">
            <FaLock /> Confirmation
          </div>
        </div>

        <header className="checkout-header">
          <h1>
            <FaShieldAlt className="trust-icon" /> Secure Checkout
          </h1>
          <p>Complete your purchase safely in just a few steps</p>
        </header>

       

        <form onSubmit={handlePayClick} className="checkout-form">
          <div className="form-grid">
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
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div className="form-field coupon-field">
                <label htmlFor="coupon">Coupon Code (optional)</label>
                <div className="coupon-row">
                  <input
                    id="coupon"
                    type="text"
                    name="coupon"
                    value={formData.coupon}
                    onChange={handleChange}
                    placeholder="Enter code"
                  />
                  <button
                    type="button"
                    className="btn-apply"
                    onClick={applyCoupon}
                    disabled={isLoading || couponApplied}
                  >
                    {isLoading ? <FaSpinner className="spin" /> : "Apply"}
                  </button>
                </div>
                {couponApplied && (
                  <p className="coupon-success">
                    <FaCheckCircle /> Coupon applied
                  </p>
                )}
              </div>

              <div className="terms-box">
                <label className="terms-label">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                  <span>
                    I confirm that I have read, understood, and agreed to the{" "}
                    <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                      Terms & Conditions
                    </a>
                    ,{" "}
                    <a href="/refund" target="_blank" rel="noopener noreferrer">
                      Refund Policy
                    </a>
                    ,{" "}
                    <a href="/disclaimer" target="_blank" rel="noopener noreferrer">
                      Disclaimer
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </div>
            </div>

            <div className="order-summary">
              <h2>Order Summary</h2>

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

              <div className="summary-divider" />

              <div className="summary-total">
                <span>Total (incl. GST)</span>
                <span className="total-value">₹{finalTotal.toLocaleString()}</span>
              </div>

              <button
                type="submit"
                className="btn-pay"
                disabled={isLoading || !termsAccepted}
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="spin" /> Processing...
                  </>
                ) : (
                  <>
                    <FaLock /> Pay Securely
                  </>
                )}
              </button>

              {!termsAccepted && (
                <p className="terms-warning">
                  Please accept the Terms & Conditions to proceed
                </p>
              )}

              <div className="secure-badges">
                <div><FaShieldAlt /> 100% Secure</div>
                <div><FaLock /> Encrypted</div>
              </div>
            </div>
          </div>
        </form>

        <div className="fyers-note">
          <p>
            Note: For instant order placement and precise trade execution, a Fyers trading account is required.
          </p>
          <a
            href="https://signup.fyers.in/?utm-source=AP-Leads&utm-medium=AP3297"
            className="fyers-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Fyers Account →
          </a>
          <p>Get 10% extra discount on OptionQuant by opening a Fyers account.</p>
        </div>
      </div>

      {showQRPopup && (
        <div className="qr-modal-overlay" onClick={() => setShowQRPopup(false)}>
          <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowQRPopup(false)}>
            <FaTimes size={18} />
            </button>

            <h3>Complete Payment – {selectedPlan.name}</h3>

            {paymentSubmitted ? (
              <div className="qr-success-message">
                <FaCheckCircle size={48} className="success-icon" />
                <h4>Payment Details Received!</h4>
                <p>We will verify your payment and activate your account within 24 hours.</p>
                <p className="auto-close-note">This window will close automatically...</p>
              </div>
            ) : (
              <>
                <div className="qr-amount">
                  Amount to Pay: <strong>₹{finalTotal.toLocaleString()}</strong>
                </div>

                <div className="qr-code-container">
                {qrDataURL ? (
        <img src={qrDataURL} alt="UPI QR Code" style={{ width: 300, height: 300 }} />
      ) : (
        <p>Generating QR...</p>
      )}


                  <p className="qr-instruction">Scan & Pay via any UPI app</p>
                </div>

             <form onSubmit={handleQRSubmit} className="qr-form">
  <label htmlFor="transaction-id">Transaction ID / UTR Number</label>
  <input
    id="transaction-id"
    type="text"
    placeholder="Enter your Transaction ID / UTR"
    value={transactionId}
    onChange={(e) => setTransactionId(e.target.value.trim())}
    required
  />

  <label htmlFor="tradeviewUser-id">Tradeview UserID</label>
  <input
    id="tradeviewUser-id"
    type="text"
    placeholder="Enter your Tradeview UserID"
    value={tradeviewUserid}
    onChange={(e) => setTradeviewUserId(e.target.value.trim())}
    required
  />

  <button 
    type="submit" 
    className="btn-submit-qr" 
    disabled={!transactionId.trim() || !tradeviewUserid.trim() || isLoading}
  >
    {isLoading ? "Submitting..." : "Submit Payment Details"}
  </button>

  {/* Hover message when button is disabled */}
  {(!transactionId.trim() || !tradeviewUserid.trim()) && !isLoading && (
    <p className="form-hint">
      Please enter both Transaction ID / UTR and Tradeview UserID to submit
    </p>
  )}
</form>
               
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};