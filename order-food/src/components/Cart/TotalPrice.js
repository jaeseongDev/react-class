import React from 'react';
import styled from 'styled-components';

const StyledTotalAmount = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
`

const TotalPrice = ({ totalPrice }) => {
  return (
    <StyledTotalAmount>
      <div>총 주문 가격</div>
      <div>{totalPrice.toLocaleString()}원</div>
    </StyledTotalAmount>
  );
};

export default TotalPrice;
