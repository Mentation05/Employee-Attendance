import React from 'react';
import './TimeSheet.scss';

const timesheetData = [
    {
        employee: 'Bernardo Galaviz Web Developer',
        date: '8 Mar 2019',
        project: 'Video Calling App',
        assignedHours: 20,
        hours: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.',
        profilePic:  'https://images.unsplash.com/photo-1499323888381-7fd102a793de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    // ... (other entries)
];

const Timesheet = () => {
    return (
        <div className="timesheet-container">
            <div className="timesheet-header">
                <h2>Timesheet</h2>
                <button className="add-work-button">+ Add Today Work</button>
            </div>
            <table className="timesheet-table">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Date</th>
                        <th>Projects</th>
                        <th>Assigned Hours</th>
                        <th>Hours</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {timesheetData.map((entry, index) => (
                        <tr key={index}>
                            <td className="employee-cell">
                                <img src={entry.profilePic} alt="Employee" className="profile-pic" />
                                <span>{entry.employee}</span>
                            </td>
                            <td>{entry.date}</td>
                            <td>{entry.project}</td>
                            <td>{entry.assignedHours}</td>
                            <td>{entry.hours}</td>
                            <td>{entry.description}</td>
                            <td className="actions-cell">
                                <div className="actions-dropdown">
                                    <button className="action-button">...</button>
                                    <div className="dropdown-content">
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Timesheet;
