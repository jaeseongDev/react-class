import React from 'react';
import styled from 'styled-components';
import AddOrderInput from './AddOrderInput';
import Product from './Product';

const StyledOrderProduct = styled.div`
  display: flex;
  justify-content: space-between;
`

const OrderProduct = ({ product }) => {
  return (
    <StyledOrderProduct>
      <Product product={product} />
      <AddOrderInput />
    </StyledOrderProduct>
  );
};

export default OrderProduct;
