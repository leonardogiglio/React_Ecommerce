import React, {useState, useEffect} from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {cintas} from '../../data';


const ItemListContainer = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    const getData = new Promise (resolve =>{
      setTimeout(() => {
        resolve (cintas);
      }, 2000);
    });
    getData.then(res => setData(res));

  }, [])
  

  return (
   <ItemList data={data}/>
  );
}

export default ItemListContainer;
