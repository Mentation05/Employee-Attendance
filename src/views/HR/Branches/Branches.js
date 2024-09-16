// Branches.js
import React from 'react';
import './Branches.scss';

const Branches = () => {
  return (
    <div className="branches-container">
      {/* Header Section */}
      <div className="header">
        <h2>Company Branches</h2>
        <p>Human Resources / Branches</p>
      </div>

      {/* Description Section */}
      <div className="branches-description">
        <p>
          Below is the list of our company branches. For any assistance, feel free to reach out to the branch contact provided in the list.
        </p>
      </div>

      {/* Branches Table */}
      <div className="branches-table-container">
        <table className="branches-table">
          <thead>
            <tr>
              <th>Branch Name</th>
              <th>Location</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Number of Employees</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Head Office</td>
              <td>New York, USA</td>
              <td>+1-234-567-890</td>
              <td>headoffice@example.com</td>
              <td>120</td>
            </tr>
            <tr>
              <td>London Branch</td>
              <td>London, UK</td>
              <td>+44-987-654-321</td>
              <td>londonbranch@example.com</td>
              <td>80</td>
            </tr>
            <tr>
              <td>Berlin Branch</td>
              <td>Berlin, Germany</td>
              <td>+49-123-456-789</td>
              <td>berlinbranch@example.com</td>
              <td>70</td>
            </tr>
            <tr>
              <td>Tokyo Branch</td>
              <td>Tokyo, Japan</td>
              <td>+81-987-654-321</td>
              <td>tokyobranch@example.com</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Sydney Branch</td>
              <td>Sydney, Australia</td>
              <td>+61-234-567-890</td>
              <td>sydneybranch@example.com</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Branches;
