// useCalendarHandler.js
import { useState, useEffect, useCallback } from "react";

// Custom hook for calendar handling
export const useCalendarHandler = (loadEvents, saveEvents) => {
  const [events, setEvents] = useState([]);
  const [eventToEdit, setEventToEdit] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalEvent, setModalEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Load events from local storage
  useEffect(() => {
    const storedEvents = loadEvents();
    setEvents(storedEvents);
  }, [loadEvents]);

  // Save events to local storage
  useEffect(() => {
    saveEvents(events);
  }, [events, saveEvents]);

  const handleAddEvent = useCallback((newEvent, date, category) => {
    setEvents((prevEvents) => [
      ...prevEvents,
      { text: newEvent, date: new Date(date), category }, // Ensure date is a Date object
    ]);
  }, []);

  const handleEditEvent = useCallback(
    (index) => {
      setEventToEdit({ ...events[index], index });
    },
    [events]
  );

  const handleUpdateEvent = useCallback(
    (index, updatedEvent, date, category) => {
      setEvents((prevEvents) =>
        prevEvents.map(
          (event, i) =>
            i === index
              ? { text: updatedEvent, date: new Date(date), category }
              : event // Ensure date is a Date object
        )
      );
      setEventToEdit(null);
    },
    []
  );

  const handleDeleteEvent = useCallback((index) => {
    setEvents((prevEvents) => prevEvents.filter((_, i) => i !== index));
  }, []);

  const handleDateClick = useCallback(
    (date) => {
      setSelectedDate(date);
      const eventsForDate = events.filter(
        (event) => new Date(event.date).toDateString() === date.toDateString()
      );
      if (eventsForDate.length > 0) {
        setModalEvent({
          date: date,
          events: eventsForDate,
        });
      } else {
        setModalEvent(null); // Clear modal if no events for selected date
      }
    },
    [events]
  );

  const handleEventClick = useCallback((event) => {
    setModalEvent({
      date: event.date,
      events: [event],
    });
  }, []);

  const closeModal = () => {
    setModalEvent(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const categories = Array.from(new Set(events.map((event) => event.category)));

  return {
    events,
    eventToEdit,
    selectedDate,
    modalEvent,
    selectedCategory,
    handleAddEvent,
    handleEditEvent,
    handleUpdateEvent,
    handleDeleteEvent,
    handleDateClick,
    handleEventClick,
    closeModal,
    handleCategoryChange,
    categories,
  };
};
