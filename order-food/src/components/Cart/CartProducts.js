import React, { useContext } from 'react';
import CartProduct from './CartProduct';
import styled from 'styled-components';
import CartContext from '../../store/cartContext';

const StyledCartProducts = styled.div`
  width: 100%;
`

const CartProducts = () => {
  const cartContext = useContext(CartContext);

  const contents = cartContext.products.map(product => {
    return (
      <div key={product.id}>
        <CartProduct product={product} />
        <hr />
      </div>
    )
  })
  return (
    <StyledCartProducts>
      {contents}
    </StyledCartProducts>
  );
};

export default CartProducts;
