import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {

  const { totalProducts } = useCartContext();

  return (
    <>
      <div className='cartDivider'>
      <i className="bi bi-cart3"></i>
      <span className='cartSpan'>{(totalProducts() !== 0) ? totalProducts() : ''}</span>
      </div>
    </>
  );
}

export default CartWidget;
