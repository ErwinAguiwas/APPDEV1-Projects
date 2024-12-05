import React, { useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [gameTitle, setGameTitle] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleAddReview = () => {
    if (gameTitle && reviewText) {
      const currentDate = new Date().toLocaleDateString(); // Automatically get the current date
      setReviews([...reviews, { gameTitle, reviewText, date: currentDate }]);
      setGameTitle('');
      setReviewText('');
    } else {
      alert('Please fill out all fields!');
    }
  };

  return (
    <div className="reviews-container">
      <h1>Game Reviews</h1>
      <div className="review-form">
        <div>
          <label>Game Title:</label>
          <input
            type="text"
            value={gameTitle}
            onChange={(e) => setGameTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Review:</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>
        <button onClick={handleAddReview}>Add Review</button>
      </div>
      <div className="review-list">
        <h2>All Reviews:</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review-item">
              <h3>{review.gameTitle}</h3>
              <p>{review.reviewText}</p>
              <p className="review-date">Reviewed on: {review.date}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}
