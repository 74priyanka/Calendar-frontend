// src/components/CalendarView.js
import { StyledCalenderView } from "./styles";
import React from "react";
import { dayNames } from "../../constants/data";
import { useCalendarViewHandler } from "./hooks/useCalendarViewhandler";

const CalendarView = ({ events, onDateClick }) => {
  const {
    currentDate,
    monthDays,
    startDay,
    dateSelected,
    handlePreviousMonth,
    handleNextMonth,
    handleDateClick,
  } = useCalendarViewHandler();

  return (
    <StyledCalenderView className="calendar-view">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth}>&lt;</button>
        <div className="monthYear">
          <span>
            {currentDate.toLocaleString("default", { month: "long" })}
          </span>
          <span>{currentDate.getFullYear()}</span>
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days-names">
        {dayNames.map((day, index) => (
          <div key={index} className="day-name">
            {day}
          </div>
        ))}
      </div>
      <div className="days">
        {Array.from({ length: startDay }).map((_, index) => (
          <div key={index} className="empty-day"></div>
        ))}
        {monthDays.map((day, index) => {
          const eventForDay = events.some(
            (event) => event.date.toDateString() === day.toDateString()
          );
          return (
            <div
              key={day}
              className={`day ${
                day.getDate() === new Date().getDate() &&
                day.getMonth() === new Date().getMonth()
                  ? "today"
                  : ""
              } ${
                dateSelected &&
                day.toDateString() === dateSelected.toDateString()
                  ? "selected"
                  : ""
              }${eventForDay ? "event" : ""}`}
              onClick={() => handleDateClick(day, onDateClick)}
            >
              {day.getDate()}
              {eventForDay && <div className="event-marker"></div>}
            </div>
          );
        })}
      </div>
    </StyledCalenderView>
  );
};

export default CalendarView;
