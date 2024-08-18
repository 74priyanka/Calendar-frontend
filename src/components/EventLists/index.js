import React, { useState } from "react";
import { StyledEventLists } from "./style";
import editImg from "../../assets/editImg.png";
import deleteImg from "../../assets/deleteImg.png";

const EventLists = ({
  events,
  handleEditEvent,
  handleDeleteEvent,
  onEventClick,
  selectedCategory,
}) => {
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  return (
    <StyledEventLists className="styled-event-lists">
      <h1>Event Lists</h1>
      <ul className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <li key={index} className="event-list-item">
              <div onClick={() => onEventClick(event)} className="list-items">
                <h3>{event.category}</h3>
                <div>
                  <span>{event.text}</span> -{" "}
                  <span>{event.date.toDateString()}</span>
                </div>
              </div>
              <div className="event-actions">
                <img
                  src={editImg}
                  alt="edit"
                  className="event-icon"
                  onClick={() => handleEditEvent(index)}
                />
                <img
                  src={deleteImg}
                  alt="delete"
                  className="event-icon"
                  onClick={() => handleDeleteEvent(index)}
                />
              </div>
            </li>
          ))
        ) : (
          <li>No events scheduled</li>
        )}
      </ul>
    </StyledEventLists>
  );
};

export default EventLists;
