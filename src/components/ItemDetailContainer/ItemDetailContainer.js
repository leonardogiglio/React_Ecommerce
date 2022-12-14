import React, { useState, useEffect } from "react";
import { collection, query, getDocs, documentId, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemDetail from "../ItemDetail/ItemDetail";
import Progress from "../Progress/Progress";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const { detalleId } = useParams();

        const getProducts = async () => {
          setIsLoading(true);
          const q = query(collection(db, "products"), where(documentId(), '==', detalleId));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(), id: doc.id});
          });
          setData(docs);
          setIsLoading(false);
      };

      useEffect(() => {
       getProducts();
      }, [detalleId]);
  
  return (
    <div>
      {isLoading ? (
        <Progress /> 
      ):(
        data.map((data) => {
          return <ItemDetail data={data} key={data.id}/>;
        })
      )}
    </div>
    );
}

export default ItemDetailContainer;
