import React from 'react';
import styled from 'styled-components';
const StyledCartProduct = styled.div`
  .name {
    font-weight: 800;
    font-size: 18px;
  }
  
  .price {
    color: ${({theme}) => theme.colors.primary};
    font-weight: 800;
    font-size: 12px;
    margin-right: 10px;
  }
  
  .amount {
    border: 1px solid lightgray;
    font-weight: 600;
    display: inline-block;
    width: 30px;
    text-align: center;
    font-size: 12px;
  }
  
  button {
    border: 1px solid lightgray;
    padding: 0 10px;
    : white;
    color: black;
    width: 30px;
    font-size: 16px;
    background-color: white;
  }
  
  button:hover {
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
    cursor: pointer;
  }
`

const CartProduct = () => {
  return (
    <StyledCartProduct>
      <div>
        <div className="name">Sushi</div>
        <div>
          <span className="price">20,000원</span>
          <span className="amount">1</span>
        </div>
      </div>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </StyledCartProduct>
  );
};

export default CartProduct;
