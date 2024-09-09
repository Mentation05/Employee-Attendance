import React, { useState } from "react";
import "./Leave.scss";

const employeesData = [
  {
    id: "#001",
    name: "John Doe",
    date: "20 Dec 2020",
    department: "Design",
    leaveType: "Sick Leave",
    days: 5,
    remaining: 8,
    total: 20,
    taken: 12,
  },
  {
    id: "#003",
    name: "John Smith",
    date: "22 Dec 2020",
    department: "Android Developer",
    leaveType: "Emergency Leave",
    days: 1,
    remaining: 9,
    total: 20,
    taken: 17,
  },
  {
    id: "#004",
    name: "Mike Litorus",
    date: "23 Dec 2020",
    department: "iOS Developer",
    leaveType: "Sick Leave",
    days: 15,
    remaining: 5,
    total: 20,
    taken: 15,
  },
  {
    id: "#002",
    name: "Richard Miles",
    date: "21 Dec 2020",
    department: "Web Developer",
    leaveType: "Parenting Leave",
    days: 3,
    remaining: 7,
    total: 20,
    taken: 12,
  },
  {
    id: "#005",
    name: "Wilmer Deluna",
    date: "24 Dec 2020",
    department: "Team Leader",
    leaveType: "Sick Leave",
    days: 10,
    remaining: 7,
    total: 20,
    taken: 18,
  },
];

const LeaveReport = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); 
  };

  const filteredEmployees = employeesData.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="leave-report">
      <div className="leave-report-header">
        <h2>Leave Report</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search employee..."
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      <table className="leave-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Department</th>
            <th>Leave Type</th>
            <th>No. of Days</th>
            <th>Remaining Leave</th>
            <th>Total Leaves</th>
            <th>Total Leave Taken</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name} {employee.id}</td>
              <td>{employee.date}</td>
              <td>{employee.department}</td>
              <td>
                <span className={`leave-type ${employee.leaveType.replace(" ", "-").toLowerCase()}`}>
                  {employee.leaveType}
                </span>
              </td>
              <td>{employee.days}</td>
              <td>{employee.remaining}</td>
              <td>{employee.total}</td>
              <td>{employee.taken}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LeaveReport;


