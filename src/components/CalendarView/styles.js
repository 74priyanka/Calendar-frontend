import styled from "styled-components";

export const StyledCalenderView = styled.div`
  width: 80%;
  margin: 10px auto 40px auto;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  font-family: "Roboto", sans-serif;

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #468585;
    padding: 16px;
    font-size: 24px;
    color: white;
  }

  .calendar-header button {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    opacity: 0.7;
    cursor: pointer;
  }

  .monthYear {
    display: flex;
    gap: 44px;
  }

  .days-names,
  .days {
    display: flex;
    flex-wrap: wrap;
  }

  .day-name,
  .day,
  .empty-day {
    width: 14.28%;
    text-align: center;
    padding: 28px;
    border: 2px solid #f0f0f0;
    box-sizing: border-box;
    font-size: 16px;
    opacity: 0.7;
    border-radius: 5px;
  }

  .day-name {
    background-color: #f0f0f0;
    font-weight: bold;
    opacity: 0.5;
    margin-bottom: 8px;
  }

  .day {
    border: 2px solid #f0f0f0;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  .day:hover {
    background-color: #9cdba6;
  }

  .empty-day {
    border: 2px solid #f0f0f0;
    background-color: #f9f9f9;
  }
  .today {
    background-color: #9cdba6;
    color: white;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
  }

  .selected {
    background-color: #9cdba6;
    color: white;
    border-radius: 5px;
    text-align: center;
  }

  .event {
    background-color: #ffefef;
    color: black;
  }

  .day {
    position: relative;
    cursor: pointer;
  }

  .event-marker {
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ff5722;
  }

  @media (min-width: 481px) and (max-width: 520px) {
    width: 71%;
  }
`;
