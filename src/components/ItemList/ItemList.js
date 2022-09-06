import React from "react";
import Item from"../Item/Item";
import "./ItemList.css";

const ItemList = ({data =[]}) => {

  return (
      data.map(cinta => <div className="ItemList"><Item key={cinta.id} info={cinta}/></div>)
  );
};

export default ItemList;