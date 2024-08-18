// src/hooks/useCalendarViewHandler.js
import { useState, useEffect } from "react";
import { getMonthDays, getStartDay } from "../helper";

export const useCalendarViewHandler = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [monthDays, setMonthDays] = useState([]);
  const [startDay, setStartDay] = useState(0);
  const [dateSelected, setDateSelected] = useState(null);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setMonthDays(getMonthDays(year, month));
    setStartDay(getStartDay(year, month));
  }, [currentDate]);

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handleDateClick = (date, onDateClick) => {
    setDateSelected(date);
    onDateClick(date); // Notify parent of date click
  };

  return {
    currentDate,
    monthDays,
    startDay,
    dateSelected,
    handlePreviousMonth,
    handleNextMonth,
    handleDateClick,
  };
};
