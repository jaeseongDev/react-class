import Header from './components/Layout/Header/Header';
import Layout from './components/Layout/Layout';
import OrderProducts from './components/Products/OrderProducts';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
  const [isShownCart, setIsShownCart] = useState(false);

  const showCartHandler = () => {
    setIsShownCart(true);
  }

  const hideCartHandler = () => {
    setIsShownCart(false);
  }

  const products = [
    {
      id: 1,
      name: '초밥',
      description: '설명',
      price: 10000
    },
    {
      id: 2,
      name: '초밥',
      description: '설명',
      price: 10000
    }
  ]
  return (
    <CartProvider>
      <Layout>
        {isShownCart && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <OrderProducts products={products}/>
      </Layout>
    </CartProvider>
  );
}

export default App;
