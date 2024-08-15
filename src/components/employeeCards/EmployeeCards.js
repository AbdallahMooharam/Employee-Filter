import React from 'react';

const EmployeeCards = ({ employees, onUpdate, onDelete }) => {
  return (
    <div className="cards-container">
      {employees.map((employee, index) => (
        <div className="card" key={index}>
          <h3>{employee.name}</h3>
          <p><strong>Employment Date:</strong> {employee.employmentDate}</p>
          <p><strong>Salary:</strong> ${employee.salary}</p>
          <p><strong>Experience:</strong> {employee.experience}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <button className="edit-btn" onClick={() => onUpdate(index)}>Edit</button>
          <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCards;
