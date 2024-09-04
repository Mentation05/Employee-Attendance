import React, { useState } from 'react';
import "./Holidays.scss";

export default function Holidays() {
  const [holidays, setHolidays] = useState([
    { id: 1, title: "New Year", date: "1 Jan 2019", day: "Sunday" },
    { id: 2, title: "Good Friday", date: "14 Apr 2019", day: "Friday" },
    { id: 3, title: "May Day", date: "1 May 2019", day: "Monday" },
    { id: 4, title: "Memorial Day", date: "28 May 2019", day: "Monday" },
    { id: 5, title: "Ramzon", date: "26 Jun 2019", day: "Monday" },
    { id: 6, title: "Bakrid", date: "2 Sep 2019", day: "Saturday" },
    { id: 7, title: "Deepavali", date: "18 Oct 2019", day: "Wednesday" },
    { id: 8, title: "Christmas", date: "25 Dec 2019", day: "Monday" },
]);

const [isPopupOpen, setIsPopupOpen] = useState(false);
const [newHoliday, setNewHoliday] = useState({ title: "", date: "" });

const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
};

const handleInputChange = (e) => {
    setNewHoliday({ ...newHoliday, [e.target.name]: e.target.value });
};

const addHoliday = () => {
    const newId = holidays.length + 1;
    setHolidays([...holidays, { id: newId, title: newHoliday.title, date: newHoliday.date, day: new Date(newHoliday.date).toLocaleDateString('en-US', { weekday: 'long' }) }]);
    setNewHoliday({ title: "", date: "" });
    togglePopup();
};

return (
    <div className="holidays-page">
        <div className="header">
            <h1>Holidays 2019</h1>
            <button className="add-holiday-btn" onClick={togglePopup}>+ Add Holiday</button>
        </div>
        <table className="holidays-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Holiday Date</th>
                    <th>Day</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {holidays.map(holiday => (
                    <tr key={holiday.id}>
                        <td>{holiday.id}</td>
                        <td>{holiday.title}</td>
                        <td>{holiday.date}</td>
                        <td>{holiday.day}</td>
                        <td>
                            <div className="action-btn">
                                <i className="fas fa-ellipsis-h"></i>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {isPopupOpen && (
            <div className="popup">
                <div className="popup-content">
                    <h2>Add New Holiday</h2>
                    <label>Holiday Name:</label>
                    <input type="text" name="title" value={newHoliday.title} onChange={handleInputChange} />
                    <label>Holiday Date:</label>
                    <input type="date" name="date" value={newHoliday.date} onChange={handleInputChange} />
                    <div className="popup-actions">
                        <button onClick={addHoliday}>Add Holiday</button>
                        <button onClick={togglePopup}>Cancel</button>
                    </div>
                </div>
            </div>
        )}
    </div>
);
}
