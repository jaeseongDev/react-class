import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import { useContext } from 'react';
import AuthContext from './store/authContext';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <Header />
      {ctx.isLoggedIn ? <Home /> : <Login />}
    </>
  );
}

export default App;
