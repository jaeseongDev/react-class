import React from 'react';
import styled from 'styled-components';

const StyledHeaderCart = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 20px;
  border-radius: 20px;
  
  .text {
    color: white;
    font-weight: 700;
  }
  .count {
    background-color: ${({ theme }) => theme.colors.primary};;
    color: white;
    padding: 3px 7px;
    border-radius: 30px;
    display: inline-block;
    margin-left: 10px;
    font-size: 12px;
    font-weight: 800;
  }
`

const HeaderCart = () => {

  return (
    <StyledHeaderCart>
      <span className="text">장바구니</span>
      <span className="count">3</span>
    </StyledHeaderCart>
  );
};

export default HeaderCart;
