import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import {cintas} from '../../data';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const [data,setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise (resolve =>{
      setTimeout(() => {
        resolve (cintas);
      }, 2000);
    });
    if (categoriaId) {
      getData.then(res => setData(res.filter(cintas => cintas.category === categoriaId)));
    } else {
      getData.then(res => setData(res));
    }

  }, [categoriaId])
  

  return (
   <ItemList data={data}/>
  );
}

export default ItemListContainer;
