// helper.js

export const loadEventsFromLocalStorage = () => {
  try {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    return storedEvents.map((event) => ({
      ...event,
      date: new Date(event.date),
    }));
  } catch (error) {
    console.error("Failed to load events:", error);
    return [];
  }
};

export const saveEventsToLocalStorage = (events) => {
  try {
    const eventsToStore = events.map((event) => ({
      ...event,
      date: event.date.toISOString(), // Convert Date to ISO string
    }));
    localStorage.setItem("events", JSON.stringify(eventsToStore));
  } catch (error) {
    console.error("Failed to save events:", error);
  }
};
