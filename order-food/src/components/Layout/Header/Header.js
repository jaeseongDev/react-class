import React, { useContext } from 'react';
import styled from 'styled-components';
import HeaderCart from './HeaderCart';
import CartContext from '../../../store/cartContext';

const StyledHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 10%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 800;
    color: white;
    padding: 15px 0;
  }
`

const Header = ({ onShowCart }) => {
  return (
    <StyledHeader>
      <h1>
        키오스크
      </h1>
      <HeaderCart onClick={onShowCart}/>
    </StyledHeader>
  );
};

export default Header;
