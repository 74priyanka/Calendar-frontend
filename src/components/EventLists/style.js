import styled from "styled-components";

export const StyledEventLists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .list-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 36px;
    color: white;
    flex-grow: 1;
  }

  h3 {
    font-size: 1.2em;
    margin-bottom: 2px;
  }

  div span {
    font-size: 1em;
  }

  div span + span {
    margin-left: 4px;
  }

  div {
    margin-bottom: 4px;
  }

  .event-list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 84%;
    cursor: pointer;
    padding-inline-start: 0;
  }

  .event-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-radius: 0.375rem;
    border: 1px solid #468585;
    background: #468585;
    color: white;
    font-size: large;
  }
  .event-icon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    cursor: pointer;
  }
  .event-icon:hover {
    opacity: 0.8;
  }

  @media (min-width: 481px) and (max-width: 520px) {
    .event-list-item {
      font-size: 20px;
    }
  }

  @media (min-width: 401px) and (max-width: 480px) {
    .event-list-item {
      font-size: 16px;
    }
  }

  @media (min-width: 361px) and (max-width: 400px) {
    .event-list-item {
      font-size: 12px;
    }
  }

  @media (min-width: 321px) and (max-width: 360px) {
    .event-list-item {
      font-size: 12px;
    }
  }

  @media (max-width: 320px) {
    .event-list-item {
      font-size: 12px;
    }
  }
`;
