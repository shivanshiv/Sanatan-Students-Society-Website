import React, { useState } from "react";
import "./calendar.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import eventsData from "../../data/events.js";

const dayOfWeekMap = {
  'Sunday': 0,
  'Monday': 1,
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Friday': 5,
  'Saturday': 6
};

const parseEventDates = (events) => {
  const expandedEvents = [];

  events.forEach(event => {

    if (event.date) {
      const dateMatch = event.date.match(/(\w+)\s+(\d+),\s+(\d{4})/);
      if (dateMatch) {
        const [, monthName, day, year] = dateMatch;
        const monthNames = {
          'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
          'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
        };
        const month = monthNames[monthName];

        expandedEvents.push({
          ...event,
          dateObj: new Date(parseInt(year), month, parseInt(day)),
          date: `${monthName} ${day}, ${year}` 
        });
      }
    }

    else if (event.recurring && event.startDate && event.endDate && event.dayOfWeek) {
      const start = new Date(event.startDate);
      const end = new Date(event.endDate);
      const targetDay = dayOfWeekMap[event.dayOfWeek];

      let current = new Date(start);
      while (current.getDay() !== targetDay) {
        current.setDate(current.getDate() + 1);
      }

      const step = (event.interval || 1) * 7;
      while (current <= end) {
        const monthName = current.toLocaleString('default', { month: 'long' });
        const day = current.getDate();
        const year = current.getFullYear();

        expandedEvents.push({
          ...event,
          dateObj: new Date(current),
          date: `${monthName} ${day}, ${year}` 
        });

        current.setDate(current.getDate() + step);
      }
    }
  });

  return expandedEvents;
};


const events = parseEventDates(eventsData);

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState({
    month: today.getMonth(),
    year: today.getFullYear()
  });
  const [selectedEvent, setSelectedEvent] = useState({
    eventName: "Select a date from the calendar to see event details.",
    date: "N/A",
    time: "N/A",
    location: "N/A",
    description: "N/A",
    registration: "",
    isNoEvent: true
  });
  const [selectedDate, setSelectedDate] = useState(null);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  const getEventsForDate = (day, month, year) => {
    return events.filter(event => {
      return event.dateObj.getDate() === day && event.dateObj.getMonth() === month && event.dateObj.getFullYear() === year;
    });
  };

  const renderCalendar = () => {
    const firstDay = new Date(currentDate.year, currentDate.month, 1).getDay();
    const daysInMonth = new Date(currentDate.year, currentDate.month + 1, 0).getDate();
    const dates = [];

    for (let i = 0; i < firstDay; i++) {
      dates.push(<div key={`blank-${i}`}></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        i === today.getDate() &&
        currentDate.year === today.getFullYear() &&
        currentDate.month === today.getMonth();

      const dayEvents = getEventsForDate(i, currentDate.month, currentDate.year);
      const hasEvents = dayEvents.length > 0;

      dates.push(
        <div
          key={i}
          className={`calendar-date ${isToday ? "current-date" : ""} 
                      ${hasEvents ? "has-event" : ""} 
                      ${selectedDate === i ? "calendar-date-selected" : ""}`}
          onClick={() => {
            setSelectedDate(i);
            if (hasEvents) {
              setSelectedEvent(dayEvents[0]); 
            } else {
              setSelectedEvent({
                eventName: "No Events",
                date: `${months[currentDate.month]} ${i}, ${currentDate.year}`,
                time: "N/A",
                location: "N/A",
                description: "N/A",
                registration: "N/A",
                isNoEvent: true
              });
            }
          }}
        >
          {i}
        </div>
      );
    }

    return dates;
  };

  const prevMonth = () => {
    setCurrentDate(prev => {
      if (prev.month === 0) {
        return { month: 11, year: prev.year - 1 };
      }
      return { ...prev, month: prev.month - 1 };
    });
    setSelectedDate(null);
    setSelectedEvent({
      eventName: "Select a Date",
      date: "N/A",
      time: "N/A",
      location: "N/A",
      description: "N/A",
      registration: "N/A",
      isNoEvent: true
    });
  };

  const nextMonth = () => {
    setCurrentDate(prev => {
      if (prev.month === 11) {
        return { month: 0, year: prev.year + 1 };
      }
      return { ...prev, month: prev.month + 1 };
    });
    setSelectedDate(null);
    setSelectedEvent({
      eventName: "Select a Date",
      date: "N/A",
      time: "N/A",
      location: "N/A",
      description: "N/A",
      registration: "N/A",
      isNoEvent: true
    });
  };

  const renderRegistrationWithLinks = (registrationText) => {

    if (!registrationText) {
      return "N/A";
    }

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = registrationText.split(urlRegex);

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a 
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };



  return (
    <main className="calendar-main">
      <Header />
      
      {/* Calendar title outside the calendar container */}
      <h1 className="calendar-page-title">Calendar</h1>
      
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={prevMonth}>‹</button>
          <div id="month-year">{`${months[currentDate.month]} ${currentDate.year}`}</div>
          <button onClick={nextMonth}>›</button>
        </div>
        <div className="calendar-body">
          <div className="calendar-weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="calendar-dates">{renderCalendar()}</div>
        </div>
        
        {/* Event Information Box - Always Visible */}
        <div className={`event-info-box ${selectedEvent.isNoEvent ? 'no-event-box' : ''}`}>
          <div className="event-header">
            <h2 className="event-title">{selectedEvent.eventName}</h2>
          </div>
          <div className="event-content">
            <table className="event-table">
              <tbody>
                <tr>
                  <td className="event-label">📅 Date</td>
                  <td className="event-value">{selectedEvent.date}</td>
                </tr>
                <tr>
                  <td className="event-label">🕐 Time</td>
                  <td className="event-value">{selectedEvent.time || (selectedEvent.isNoEvent ? "No events scheduled" : "")}</td>
                </tr>
                <tr>
                  <td className="event-label">📍 Location</td>
                  <td className="event-value">{selectedEvent.location || (selectedEvent.isNoEvent ? "N/A" : "")}</td>
                </tr>
                <tr>
                  <td className="event-label">📝 Description</td>
                  <td className="event-value">{selectedEvent.description}</td>
                </tr>
                <tr>
                  <td className="event-label">🎫 Registration</td>
                  <td className="event-value">{renderRegistrationWithLinks(selectedEvent.registration)}</td>
                </tr>
                <tr>
                  <td className="event-label">🗓️ Add to Calendar</td>
                  <td className="event-value">
                    {selectedEvent.icsFile ? (
                      <a href={selectedEvent.icsFile} download target="_blank" rel="noopener noreferrer" >
                        Click here!
                      </a>
                    ) : (
                      selectedEvent.isNoEvent ? "N/A" : ""
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Calendar;