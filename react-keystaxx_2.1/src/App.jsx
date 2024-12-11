import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductListing from './ProductListing';
import ProductManual from './ProductManual';
import Reviews from './Reviews';
import CompanyProfile from './CompanyProfile';
import EmployeeDetails from './EmployeeDetails';
import Developer from './Developer';
import Header from './Header';
import Footer from './Footer';
import './App.css';



const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductManual />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/company-profile/:id" element={<EmployeeDetails />} />
        <Route path="/developers" element={<Developer />} />
       
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
