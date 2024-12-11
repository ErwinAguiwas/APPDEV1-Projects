import React, { useState } from 'react';


const ReviewForm = ({ type, onSubmit }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      onSubmit({ name, comment, rating });
      setName('');
      setComment('');
      setRating(1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h3>{type === 'product' ? 'Write a Product Review' : 'Write a Company Review'}</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Rating (1-5):</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(Math.min(5, Math.max(1, e.target.value)))}
          min="1"
          max="5"
          required
        />
      </div>
      <div>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
