import React from "react";
import Item from"../Item/Item";

const ItemList = ({data =[]}) => {

  return (
      data.map(cinta => <Item key={cinta.id} info={cinta}/>)
  );
};

export default ItemList;