import React from 'react';
import { Link } from 'react-router-dom';
import products from './data/products';


const ProductListing = () => (
  <div>
    <h2>Our Products</h2>
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <ul>
            <li><strong>Switch Type:</strong> {product.switchType}</li>
            <li><strong>Keycaps:</strong> {product.keycaps}</li>
            <li><strong>Connection:</strong> {product.connection}</li>
          </ul>
          <Link to={`/products/${product.id}`} className="details-link">
            View Details
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default ProductListing;
