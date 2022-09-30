import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "../ItemList/ItemList";
import Progress from "../Progress/Progress";

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

        const getProducts = async () => {
          setIsLoading(true);
          const q = query(collection(db, "products"));
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
      }, []);

  return <>{isLoading ? <Progress /> : <ItemList data={data} />}</>;
};

export default ItemListContainer;
