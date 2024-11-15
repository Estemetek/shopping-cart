/* eslint-disable react/prop-types */
// src/components/CartItem.jsx
const CartItem = ({ item, updateQuantity, removeItem }) => (
    <div className="cart-item">
      <p className="item-title">{item.title}</p>
      <p className="item-price">${item.price.toFixed(2)}</p>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
        className="item-quantity"
      />
      <button onClick={() => removeItem(item.id)} className="remove-button">Remove</button>
    </div>
  );
  
  export default CartItem;
  