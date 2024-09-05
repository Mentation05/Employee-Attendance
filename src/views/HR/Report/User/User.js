import React from 'react'
import "./User.scss";

const UserReport = () => {
  return (
    <div className="user-report">
      <div className="main-content">
        <div className="report-content">
          <h2>User Report</h2>
          <div className="breadcrumb">Dashboard / User Reports</div>
          <div className="filter">
            <label>User Role</label>
            <select>
              <option>Name1</option>
              <option>Name2</option>
            </select>
            <button className="btn-search">Search</button>
          </div>
          <table className="user-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Role</th>
                <th>Designation</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Barry Cuda Global Technologies</td>
                <td>Global Technologies</td>
                <td>barrycuda@example.com</td>
                <td><span className="badge client">Client</span></td>
                <td>CEO</td>
                <td><span className="status active">Active</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Daniel Porter Admin</td>
                <td>Focus Technologies</td>
                <td>danielporter@example.com</td>
                <td><span className="badge admin">Admin</span></td>
                <td>Admin Manager</td>
                <td><span className="status active">Active</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserReport;

