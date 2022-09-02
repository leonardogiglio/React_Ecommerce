import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {cintas} from '../../data';

const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise (resolve =>{
          setTimeout(() => {
            resolve (cintas[0]);
          }, 2000);
        });
        getData.then(res => setData(res));
    
      }, [])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer