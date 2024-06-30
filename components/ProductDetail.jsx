import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import productsData from '../data/products';
import { CartContext } from './CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));
  const { addItemToCart } = useContext(CartContext);

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addItemToCart(product)}>Add to Cart</button>
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
