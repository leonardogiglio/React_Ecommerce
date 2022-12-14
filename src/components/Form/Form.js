import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./Form.css";
import MessaggeSuccess from '../MessageSuccess/MessaggeSuccess';
import { basicConfetti } from '../../utils/utils';


const Form = () => {

  const {cart, totalPrice, clearItem} = useCartContext();

  const orders = {
    name: '',
    lastname: '',
    email: '',
    direction: '',
    city: '',
    phone: '',
    items: cart.map(product=>({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }
  
  const [values, setValues] = useState(orders);
  
  const [ordersID, setOrdersID] = useState('');

  const handleOnChange = (e) => {
    const {value, name} = e.target;
    setValues({...values, [name]:value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "orders"), {
      values,
    });
    setOrdersID(docRef.id);
    setValues(orders);
    clearItem();
    basicConfetti();
  }

  return (
    <>
        <div className='ContainerForm'>
            <div className='DivisorForm'>
                <h1 className='TitleForm'>Tramitar Pedido</h1>
                <form className='Form' onSubmit={onSubmit}>
                    <input 
                    className='InputForm' 
                    placeholder='nombre'
                    name='name'
                    value={values.name}
                    onChange={handleOnChange}
                    required/>
                    <input 
                    className='InputForm' 
                    placeholder='apellido'
                    name='lastname'
                    value={values.lastname}
                    onChange={handleOnChange}
                    required/>
                    <input 
                    className='InputForm'
                    placeholder='email'
                    name='email'
                    value={values.email}
                    onChange={handleOnChange}
                    required/>
                    <input 
                    className='InputForm' 
                    placeholder='direcci??n'
                    name='direction'
                    value={values.direction}
                    onChange={handleOnChange}
                    required/>
                    <input
                    className='InputForm' 
                    placeholder='ciudad'
                    name='city'
                    value={values.city}
                    onChange={handleOnChange}
                    required/>
                    <input 
                    className='InputForm' 
                    placeholder='tel??fono'
                    name='phone'
                    value={values.phone}
                    onChange={handleOnChange}
                    required/>
                    <button 
                    className='BtnForm'
                    >Terminar Compra
                    </button>
                </form>
                {ordersID && <MessaggeSuccess ordersID={ordersID}/>}
            </div>

        </div>
    </>
  )
}

export default Form;