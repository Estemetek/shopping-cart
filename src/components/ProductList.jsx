import React, { useState } from 'react';
import ProductCard from './ProductCard';
import useFetch from '../hooks/useFetch'; // Ensure the correct folder name for hooks

const ProductList = ({ addToCart }) => {
  const { data: products, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-list">
      <div className="product-list-header">
        <h1>Shopping Cart App</h1>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar" // Added class for styling
        />
      </div>
      {error && <p>Error: {error}</p>}
      <div className="grid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;