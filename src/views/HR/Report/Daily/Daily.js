import React, { useState } from 'react';
import "./Daily.scss";
import ReactPaginate from 'react-paginate';

const DailyReport = () => {
  const employeeData = [
    { id: 1, name: 'John Doe', department: 'Design', status: 'Week off', date: '20 Dec 2020' },
    { id: 2, name: 'John Smith', department: 'Android Developer', status: 'Week off', date: '20 Dec 2020' },
    { id: 3, name: 'Mike Litorus', department: 'iOS Developer', status: 'Week off', date: '20 Dec 2020' },
    { id: 4, name: 'Richard Miles', department: 'Web Developer', status: 'Absent', date: '20 Dec 2020' },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = employeeData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(employeeData.length / itemsPerPage);

  return (
    <div className="daily-report">
      <h2>Daily Report</h2>
      <div className="summary">
        <div>Total Employees: 101</div>
        <div>Today Present: 84</div>
        <div>Today Absent: 12</div>
        <div>Today Left: 5</div>
      </div>
      <div className="filters">
        <input type="text" placeholder="Employee" />
        <select>
          <option value="">Select Department</option>
          <option value="Design">Design</option>
          <option value="Android Developer">Android Developer</option>
          <option value="iOS Developer">iOS Developer</option>
        </select>
        <input type="date" />
        <input type="date" />
        <button>Search</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.date}</td>
              <td>{employee.department}</td>
              <td>
                <span className={`status ${employee.status.toLowerCase().replace(' ', '-')}`}>
                  {employee.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default DailyReport;
