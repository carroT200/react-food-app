import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

import './App.css';

function App() {
  const [cartisShown, setCartisShown] = useState(false);

  const showCartHandler = () => {
    setCartisShown(true);
  };

  const hideCartHandler = () => {
    setCartisShown(false);
  };

  return (
    <div className="App">
      <CartProvider>
        {cartisShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Meals />
      </CartProvider>
    </div>
  );
}

export default App;
