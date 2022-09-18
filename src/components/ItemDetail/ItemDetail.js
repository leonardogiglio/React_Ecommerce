import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  const [cart, setCart] = useState(false);

  const { addItem } = useCartContext();

  const onAdd = (quantity) => {
    setCart(true);
    addItem(data, quantity);
  };

  return (
    <div>
      <div className="Container">
        <div className="Divider">
          <div className="ImgContainer">
            <img className="Img" src={data.img} alt="" />
          </div>
          <div className="InfoContainer">
            <h1 className="Title">{data.title}</h1>
            <p className="Description">{data.descLarg}</p>
            <span className="Price">$ {data.price}</span>
            {/* <div className='FilterContainer'>
                <div className='Filter'>
                <span className='FilterTitle'>Motor: </span>
                <select className='FilterSelect'>
                  <option className='FilterDesc'>3.8 Corriente Continua</option>
                  <option className='FilterDesc'>4.2 Corriente Continua</option>
                  <option className='FilterDesc'>4.5 Corriente Alterna</option>
                </select>
                </div>
                
                <div className='Filter'>
                <span className='FilterTitle'>Velocidad: </span>
                <select className='FilterSelect'>
                  <option className='FilterDesc'>16 Km/Hora</option>
                  <option className='FilterDesc'>20 Km/Hora</option>
                  <option className='FilterDesc'>24 Km/Hora</option>
                </select>
                </div>
              </div> */}

            {cart ? (
              <div className="ContenedorLink">
                <Link to="/cart">Tramitar pedido</Link>
              </div>
            ) : (
              <ItemCount initial={0} stock={data.stock} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
