import React, { useState } from 'react';
import ReviewForm from './ReviewForm';


const Reviews = () => {
  const [companyReviews, setCompanyReviews] = useState([]);

  const handleCompanyReviewSubmit = (review) => {
    setCompanyReviews([...companyReviews, review]);
  };

  return (
    <div>

      <h2>Company Reviews</h2>
      <ReviewForm type="company" onSubmit={handleCompanyReviewSubmit} />
      <div>
        {companyReviews.length === 0 ? (
          <p>No company reviews yet. Share your thoughts!</p>
        ) : (
          <ul>
            {companyReviews.map((review, index) => (
              <li key={index}>
                <strong>{review.name}</strong> ({review.rating}/5): {review.comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reviews;
