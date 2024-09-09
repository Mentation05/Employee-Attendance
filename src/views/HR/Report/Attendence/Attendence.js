import React, { useState } from "react";
import "./Attendence.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AttendanceReport = () => {
  const [month, setMonth] = useState(new Date());
  const [year, setYear] = useState(new Date().getFullYear());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; 

  const data = [
    { date: "1 Jan 2020", clockIn: "-", clockOut: "-", workStatus: "-" },
    { date: "2 Jan 2020", clockIn: "-", clockOut: "-", workStatus: "-" },
    { date: "3 Jan 2020", clockIn: "-", clockOut: "-", workStatus: "Week Off" },
    { date: "4 Jan 2020", clockIn: "-", clockOut: "-", workStatus: "Week Off" },
    { date: "5 Jan 2020", clockIn: "-", clockOut: "-", workStatus: "-" },
    { date: "6 Jan 2020", clockIn: "-", clockOut: "-", workStatus: "-" },
    { date: "7 Jan 2020", clockIn: "-", clockOut: "-", workStatus: "-" },
    { date: "8 Jan 2020", clockIn: "-", clockOut: "-", workStatus: "-" },
    { date: "9 Jan 2020", clockIn: "-", clockOut: "-", workStatus: "-" },
    { date: "10 Jan 2020", clockIn: "-", clockOut: "-", workStatus: "-" },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="attendance-report">
      <div className="header">
        <h1>Attendance Reports</h1>
        <div className="filters">
          <input type="text" placeholder="Employee Name" />
          <DatePicker
            selected={month}
            onChange={(date) => setMonth(date)}
            dateFormat="MMMM"
            showMonthYearPicker
          />
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Year"
          />
          <button className="search-btn">SEARCH</button>
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Clock In</th>
              <th>Clock Out</th>
              <th>Work Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((entry, index) => (
              <tr key={index}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{entry.date}</td>
                <td>{entry.clockIn}</td>
                <td>{entry.clockOut}</td>
                <td className={entry.workStatus === "Week Off" ? "week-off" : ""}>
                  {entry.workStatus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AttendanceReport;

