import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import "./ItemDetail.css";
import Footer from "../Footer/Footer";

const ItemDetail = ({ data }) => {
  const [cart, setCart] = useState(false);

  const { addItem } = useCartContext();

  const onAdd = (quantity) => {
    setCart(true);
    addItem(data, quantity);
  };

  return (
    <div>
      <div className="Container">
        <div className="Divider">
          <div className="ImgContainer">
            <img className="Img" src={data.img} alt="" />
          </div>
          <div className="InfoContainer">
            <h1 className="Title">{data.title}</h1>
            <p className="Description">{data.descLarg}</p>
            <span className="Price">$ {data.price}</span>

            {cart ? (
              <div className="ContenedorLink">
                <Link to="/cart">Tramitar pedido</Link>
              </div>
            ) : (
              <ItemCount initial={0} stock={data.stock} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetail;
