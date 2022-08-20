import React from "react";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
  
  export default App;