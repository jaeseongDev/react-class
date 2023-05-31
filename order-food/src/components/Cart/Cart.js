import React from 'react';
import Modal from '../UI/Modal/Modal';
import styled from 'styled-components';
import CartProducts from './CartProducts';
import TotalPrice from './TotalPrice';

const StyledCart = styled.div`
  padding: 20px 10px;
  .button-container {
    display: flex;
    justify-content: end;
    margin-top: 10px;
  }
  .button {
    width: 80px;
    padding: 5px;
    background-color: white;
    border: ${({theme}) => `1px solid ${theme.colors.secondary}`};
    color: black;
    border-radius: 50px;
    margin-left: 5px;
  }
  
  .button:hover {
    background-color: ${({theme}) => theme.colors.secondary};
    color: white;
    cursor: pointer;
  }
`

const Cart = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <StyledCart>
        <CartProducts/>
        <TotalPrice/>
        <div className="button-container">
          <button className='button' onClick={onClose}>취소</button>
          <button className='button'>주문하기</button>
        </div>
      </StyledCart>
    </Modal>
  );
};

export default Cart;
