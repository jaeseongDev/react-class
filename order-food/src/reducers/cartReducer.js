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
  totalPrice: 0,
}

export const cartReducer = (state, action) => {
  return defaultCartState;
}
