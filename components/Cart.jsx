import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <p>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
          <Link to="/">Continue Shopping</Link>
        </>
      )}
    </div>
  );
};

export default Cart;
