import React from "react";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Greeting from "./components/Greeting/Greeting";
import './App.css';

function App() {
    return (
      <React.Fragment>
      <div className="App">
        <NavBar />
      </div>
      <div className="Greeting">
          <Greeting 
          nombre="Carla"
          img="../assets/images/usuario.png"/>
      </div>
      <div className="UserSection">
      <ItemListContainer />
      </div>
      </React.Fragment>
    );
  }
  
  export default App;