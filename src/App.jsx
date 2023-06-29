import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
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
  const numero = 5;
  const styleButton = {
    marginTop: "25px",
  };
  return (
    <div>
      <NavBar />
      <div className="container">
        <Item />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img
              src={
                "https://www.gandhi.com.mx/media/logo/stores/1/logo-gandhi-52-aniv.png"
              }
              className="logo"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <span
          style={{
            display: "block",
            fontSize: "10rem",
          }}
        >
          {numero}
        </span>
        <h1>Hola mama estoy en internet</h1>

        <div className="card">
          <button style={styleButton} onClick={() => console.log("holi")}>
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
