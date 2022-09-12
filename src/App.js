import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Greeting from "./components/Greeting/Greeting";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartContext";

//CSS
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <CartProvider>
          <div className="App">
            <NavBar />
          </div>
          <div className="Greeting">
            <Greeting nombre="Carla" img="../assets/images/usuario.png" />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <div className="UserSection">
                  <ItemListContainer />
                </div>
              }
            />
            <Route
              path="/categoria/:categoriaId"
              element={
                <div className="UserSection">
                  <ItemListContainer />
                </div>
              }
            />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
