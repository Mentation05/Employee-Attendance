// LeavePolicy.js
import React from 'react';
import './Leave-Policy.scss';

const LeavePolicy = () => {
  return (
    <div className="leave-policy-container">
      {/* Header Section */}
      <div className="header">
        <h2>Leave Policy</h2>
        <p>Human Resources / Leave Policy</p>
      </div>

      {/* Description Section */}
      <div className="policy-description">
        <p>
          The leave policy outlines the different types of leave available to employees, along with the procedures and rules for requesting leave.
        </p>
      </div>

      {/* Leave Types Table */}
      <div className="leave-table-container">
        <table className="leave-policy-table">
          <thead>
            <tr>
              <th>Leave Type</th>
              <th>Number of Days</th>
              <th>Eligibility</th>
              <th>Carry Forward</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Annual Leave</td>
              <td>20 Days</td>
              <td>All employees</td>
              <td>Yes</td>
              <td>Should be requested at least 1 month in advance.</td>
            </tr>
            <tr>
              <td>Sick Leave</td>
              <td>12 Days</td>
              <td>All employees</td>
              <td>No</td>
              <td>Medical certificate required for leave beyond 2 days.</td>
            </tr>
            <tr>
              <td>Maternity Leave</td>
              <td>90 Days</td>
              <td>Female employees</td>
              <td>No</td>
              <td>As per government regulations.</td>
            </tr>
            <tr>
              <td>Paternity Leave</td>
              <td>10 Days</td>
              <td>Male employees</td>
              <td>No</td>
              <td>Available within 6 months of childbirth.</td>
            </tr>
            <tr>
              <td>Compensatory Off</td>
              <td>As per work hours</td>
              <td>Employees working extra hours</td>
              <td>No</td>
              <td>Approval required from the supervisor.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notes or Guidelines Section */}
      <div className="policy-guidelines">
        <h4>Additional Guidelines:</h4>
        <ul>
          <li>Employees should provide proper documentation for leaves exceeding the allowed number of days.</li>
          <li>Unauthorized absence from work will result in loss of pay.</li>
          <li>Leave requests should be submitted through the HR portal.</li>
        </ul>
      </div>
    </div>
  );
};

export default LeavePolicy;
