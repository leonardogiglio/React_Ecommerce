import React, { useState, useEffect } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import Progress from "../Progress/Progress";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const CategoryListContainer = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const { categoriaId } = useParams();

        const getProducts = async () => {
          setIsLoading(true);
          const q = query(collection(db, "products"), where('category', '==', categoriaId));
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
      }, [categoriaId]);
  
      return <>{isLoading ? <Progress /> : <ItemList data={data} />}</>;
}

export default CategoryListContainer;
