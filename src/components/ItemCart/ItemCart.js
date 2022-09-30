import React from 'react';
import { useCartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import './ItemCart.css'

const ItemCart = ({product}) => {

    const { removeCart } = useCartContext();

  return (
    <div className='container'>
        <div className='divider'>
            <div className='bottom'>
                <div className='info'>
                    <div className='product'>
                        <div className='productDetail'>
                            <img src={product.img} alt={product.title}/>
                            <div className='details'>
                                <p className='productName'>
                                    <b>Producto: </b>
                                    {product.title}
                                </p>
                                <p className='productQuantity'>
                                    <b>Cantidad: </b>
                                    {product.quantity}
                                </p>
                                <p className='productDesc'>
                                    <b>Descripción: </b>
                                    {product.desc}
                                </p>
                            </div>
                        </div>
                        <div className='priceDetail'>
                                <p className='productPrice'>
                                    <b>Precio Unitario: </b>
                                    $ {product.price}
                                </p>
                                <p className='subTotal'>
                                    <b>Subtotal: </b>
                                    $ {product.quantity * product.price}
                                </p>
                                <button onClick={ () => removeCart(product.id) }>
                                    <DeleteIcon />
                                    <span>Eliminar Producto</span>
                                    </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCart