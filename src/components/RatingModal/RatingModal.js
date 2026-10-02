'use client';

import { useEffect, useState } from 'react';
import './RatingModal.css';

export default function RatingModal() {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already rated
    const hasRated = localStorage.getItem('hasRated');
    if (hasRated) return;

    // Show modal after 30 seconds (average time spent on portfolio)
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating === 0) return;
    
    // Save to localStorage that user has rated
    localStorage.setItem('hasRated', 'true');
    localStorage.setItem('rating', rating.toString());
    localStorage.setItem('ratingDate', new Date().toISOString());
    
    setSubmitted(true);
    
    // Close modal after showing thank you
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  const handleDismiss = () => {
    // Don't show again for this session
    localStorage.setItem('hasRated', 'true');
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="rating-modal-overlay">
      <div className="rating-modal">
        <button 
          className="rating-modal-close" 
          onClick={handleDismiss}
          aria-label="Close"
        >
          ×
        </button>
        
        {submitted ? (
          <div className="rating-success">
            <div className="success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>Your feedback helps us improve.</p>
          </div>
        ) : (
          <>
            <h3>Rate Your Experience</h3>
            <p>How would you rate your experience on this portfolio?</p>
            
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`star-button ${star <= (hoverRating || rating) ? 'active' : ''}`}
                  onClick={() => handleRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  aria-label={`Rate ${star} stars`}
                >
                  ★
                </button>
              ))}
            </div>
            
            <div className="rating-actions">
              <button 
                className="rating-submit"
                onClick={handleSubmit}
                disabled={rating === 0}
              >
                Submit Rating
              </button>
              <button 
                className="rating-dismiss"
                onClick={handleDismiss}
              >
                Maybe Later
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
