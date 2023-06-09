import React, { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../../store/cartContext';
const StyledCartProduct = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  
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

const CartProduct = ({ product }) => {
  const cartContext = useContext(CartContext)
  const { name, price, amount } = product;
  return (
    <StyledCartProduct>
      <div>
        <div className="name">{name}</div>
        <div>
          <span className="price">{price.toLocaleString()}원</span>
          <span className="amount">{amount}</span>
        </div>
      </div>
      <div>
        <button onClick={() => cartContext.removeProduct(product, 1)}>-</button>
        <button onClick={() => cartContext.addProduct(product, 1)}>+</button>
      </div>
    </StyledCartProduct>
  );
};

export default CartProduct;
