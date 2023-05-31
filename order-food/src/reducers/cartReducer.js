export const defaultCartState = {
  products: [],
  totalPrice: 0,
}

export const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const index = state.products.findIndex(product => product.id === action.product.id);
    const updatedTotalPrice = state.totalPrice + action.amount * action.product.price;
    let updatedProducts;
    if (index === -1) {
      updatedProducts = state.products.concat({
        ...action.product,
        amount: action.amount
      });
    } else {
      updatedProducts = [...state.products];
      updatedProducts[index].amount += action.amount;
    }
    return {
      products: updatedProducts,
      totalPrice: updatedTotalPrice
    }
  }
  if (action.type === 'REMOVE') {
    const index = state.products.findIndex(product => product.id === action.product.id);
    const updatedTotalPrice = state.totalPrice - action.amount * action.product.price;
    let updatedProducts = [...state.products]
    if (index !== -1) {
      if (updatedProducts[index].amount === action.amount) {
        updatedProducts = updatedProducts.filter(p => p.id !== action.product.id)
      } else {
        updatedProducts[index].amount -= action.amount;
      }
    }
    return {
      products: updatedProducts,
      totalPrice: updatedTotalPrice
    }
  }
  return defaultCartState;
}
