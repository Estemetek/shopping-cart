/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import FilterInput from '../components/FilterInput';
import ProductItem from '../components/ProductItem';
import useProducts from '../hooks/useProducts';

const ProductList = ({ addToCart }) => {
  const { products, loading, error } = useProducts();
  const [filter, setFilter] = useState('');

  if (loading) return <p style={{textAlign: 'center'}}>Loading products...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <FilterInput value={filter} onChange={(e) => setFilter(e.target.value)} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;