import React from "react";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {

  const {cart, totalPrice} = useCartContext();

  if(cart.length === 0) {
    return (
      <>
      <h1 className='title'>Carrito</h1>
            <div className='top'>
                <button className='topButton'><Link to="/">Continuar Comprando</Link></button>
                <div className='topTexts'>
                    <h5 className='topText'>Tu carrito está vacío</h5>
                </div>
                <button className='topButton'><Link to="/form">Tramitar Pedido</Link></button>
            </div>
      </>
    )
  }
  return  (
    <>
      <h1 className='title'>Carrito</h1>
      <div className='top'>
                <button className='topButton'><Link to="/">Continuar Comprando</Link></button>
                <button className='topButton'><Link to="/form">Tramitar Pedido</Link></button>
            </div>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
        <div className='cartInfo'>
        <h5><b>Total:</b></h5>
        <h5> $ {totalPrice()}</h5>
        </div>
    </>
  )
};

export default Cart;
