import CartContext from './cartContext';
import { useReducer } from 'react';
import { cartReducer, defaultCartState } from '../reducers/cartReducer';

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addProductFromCartHandler = (product, amount) => {
    dispatchCartAction({
      type: 'ADD',
      product,
      amount
    })
  }

  const removeProductFromCartHandler = (product, amount) => {
    dispatchCartAction({
      type: 'REMOVE',
      product,
      amount
    })
  };

  const cartContext = {
    products: cartState.products,
    totalPrice: cartState.totalPrice,
    addProduct: addProductFromCartHandler,
    removeProduct: removeProductFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
