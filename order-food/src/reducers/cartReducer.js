export const defaultCartState = {
  products: [
    {
      id: 1,
      name: '초밥',
      description: '설명',
      price: 10000,
      amount: 1
    },
    {
      id: 2,
      name: '초밥',
      description: '설명',
      price: 10000,
      amount: 1
    }
  ],
  totalPrice: 20000,
}

export const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const index = state.products.findIndex(product => product.id === action.product.id);
    const updatedTotalPrice = state.totalPrice + action.amount * action.product.price;
    let updatedProducts;
    if (index === -1) {
      updatedProducts = state.products.concat(action.product);
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
    console.log(updatedProducts);
    return {
      products: updatedProducts,
      totalPrice: updatedTotalPrice
    }
  }
  return defaultCartState;
}
