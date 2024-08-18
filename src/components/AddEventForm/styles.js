import styled from "styled-components";

export const StyledAddEventForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .add-event-header {
    font-size: 1.8em;
  }
  .add-event-form {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 10px;
  }

  .event-input,
  .event-category {
    outline: none;
    background: none;
    border: 1px solid #468585;
    padding: 0.625rem 1rem;
    font-size: 1rem;
    color: black;
  }

  .event-input {
    border-bottom-left-radius: 0.375rem;
    border-top-left-radius: 0.375rem;
    width: 40%;

    ::placeholder {
      color: #808080;
    }
  }

  .event-category {
    width: 12%;
  }

  .add-event-btn {
    background-color: #468585;
    color: white;
    border-bottom-right-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    padding: 0.625rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    border: 1px solid #468585;
  }

  @media (min-width: 481px) and (max-width: 520px) {
    .add-event-form {
      width: 90%;
    }
  }

  @media (min-width: 401px) and (max-width: 480px) {
    .add-event-form {
      width: 91%;
    }
  }
  @media (min-width: 361px) and (max-width: 400px) {
    .add-event-form {
      width: 99%;
    }

    @media (min-width: 321px) and (max-width: 360px) {
      .add-event-form {
        width: 90%;
      }
    }

    @media (max-width: 320px) {
      .add-event-form {
        width: 90%;
      }
    }
  }
`;
