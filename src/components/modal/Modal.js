import React from 'react';
import './Modal.css';

const Modal = ({ employee, onSave, onClose, onInputChange }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{employee.index !== undefined ? 'Edit Employee' : 'Add Employee'}</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={onInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Employment Date</label>
          <input
            type="date"
            name="employmentDate"
            value={employee.employmentDate}
            onChange={onInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={onInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Experience</label>
          <select
            name="experience"
            value={employee.experience}
            onChange={onInputChange}
            className="form-control"
          >
            <option value="Less than a year">Less than a year</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3 years or above">3 years or above</option>
          </select>
        </div>
        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={onInputChange}
            className="form-control"
          />
        </div>
        <button onClick={onSave} className="save-btn">Save</button>
      </div>
    </div>
  );
};

export default Modal;
