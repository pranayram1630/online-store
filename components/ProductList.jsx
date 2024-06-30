import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products';

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Products for Sale</h2>
      {productsData.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
