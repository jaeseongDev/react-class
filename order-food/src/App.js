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
      name: '국밥',
      description: '속이 뜨끈해지는 국밥입니다!',
      price: 8000
    },
    {
      id: 2,
      name: '감자탕',
      description: '뼈에 붙어있는 살이 통통한 감자탕입니다>_<',
      price: 10000
    },
    {
      id: 3,
      name: '공기밥',
      description: '국밥이나 감자탕에는 역시 밥을 말아먹는게 최고죠^^',
      price: 1000
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
