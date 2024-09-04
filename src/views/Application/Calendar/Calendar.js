import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.scss';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Test Event 1',
      start: new Date(2024, 8, 3, 18, 38),
      end: new Date(2024, 8, 3, 19, 38),
      allDay: false,
    },
    {
      title: 'Event Name 4',
      start: new Date(2024, 8, 6, 11, 45),
      end: new Date(2024, 8, 6, 12, 45),
      allDay: false,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    category: 'Danger',
  });

  const handleAddEvent = () => {
    console.log("Add Event Button Clicked");

    setShowModal(true);
  };

  const handleSubmit = () => {
    const { title, date, category } = newEvent;
    if (title && date) {
      const [year, month, day] = date.split('-');
      const event = {
        title: `${title} (${category})`,
        start: new Date(year, month - 1, day, 9, 0),
        end: new Date(year, month - 1, day, 10, 0),
        allDay: false,
      };
      setEvents([...events, event]);
      setShowModal(false);
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="calendar-container">
      <div className="header">
        <h1>Events</h1>
        <button className="add-event-btn" onClick={handleAddEvent}>
          + Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Event</h2>
            <div className="form-group">
              <label>Event Name</label>
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label>Event Date</label>
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                value={newEvent.category}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, category: e.target.value })
                }
                required
              >
                <option value="Danger">Danger</option>
                <option value="Warning">Warning</option>
                <option value="Info">Info</option>
                <option value="Success">Success</option>
              </select>
            </div>
            <button onClick={handleSubmit} className="submit-btn">
              Submit
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
