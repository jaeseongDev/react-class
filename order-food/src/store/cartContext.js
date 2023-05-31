import React from 'react';

const CartContext = React.createContext({
  products: [],
  totalPrice: 0,
  addProduct: (product) => {},
  removeProduct: (id) => {}
})

export default CartContext;
