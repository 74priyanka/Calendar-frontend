// src/helpers/helper.js
export const getMonthDays = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
};

export const getStartDay = (year, month) => {
  return new Date(year, month, 1).getDay();
};
