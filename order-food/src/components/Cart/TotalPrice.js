import React, { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../../store/cartContext';

const StyledTotalAmount = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
`

const TotalPrice = () => {
  const cartContext = useContext(CartContext)
  return (
    <StyledTotalAmount>
      <div>총 주문 가격</div>
      <div>{cartContext.totalPrice.toLocaleString()}원</div>
    </StyledTotalAmount>
  );
};

export default TotalPrice;
