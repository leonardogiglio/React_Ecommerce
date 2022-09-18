import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log("carrito:", cart);

  const clearItem = () => setCart([]);

  const isInCart = (id) => cart.find((product) => product.id === id) ? true : false;

  const removeCart = (id) => setCart(cart.filter((product) => product.id !== id));

  const addItem = (item, newQuantity) => {
    const newCart = cart.filter((prod) => prod.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity });
    setCart(newCart);
  };

  const totalPrice = () => {
    return cart.reduce((prevPrice, actPrice) => prevPrice + actPrice.quantity * actPrice.price, 0);
  }

  const totalProducts = () => {
    return cart.reduce((prevProduct, actProduct) => prevProduct + actProduct.quantity, 0);
  }

  return (
    <CartContext.Provider
      value={{
        clearItem,
        isInCart,
        removeCart,
        addItem,
        totalPrice,
        totalProducts,
        cart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
