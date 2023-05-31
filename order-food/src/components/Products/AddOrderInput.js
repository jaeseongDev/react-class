import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import CartContext from '../../store/cartContext';

const StyledAddOrderInput = styled.div`
  .input-container {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .text {
    font-weight: 800;
    font-size: 12px;
    margin-right: 10px;
  }
  
  .input {
    width: 50px;
    padding: 0 5px;
  }
  
  .input:focus {
    outline: none; 
  }
  
  .button {
    background-color: ${({theme}) => theme.colors.primary};
    border: none;
    border-radius: 10px;
    padding: 4px 12px;
    color: white;
    font-weight: 800;
    cursor: pointer;
  }
`

const AddOrderInput = ({ product }) => {
  const [amount, setAmount] = useState(0);
  const inputChangeHandler = (e) => {
    setAmount(e.target.value)
  }
  const cartContext = useContext(CartContext);
  return (
    <StyledAddOrderInput>
      <div className="input-container">
        <span className="text">수량 </span>
        <input onChange={inputChangeHandler} className="input" type="number" value={amount}/>
      </div>
      <button className="button" onClick={() => cartContext.addProduct(product, +amount)}>장바구니에 추가</button>
    </StyledAddOrderInput>
  );
};

export default AddOrderInput;
