// useAddEventFormHandler.js
import { useState, useEffect } from "react";

export const useAddEventFormHandler = (eventToEdit) => {
  const [event, setEvent] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (eventToEdit) {
      setEvent(eventToEdit.text);
      setCategory(eventToEdit.category || "");
    }
  }, [eventToEdit]);

  return {
    event,
    category,
    setEvent,
    setCategory,
  };
};
