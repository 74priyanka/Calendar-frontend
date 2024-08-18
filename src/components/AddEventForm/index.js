import { StyledAddEventForm } from "./styles";
import React from "react";
import { useAddEventFormHandler } from "./hooks/useAddEventFormHandler";
import { handleChange, handleCategoryChange, handleSubmit } from "./helper";

const AddEventForm = ({
  onAddEvent,
  eventToEdit,
  onUpdateEvent,
  selectedDate,
  categories,
}) => {
  const { event, category, setEvent, setCategory } =
    useAddEventFormHandler(eventToEdit);

  return (
    <StyledAddEventForm className="styled-event-form">
      <h2 className="add-event-header">Schedule Your Event</h2>
      <form
        className="add-event-form"
        onSubmit={(e) =>
          handleSubmit(
            e,
            event,
            category,
            selectedDate,
            eventToEdit,
            onAddEvent,
            onUpdateEvent,
            setEvent,
            setCategory
          )
        }
      >
        <input
          type="text"
          className="event-input"
          placeholder="What's your event?"
          value={event}
          onChange={handleChange(setEvent)}
        />
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={handleCategoryChange(setCategory)}
          list="category-options"
          className="event-category"
        />
        <datalist id="category-options">
          {categories.map((cat, index) => (
            <option key={index} value={cat} />
          ))}
        </datalist>
        <button type="submit" className="add-event-btn">
          {eventToEdit ? "Update Event" : "Add Event"}
        </button>
      </form>
    </StyledAddEventForm>
  );
};

export default AddEventForm;
