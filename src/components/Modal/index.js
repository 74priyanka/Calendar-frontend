import React from "react";
import { StyledModal } from "./style";

const Modal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <StyledModal>
      <div className="modal-content">
        <h2>Event Details</h2>
        <p>
          <strong>Category:</strong> {event.category}
        </p>
        <p>
          <strong>Title:</strong> {event.text}
        </p>
        <p>
          <strong>Date:</strong> {event.date.toDateString()}
        </p>

        <button onClick={onClose}>Close</button>
      </div>
    </StyledModal>
  );
};

export default Modal;
