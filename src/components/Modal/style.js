import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px;
    position: relative;
    text-align: center;

    h2 {
      margin-bottom: 15px;
      font-size: 24px;
      color: #333;
    }

    p {
      margin: 10px 0;
      font-size: 18px;
      color: #555;
    }

    button {
      background-color: #674188;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 20px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #583575;
      }
    }
  }
`;
