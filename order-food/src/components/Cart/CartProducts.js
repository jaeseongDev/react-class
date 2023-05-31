import React from 'react';
import CartProduct from './CartProduct';
import styled from 'styled-components';

const StyledCartProducts = styled.div`
  width: 100%;
`

const CartProducts = ({ products }) => {
  const contents = products.map(product => {
    return (
      <>
        <CartProduct product={product} key={product.id}/>
        <hr />
      </>
    )
  })
  return (
    <StyledCartProducts>
      {contents}
    </StyledCartProducts>
  );
};

export default CartProducts;
