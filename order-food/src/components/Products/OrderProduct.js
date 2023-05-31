import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import AddOrderInput from './AddOrderInput';
import Product from './Product';
import CartContext from '../../store/cartContext';

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
