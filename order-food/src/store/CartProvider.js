import CartContext from './cartContext';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  // if (action.type === 'ADD') {
  //   // 존재할 경우
  //   const index = state.items.findIndex(item => item.id === action.item.id);
  //   if (index !== -1) {
  //     let updatedItems = [...state.items]
  //     updatedItems[index].amount += action.item.amount;
  //   } else {
  //     const updatedItems = state.items.concat(action.item);
  //     const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
  //   }
  //
  //
  //
  //   // 존재하지 않을 경우
  //
  //
  //   const updatedItems = state.items.concat(action.item);
  //   const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
  //   return {
  //     item: updatedItems,
  //     totalAmount: updatedTotalAmount
  //   };
  // }
  return defaultCartState;
}

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: 'ADD', item: item
    })
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE', id: id
    })
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
