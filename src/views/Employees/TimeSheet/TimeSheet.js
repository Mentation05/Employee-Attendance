import React from 'react';
import './Timesheet.scss';

const timesheetData = [
    {
        employee: 'Bernardo Galaviz Web Developer',
        date: '8 Mar 2019',
        project: 'Video Calling App',
        assignedHours: 20,
        hours: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.'
    },
    // ... (add other entries)
];

const Timesheet = () => {
    return (
        <div className="timesheet-container">
            <header className="timesheet-header">
                <h1>Timesheet</h1>
                <button className="add-work-button">+ Add Today Work</button>
            </header>
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
                            <td>{entry.employee}</td>
                            <td>{entry.date}</td>
                            <td>{entry.project}</td>
                            <td>{entry.assignedHours}</td>
                            <td>{entry.hours}</td>
                            <td>{entry.description}</td>
                            <td>
                                <button className="action-button">...</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Timesheet;
