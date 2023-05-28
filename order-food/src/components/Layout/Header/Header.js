import React from 'react';
import styled from 'styled-components';
import HeaderCart from './HeaderCart';

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

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        배달의 민족
      </h1>
      <HeaderCart />
    </StyledHeader>
  );
};

export default Header;