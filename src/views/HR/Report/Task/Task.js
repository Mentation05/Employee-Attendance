import React, { useState } from 'react';
import "./Task.scss";

const TaskReport = () => {
  const tasks = [
    { id: 1, name: 'Employee Management', startDate: '26 Mar 2019', endDate: '26 Apr 2021', status: 'Active', assignedTo: 'https://images.unsplash.com/photo-1724709972210-4beb408de580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Attendance Development', startDate: '26 Mar 2019', endDate: '26 Apr 2021', status: 'Active', assignedTo: 'https://images.unsplash.com/photo-1633242389742-c16e2d0a5bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Project Management', startDate: '01 Jan 2020', endDate: '01 Jan 2022', status: 'Active', assignedTo: 'https://images.unsplash.com/photo-1724709972210-4beb408de580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Software Development', startDate: '15 Jun 2020', endDate: '15 Jun 2023', status: 'Active', assignedTo: 'https://images.unsplash.com/photo-1633242389742-c16e2d0a5bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 2;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="task-report">
      <div className="search-bar">
        <input type="text" placeholder="Project Name" />
        <select>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
        <button>Search</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Assigned To</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map((task, index) => (
            <tr key={task.id}>
              <td>{indexOfFirstTask + index + 1}</td>
              <td>{task.name}</td>
              <td>{task.startDate}</td>
              <td>{task.endDate}</td>
              <td><span className={`status ${task.status.toLowerCase()}`}>{task.status}</span></td>
              <td><img src={task.assignedTo} alt="Assigned To" className="assigned-to" /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
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

export default TaskReport;
