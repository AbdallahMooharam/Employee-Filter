import React, { useState, useEffect } from 'react';
import FiltersPanel from './components/filtersPanel/FiltersPanel';
import EmployeeCards from './components/employeeCards/EmployeeCards';
import employeesData from './components/employees.json/Employees.json';
import './App.css';
import Modal from './components/modal/Modal'; // Import the Modal component

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEmployees(employeesData);
    setFilteredEmployees(employeesData);
  }, []);

  const filterEmployees = (filters) => {
    const filtered = employees.filter(employee => {
      return (
        (!filters.name || employee.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.department || employee.department === filters.department) &&
        (!filters.employmentDate || employee.employmentDate === filters.employmentDate) &&
        (!filters.salary || employee.salary.toString() === filters.salary) &&
        (!filters.experience.length || filters.experience.includes(employee.experience))
      );
    });
    setFilteredEmployees(filtered);
  };

  const clearFilters = () => {
    setFilteredEmployees(employees);
  };

  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
  };

  const handleUpdate = (index) => {
    const employeeToEdit = employees[index];
    setEditEmployee({ ...employeeToEdit, index });
    setIsEditing(true);
    setShowModal(true);
  };

  const handleSave = () => {
    if (isEditing) {
      const updatedEmployees = [...employees];
      updatedEmployees[editEmployee.index] = editEmployee;
      setEmployees(updatedEmployees);
      setFilteredEmployees(updatedEmployees);
    } else {
      const newEmployee = { ...editEmployee };
      setEmployees([...employees, newEmployee]);
      setFilteredEmployees([...employees, newEmployee]);
    }
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setEditEmployee({ ...editEmployee, [e.target.name]: e.target.value });
  };

  const handleAddEmployee = () => {
    setEditEmployee({ name: '', employmentDate: '', salary: '', experience: '', department: '' });
    setIsEditing(false);
    setShowModal(true);
  };

  return (
    <div>
      <nav className="navbar">
        <h1>Employee Filter</h1>
        <FiltersPanel onFilter={filterEmployees} onClear={clearFilters} />
        <button className="add-btn" onClick={handleAddEmployee}>Add Employee</button>
      </nav>

      <div className="container">
        <EmployeeCards
          employees={filteredEmployees}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>

      {showModal && (
        <Modal
          employee={editEmployee}
          onSave={handleSave}
          onClose={() => setShowModal(false)}
          onInputChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default App;
