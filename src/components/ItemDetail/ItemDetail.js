import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import NavBar from '../NavBar/NavBar';
import './ItemDetail.css';

const ItemDetail = ({data}) => {
  return (
    <div>
      <div className='Container'>
          <div className='Divider'>
            <div className='ImgContainer'>
              <img className='Img' src={data.img} />
            </div>
            <div className='InfoContainer'>
              <h1 className='Title'>{data.title}</h1>
              <p className='Description'>{data.descLarg}</p>
              <span className='Price'>{data.price}</span>
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

              <div className='ButtonContainer'>
              <ItemCount stock={data.stock}/>
              <button className='Button'>Comprar</button>
              </div>
            </div>
          </div>
      </div>
      </div>
  )
}

export default ItemDetail;