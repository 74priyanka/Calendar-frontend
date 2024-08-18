import React from "react";
import { StyledCalendar } from "./styles";
import CalendarView from "../../components/CalendarView";
import Header from "../../components/Header";
import AddEventForm from "../../components/AddEventForm";
import EventLists from "../../components/EventLists";
import Modal from "../../components/Modal";
import CategoryFilter from "../../components/CategoryFilter";
import { useCalendarHandler } from "./hooks/useCalendarhandler";
import { loadEventsFromLocalStorage, saveEventsToLocalStorage } from "./helper";

const Calendar = () => {
  const {
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
  } = useCalendarHandler(loadEventsFromLocalStorage, saveEventsToLocalStorage);

  return (
    <StyledCalendar>
      <Header />
      <CalendarView events={events} onDateClick={handleDateClick} />
      <AddEventForm
        onAddEvent={handleAddEvent}
        eventToEdit={eventToEdit}
        onUpdateEvent={handleUpdateEvent}
        selectedDate={selectedDate}
        categories={categories}
      />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <EventLists
        events={events}
        handleEditEvent={handleEditEvent}
        handleDeleteEvent={handleDeleteEvent}
        onEventClick={handleEventClick}
        selectedCategory={selectedCategory}
      />
      {modalEvent && (
        <Modal onClose={closeModal} event={modalEvent.events[0]}>
          <h2>Events for {modalEvent.date.toDateString()}</h2>
          <ul>
            {modalEvent.events.map((event, index) => (
              <li key={index}>
                {event.text} - {event.date.toDateString()} - {event.category}
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </StyledCalendar>
  );
};

export default Calendar;
