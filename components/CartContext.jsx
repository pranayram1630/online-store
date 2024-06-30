import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    const item = {
      id: uuidv4(),
      name: product.name,
      price: product.price,
    };
    setCartItems([...cartItems, item]);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
