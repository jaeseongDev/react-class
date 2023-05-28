import React from 'react';
import styled from 'styled-components';

const StyledModalOverlay = styled.div`
  background-color: white;
  border-radius: 8px;
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  text-align: center;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  button {
    width: 50px;
  }
`


const ModalOverlay = () => {
  return (
    <StyledModalOverlay>
      모달창의 문구입니다!
      <button>확인</button>
    </StyledModalOverlay>
  );
};

export default ModalOverlay;
