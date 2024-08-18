// helper.js
export const handleChange = (setEvent) => (e) => {
  setEvent(e.target.value);
};

export const handleCategoryChange = (setCategory) => (e) => {
  setCategory(e.target.value);
};

export const handleSubmit = (
  e,
  event,
  category,
  selectedDate,
  eventToEdit,
  onAddEvent,
  onUpdateEvent,
  setEvent,
  setCategory
) => {
  e.preventDefault();
  if (event.trim() && category.trim()) {
    const eventDate = selectedDate ? new Date(selectedDate) : new Date();
    if (eventToEdit) {
      onUpdateEvent(eventToEdit.index, event, eventDate, category);
    } else {
      onAddEvent(event, eventDate, category);
    }
    setEvent("");
    setCategory("");
  } else {
    alert("Please enter an event and select a category.");
  }
};
