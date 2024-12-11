import React from 'react';
import { Link } from 'react-router-dom';
import employees from './data/employees';

const CompanyProfile = () => (
  <div className="company-profile">
    <h2>Company Profile</h2>
    <p>
      At KeyStaxx, we take pride in our passionate and skilled team that
      combines innovation, creativity, and expertise to deliver exceptional
      products.
    </p>
    <h3>Meet the Team</h3>
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>
          <Link to={`/company-profile/${employee.id}`}>
            <strong>{employee.name}</strong> - <span>{employee.position}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default CompanyProfile;
