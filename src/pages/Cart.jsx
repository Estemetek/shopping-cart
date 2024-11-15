/* eslint-disable react/prop-types */
// src/pages/Cart.jsx

import CartItem from '../components/CartItem';

const Cart = ({ cart, updateCartItemQuantity, removeFromCart, goToCheckout }) => (
    <>
    <div className="cart-container">
    
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
            <p className="empty-cart">
                Your cart is empty. <br />
                Browse and find products you like!
            </p>
        ) : (
            cart.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    updateQuantity={updateCartItemQuantity}
                    removeItem={removeFromCart} />
            ))
        )}

        {cart.length > 0 && <button className="button-primary" onClick={goToCheckout}>Proceed to Checkout</button>}
    </div></>
);

export default Cart;