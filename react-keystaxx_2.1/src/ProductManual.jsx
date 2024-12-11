import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from './data/products';

const ProductManual = () => {
  const { id } = useParams(); 
  const product = products.find((p) => p.id === id); 

  const [reviews, setReviews] = useState([]); 
  const [name, setName] = useState('');
  const [comment, setComment] = useState(''); 

  if (!product) {
    return <h2>Product not found</h2>;
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      setReviews([...reviews, { name, comment }]); 
      setName(''); 
      setComment(''); 
    }
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>Specifications</h3>
      <ul>
        <li><strong>Materials:</strong> {product.materials.join(', ')}</li>
        <li><strong>Switch Type:</strong> {product.switchType}</li>
        <li><strong>Keycaps:</strong> {product.keycaps}</li>
        <li><strong>Connection:</strong> {product.connection}</li>
      </ul>

      <h3>Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Comment:
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit Review</button>
      </form>

      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to leave a review!</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.name}:</strong> {review.comment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductManual;
