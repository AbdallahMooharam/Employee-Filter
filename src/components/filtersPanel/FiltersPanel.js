import React, { useState } from 'react';

const FiltersPanel = ({ onFilter, onClear }) => {
  const [filters, setFilters] = useState({
    name: '',
    department: '',
    employmentDate: '',
    salary: '',
    experience: [],
  });

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
      setFilters({
        ...filters,
        experience: checked
          ? [...filters.experience, value]
          : filters.experience.filter((exp) => exp !== value),
      });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form className="filters-panel" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={filters.name}
        onChange={handleFilterChange}
      />
      <select
        name="department"
        value={filters.department}
        onChange={handleFilterChange}
      >
        <option value="">All Departments</option>
        <option value="Finance">Finance</option>
        <option value="IT">IT</option>
      </select>
      <input
        type="date"
        name="employmentDate"
        value={filters.employmentDate}
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={filters.salary}
        onChange={handleFilterChange}
      />
      <label>
        <input
          type="checkbox"
          name="experience"
          value="Less than a year"
          checked={filters.experience.includes("Less than a year")}
          onChange={handleFilterChange}
        />
        Less than a year
      </label>
      <label>
        <input
          type="checkbox"
          name="experience"
          value="1-3 years"
          checked={filters.experience.includes("1-3 years")}
          onChange={handleFilterChange}
        />
        1-3 years
      </label>
      <label>
        <input
          type="checkbox"
          name="experience"
          value="3 years or above"
          checked={filters.experience.includes("3 years or above")}
          onChange={handleFilterChange}
        />
        3 years or above
      </label>
      <button type="submit">Filter</button>
      <button type="button" onClick={onClear}>Clear</button>
    </form>
  );
};

export default FiltersPanel;
