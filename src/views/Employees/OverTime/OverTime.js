import React from 'react';
import './OverTime.scss';

function Overtime() {
  return (
    <div className="overtime-container">
      <div className="header">
        <h1>Overtime</h1>
        <div className="breadcrumb">
          Dashboard / Overtime
        </div>
      </div>
      <div className="summary-cards">
        <div className="card">
          <h2>Overtime Employee</h2>
          <p>12 this month</p>
        </div>
        <div className="card">
          <h2>Overtime Hours</h2>
          <p>118 this month</p>
        </div>
        <div className="card">
          <h2>Pending Request</h2>
          <p>23</p>
        </div>
        <div className="card">
          <h2>Rejected</h2>
          <p>5</p>
        </div>
      </div>
      <div className="table-container">
        <div className="table-header">
          <h2>Overtime Requests</h2>
          <button className="add-overtime">+ Add Overtime</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>OT Date</th>
              <th>OT Hours</th>
              <th>OT Type</th>
              <th>Description</th>
              <th>Status</th>
              <th>Approved by</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>8 Mar 2019</td>
              <td>2</td>
              <td>Normal day OT 1.5x</td>
              <td>Lorem ipsum dolor</td>
              <td><span className="status new">New</span></td>
              <td>Richard Miles</td>
              <td><button className="action-button">...</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Overtime;
