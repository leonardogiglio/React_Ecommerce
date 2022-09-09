import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import {cintas} from '../../data';
import { useParams } from 'react-router-dom';
import Progress from '../Progress/Progress';


const ItemListContainer = () => {

  const [data,setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise (resolve =>{
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
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
    <>
      {isLoading?  <Progress /> :  <ItemList data={data}/> }
     
    </>
  );
}

export default ItemListContainer;
