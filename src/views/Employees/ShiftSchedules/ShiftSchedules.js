import React, { useState } from 'react';
import './ShiftSchedules.scss';

const employees = [
  { name: "Bernardo Galaviz", role: "Web Developer" },
  { name: "Jeffrey Warden", role: "Web Developer" },
  { name: "John Doe", role: "Web Designer" },
  { name: "John Smith", role: "Android Developer" },
  { name: "Mike Litorus", role: "IOS Developer" },
  { name: "Richard Miles", role: "HR Manager" },
  // Add more employee data as needed
];

const departments = ["Finance", "HR", "IT", "Management"]; // Department options

const ShiftSchedule = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDepartment, setSelectedDepartment] = useState(""); // Track selected department
  const [fromDate, setFromDate] = useState(""); // Track selected from date
  const [toDate, setToDate] = useState(""); // Track selected to date
  const itemsPerPage = 3; // Number of employees per page

  // Get current employees for pagination
  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle department selection
  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  // Handle date changes
  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  // Calculate total pages
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  return (
    <div className="shift-schedule">
      <div className="search-bar">
        <input type="text" placeholder="Employee" />

        {/* Department dropdown */}
        <select value={selectedDepartment} onChange={handleDepartmentChange}>
          <option value="">Select Department</option>
          {departments.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>

        {/* From Date */}
        <input
          type="date"
          value={fromDate}
          onChange={handleFromDateChange}
          placeholder="From Date"
        />

        {/* To Date */}
        <input
          type="date"
          value={toDate}
          onChange={handleToDateChange}
          placeholder="To Date"
        />

        <button>Search</button>
      </div>

      <table className="schedule-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Fri 21</th>
            <th>Sat 22</th>
            <th>Sun 23</th>
            <th>Mon 24</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee, index) => (
            <tr key={index}>
              <td>
                <div className="employee">
                  <span>{employee.name}</span>
                  <span>{employee.role}</span>
                </div>
              </td>
              <td>
                <div className="shift">
                  <span>6:30 am - 9:30 pm</span>
                  <span>(14 hrs 15 mins)</span>
                  <span>Web Designer - SMARTHR</span>
                </div>
              </td>
              <td><button className="add-shift-btn">+</button></td>
              <td><button className="add-shift-btn">+</button></td>
              <td><button className="add-shift-btn">+</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShiftSchedule;
