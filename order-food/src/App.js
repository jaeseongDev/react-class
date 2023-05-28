import Header from './components/Layout/Header/Header';
import Layout from './components/Layout/Layout';
import OrderProducts from './components/Products/OrderProducts';

function App() {
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
    <Layout>
      <Header />
      <OrderProducts products={products}/>
    </Layout>
  );
}

export default App;
