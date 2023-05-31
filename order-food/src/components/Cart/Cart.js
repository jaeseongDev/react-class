import React from 'react';
import Modal from '../UI/Modal/Modal';
import styled from 'styled-components';
import CartProducts from './CartProducts';

const StyledCart = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Cart = ({ products }) => {
  return (
    <Modal>
      <StyledCart>
        <CartProducts />
      </StyledCart>
    </Modal>
  );
};

export default Cart;
