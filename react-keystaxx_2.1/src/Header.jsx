import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>KeyStaxx || Aguiwas E.</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/company-profile">Company Profile</Link>
      <Link to="/developers">Developers</Link>
    </nav>
  </header>
);

export default Header;
