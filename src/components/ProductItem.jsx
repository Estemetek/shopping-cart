/* eslint-disable react/prop-types */
// src/components/ProductItem.jsx

const ProductItem = ({ product, addToCart }) => (
    <div className="product-item">
      <img src={product.images[0]} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
  
  export default ProductItem;
  