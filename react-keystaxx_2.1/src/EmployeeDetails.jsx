import React from 'react';
import { useParams } from 'react-router-dom';
import employees from './data/employees';

const EmployeeDetails = () => {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return <h2>Employee not found</h2>;
  }

  return (
    <div className="employee-details">
      <h2>{employee.name}</h2>
      <h3>Position: {employee.position}</h3>
      <h4>Qualifications</h4>
      <p>{employee.qualifications}</p>

      <h4>About the Role</h4>
      <p>
        {employee.id === '1' &&
          'As CEO, Charlie leads KeyStaxx with strategic vision, ensuring the company stays ahead of industry trends and delivers exceptional value to customers.'}
        {employee.id === '2' &&
          'As CTO, Adele oversees the technical direction of KeyStaxx, spearheading innovation in AI and cloud computing solutions.'}
        {employee.id === '3' &&
          'As Head of Marketing, Bruno develops creative strategies to connect KeyStaxx with its audience, strengthening its global presence.'}
        {employee.id === '4' &&
          'As Product Manager, Clint ensures smooth development processes and aligns team efforts with customer needs and company goals.'}
        {employee.id === '5' &&
          'As Lead Developer, Eminem directs the development team in creating cutting-edge, user-focused digital platforms.'}
        {employee.id === '6' &&
          'As Designer, Sofia crafts intuitive and visually appealing designs that enhance the user experience across all KeyStaxx products.'}
      </p>
    </div>
  );
};

export default EmployeeDetails;
