import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {cintas} from '../../data';

const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise (resolve =>{
          setTimeout(() => {
            resolve (cintas);
          },2000);
        });
        getData.then(res => setData(res.find(cintas=>cintas.id === parseInt(detalleId))));
    
      }, [])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer