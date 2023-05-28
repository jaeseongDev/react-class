import React from 'react';
import styled from 'styled-components';

const StyledProduct = styled.div`
  .name {
    font-weight: 800;
    font-size: 16px;
  }

  .description {
    font-size: 14px;
  }

  .price {
    font-weight: 800;
    font-size: 14px;
    color: ${({theme}) => theme.colors.primary}
  }
`

const Product = ({ product }) => {
  const { name, description, price } = product;
  return (
    <StyledProduct>
      <div className="name">{ name }</div>
      <div className="description">{ description }</div>
      <div className="price">{ price.toLocaleString() }</div>
    </StyledProduct>
  );
};

export default Product;
