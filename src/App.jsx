import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
/* import "./nombredelarchivo.css" */
import {NavBar} from "./components/NavBar/NavBar";
import {Item} from "./components/Item/Item";

// Etiquetas de apertura y cierre <div> </div> o auto cierre <img />
// images import reactLogo from './assets/react.svg'
// className en lugar de class
// Se escapa javascript con {}
// Estilos son un objeto {} que puede estar en la estructura del componente o directamente en la etiqueta/componente
//Eventos y estilos en camelCase

function App() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const [form, setForm] = useState({})
  
  const numero = 5;
  const styleButton = {
    marginTop: "25px",
  };

  const handleCount = () => {
    setCount(count + 10)
  }

  return (
    <div>
 {/*      <NavBar /> */}
      <div className="container">
       {/*  <Item /> */}       
        <div
        onClick={() => setActive(!active)}
        style={{
          height: 200,
          width: 200,
          background: active ? "blue" : "green"
         }} 
         
         
         />
        <div className="card">
          <button style={styleButton} onClick={() => handleCount()}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
