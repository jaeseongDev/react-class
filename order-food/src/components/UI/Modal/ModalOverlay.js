import React from 'react';
import styled from 'styled-components';

const StyledModalOverlay = styled.div`
  background-color: white;
  border-radius: 8px;
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  
  button {
    width: 50px;
  }
`

const ModalOverlay = ({ children }) => {
  return (
    <StyledModalOverlay>
      { children }
    </StyledModalOverlay>
  );
};

export default ModalOverlay;
