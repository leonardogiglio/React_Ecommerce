import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import Progress from "../Progress/Progress";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const { detalleId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const querydb = getFirestore();
    const querydoc = doc(querydb, "products", detalleId);
    getDoc(querydoc)
    .then(res => setData({id: res.id, ...res.data()}))
  }, [detalleId]);
  
  return <>{isLoading ? <Progress /> : <ItemDetail data={data} />}</>;
};

export default ItemDetailContainer;
