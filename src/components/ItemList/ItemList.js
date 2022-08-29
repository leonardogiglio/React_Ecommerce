import React, {useState, useEffect} from "react";
import Item from"../Item/Item";

const ItemList = () => {

    const [users, setUsers ] = useState ([]);

    useEffect (() => {
      fetch('https://api.mercadolibre.com/sites/MLA/search?nickname=SUREXARGENTINASA')
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
    }, []);
  

  return (
    <div className="UserSection">
        {users.map((user)=> {
            return (
              <Item key={user.id} data={user}/>
            )
        })}
    </div>
  );
};

export default ItemList;