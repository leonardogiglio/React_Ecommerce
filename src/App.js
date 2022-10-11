import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartContext";
import CategoryListContainer from "./components/CategoryListContainer/CategoryListContainer";
import Form from "./components/Form/Form";

//CSS
import "./App.css";
import SearchDetailContainer from "./components/SearchDetailContainer/SearchDetailContainer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <CartProvider>
          <div className="App">
            <NavBar />
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
                  <CategoryListContainer />
                </div>
              }
            />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </CartProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
