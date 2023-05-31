import React from 'react';
import styled from 'styled-components';
import OrderProduct from './OrderProduct';

const StyledOrderProducts = styled.div`
  background-color: white;
  margin-top: 100px;
  width: 100%;
  border-radius: 20px;
  padding: 20px 20px;

  hr {
    margin: 10px 0;
  }
`

const OrderProducts = ({ products }) => {
  const orderProducts = products.map(product => {
    return (
      <div key={product.id}>
        <OrderProduct product={product} />
        <hr />
      </div>
    )
  })
  return (
    <StyledOrderProducts>
      {orderProducts}
    </StyledOrderProducts>
  );
};

export default OrderProducts;
