/* eslint-disable react/prop-types */
const Checkout = ({ cart, onCheckout, goBack }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
        
      <div className="checkout-container">
        
    <h2>Checkout</h2>
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          <span>{item.title}</span>
          <span className="quantity">{item.quantity}</span>
          <span className="price">${item.price}</span>
          <span className="total-price">${item.quantity * item.price}</span>
        </li>
      ))}
    </ul>
    <p className="total">Total: ${total.toFixed(2)}</p>
    <div className="button-container">
      <button onClick={goBack}>Cancel</button>
      <button onClick={onCheckout}>Pay</button>
    </div>
  </div>
  
    );
  };
  
  export default Checkout;