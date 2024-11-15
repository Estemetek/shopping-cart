/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductList from './pages/ProductList';

const App = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('products'); // 'products', 'cart', or 'checkout'

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartItemQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleCheckout = () => {
    alert('Payment successful!');
    setCart([]); // Reset cart
    setView('products'); // Go back to ProductList
  };

  return (
    <div>
      <h1 className="appName">Virtual Shopping Cart</h1>

      <header className="header">
        <button onClick={() => setView('products')} className="nav-button">Browse Products</button>
        
      </header>

      {view === 'products' && (
        <div className="main-layout">
          <div className="sidebar-cart">
            <Cart
              cart={cart}
              updateCartItemQuantity={updateCartItemQuantity}
              removeFromCart={removeFromCart}
              goToCheckout={() => setView('checkout')}
            />
          </div>
          <div className="product-list-container">
            <ProductList addToCart={addToCart} />
          </div>
        </div>
      )}

      {view === 'cart' && (
        <Cart
          cart={cart}
          updateCartItemQuantity={updateCartItemQuantity}
          removeFromCart={removeFromCart}
          goToCheckout={() => setView('checkout')}
        />
      )}
      {view === 'checkout' && <Checkout cart={cart} onCheckout={handleCheckout} goBack={() => setView('cart')} />}
    </div>
  );
};

export default App;
