import React, { useState } from 'react';
import "./EmployeeLeave.scss";

const LeavesEmployee = () => {
  const [leaves, setLeaves] = useState([
    { type: 'Casual Leave', from: '8 Mar 2019', to: '9 Mar 2019', days: '2 days', reason: 'Going to Hospital', status: 'New', approvedBy: 'Richard Miles' },
    // Add other leaves here...
  ]);

  const handleAddLeave = () => {
    // Logic for adding a new leave (e.g., open a modal)
  };

  const handleEdit = (index) => {
    // Logic for editing the leave at index
  };

  const handleDelete = (index) => {
    // Logic for deleting the leave at index
  };

  return (
    <div className="leaves-employee">
      <div className="header">
        <h2>Leaves</h2>
        <button className="add-leave-button" onClick={handleAddLeave}>+ Add Leave</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Leave Type</th>
            <th>From</th>
            <th>To</th>
            <th>No of Days</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Approved by</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave, index) => (
            <tr key={index}>
              <td>{leave.type}</td>
              <td>{leave.from}</td>
              <td>{leave.to}</td>
              <td>{leave.days}</td>
              <td>{leave.reason}</td>
              <td><span className={`status ${leave.status.toLowerCase()}`}>{leave.status}</span></td>
              <td>{leave.approvedBy}</td>
              <td>
                <div className="actions">
                  <button className="action-button">...</button>
                  <div className="action-dropdown">
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeavesEmployee;

