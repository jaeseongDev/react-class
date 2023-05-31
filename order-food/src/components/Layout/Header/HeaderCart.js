import React, { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../../../store/cartContext';

const StyledHeaderCart = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
  
  .text {
    color: white;
    font-weight: 700;
  }
  .count {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 3px 7px;
    border-radius: 30px;
    display: inline-block;
    margin-left: 10px;
    font-size: 12px;
    font-weight: 800;
  }
`

const HeaderCart = ({ onClick }) => {
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0)

  return (
    <StyledHeaderCart onClick={onClick}>
      <span className="text">장바구니</span>
      <span className="count">{numberOfCartItems}</span>
    </StyledHeaderCart>
  );
};

export default HeaderCart;
