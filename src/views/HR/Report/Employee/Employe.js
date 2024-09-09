import React, { useState } from "react";
import "./Employe.scss";

const EmployeeReport = () => {
    const [employees] = useState([
        { id: 1, name: "John Doe", type: "Employee", email: "johndoe@example.com", department: "Design", designation: "UI Design", joiningDate: "20 Aug 2020", dob: "03 Mar 1992", maritalStatus: "Married" },
        { id: 2, name: "John Smith", type: "Employee", email: "johnsmith@example.com", department: "IOS Developer", designation: "Development Manager", joiningDate: "03 Sep 2020", dob: "16 Apr 1984", maritalStatus: "Married" },
        { id: 3, name: "Mike Litorus", type: "Employee", email: "mikelitorus@example.com", department: "Web Developer", designation: "IT Support", joiningDate: "15 Nov 2020", dob: "15 Jul 2005", maritalStatus: "Single" },
        { id: 4, name: "Richard Miles", type: "Employee", email: "richardmiles@example.com", department: "Android Developer", designation: "IT Support", joiningDate: "01 Jul 2020", dob: "05 Dec 1979", maritalStatus: "Married" },
        { id: 5, name: "Wilmer Deluna", type: "Employee", email: "wilmerdeluna@example.com", department: "Team Leader", designation: "Development Manager", joiningDate: "01 Dec 2020", dob: "21 Jun 1984", maritalStatus: "Married" },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(4);

    const indexOfLastEmployee = currentPage * rowsPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - rowsPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const totalPages = Math.ceil(employees.length / rowsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="employee-report">
            <h2>Employee Report</h2>
            <div className="search-bar">
                <input type="text" placeholder="Employee" />
                <select>
                    <option>Select Department</option>
                    <option>Design</option>
                    <option>Software Developer</option>
                    <option>Full Stack Developer</option>
                    <option>Web Developer</option>
                </select>
                <input type="date" />
                <input type="date" />
                <button>Search</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Type</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Joining Date</th>
                        <th>DOB</th>
                        <th>Marital Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEmployees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.type}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>
                            <td>{emp.designation}</td>
                            <td>{emp.joiningDate}</td>
                            <td>{emp.dob}</td>
                            <td>{emp.maritalStatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default EmployeeReport;
