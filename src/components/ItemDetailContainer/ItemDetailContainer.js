import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Progress from '../Progress/Progress';
import { useParams } from 'react-router-dom';
import {cintas} from '../../data';

const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise (resolve =>{
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            resolve (cintas);
          },2000);
        });
        getData.then(res => setData(res.find(cintas=>cintas.id === parseInt(detalleId))));
    
      }, [])

      return (
        <>
          {isLoading?  <Progress /> :  <ItemDetail data={data}/> }
         
        </>
      );
}

export default ItemDetailContainer