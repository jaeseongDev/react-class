import React from 'react';
import styled from 'styled-components';

const StyledErrorModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;

  .modal-container {
    width: 350px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 30px;
    border-radius: 20px;
  }

  .text {
    font-weight: 800;
    margin-bottom: 20px;
  }

  button {
    border: none;
    padding: 4px 10px;
    border-radius: 6px;
    cursor: pointer;
    background: dodgerblue;
    color: white;
    font-weight: 800;
  }
`;

const ErrorModal = ({ text, onConfirm }) => {
  return (
    <StyledErrorModal onClick={onConfirm}>
      <div className='modal-container'>
        <div className='text'>
          {text}
        </div>
        <button onClick={onConfirm}>확인</button>
      </div>
    </StyledErrorModal>
  );
};

export default ErrorModal;
