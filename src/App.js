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
      <ItemListContainer
      img="../assets/images/ciron.jpeg"
      nombre="Corplus. Iron"
      descripcion="Cinta profesional con motor de corriente alterna de 3.8 HP, súper resistente."
      precio="$592.670"
      stock="5">
      </ItemListContainer>
      <ItemListContainer
      img="../assets/images/zsmax15.jpeg"
      nombre="Zellens Max 15"
      descripcion="Cinta motorizada profesional que llega a 24 km/h. Motor de 4.0 HP y pantalla LCD."
      precio="$656.890"
      stock="7"/>
      <ItemListContainer
      img="../assets/images/gc282.jpeg"
      nombre="Fitage GC-282"
      descripcion="Cinta profesional con motor profesional y 20 niveles de inclinación automática."
      precio="$688.920"
      stock="4"/>
      </div>
      </React.Fragment>
    );
  }
  
  export default App;