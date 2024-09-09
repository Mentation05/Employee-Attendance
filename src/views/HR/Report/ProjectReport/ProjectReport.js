// ProjectReports.js
import React, { useState } from 'react';
import './ProjectReport.scss';

const projectData = [
  { id: 1, title: 'Hospital Administration', client: 'Global Technologies', startDate: '9 Jan 2021', endDate: '10 Apr 2021', status: 'Active', teamCount: 15 },
  { id: 2, title: 'Office Management', client: 'Delta Infotech', startDate: '10 Dec 2021', endDate: '2 May 2021', status: 'Active', teamCount: 15 },
  { id: 3, title: 'Project 3', client: 'Client 3', startDate: '1 Jan 2021', endDate: '1 May 2021', status: 'Active', teamCount: 12 },
  { id: 4, title: 'Project 4', client: 'Client 4', startDate: '15 Feb 2021', endDate: '20 June 2021', status: 'Active', teamCount: 10 },
];

const ProjectReports = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2); 
  const totalPages = Math.ceil(projectData.length / itemsPerPage);

  const currentData = projectData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="project-reports">
      <div className="header">
        <h2>Project Reports</h2>
        <p>Dashboard / Project Reports</p>
      </div>

      <div className="filters">
        <input type="text" placeholder="Project Name" className="filter-input" />
        <select className="filter-select">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button className="search-button">Search</button>
      </div>

      <table className="project-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Title</th>
            <th>Client Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((project, index) => (
            <tr key={project.id}>
              <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
              <td>{project.title}</td>
              <td>{project.client}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
              <td><span className="status active">{project.status}</span></td>
              <td>
                <div className="team">
                  <span className="team-count">+{project.teamCount}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className="prev-btn" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button className="next-btn" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectReports;
