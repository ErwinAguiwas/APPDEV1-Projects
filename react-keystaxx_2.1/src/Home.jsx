import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => (
  <div className="home-container">
    <h2>Welcome to KeyStaxx</h2>
    <p>
      Explore artisan mechanical keyboards crafted for every enthusiast and professional. Our products bring together cutting-edge design, ergonomics, and performance to elevate your typing experience.
    </p>
    <Link to="/products" className="explore-button">Explore Our Products</Link>
  </div>
);

export default Home;
