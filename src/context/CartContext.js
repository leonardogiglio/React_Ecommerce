import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearItem = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeCart = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const addItem = (item, newQuantity) => {
    const newCart = cart.filter((prod) => prod.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity });
    setCart(newCart);
  };

  console.log("carrito:", cart);

  return (
    <CartContext.Provider
      value={{
        clearItem,
        isInCart,
        removeCart,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
