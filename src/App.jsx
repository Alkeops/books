import "./App.scss";
/* import "./nombredelarchivo.css" */
import { NavBar, ItemCount, ItemListContainer, Item } from "./components";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

// Etiquetas de apertura y cierre <div> </div> o auto cierre <img />
// images import reactLogo from './assets/react.svg'
// className en lugar de class
// Se escapa javascript con {}
// Estilos son un objeto {} que puede estar en la estructura del componente o directamente en la etiqueta/componente
//Eventos y estilos en camelCase

function App() {
  //Se envia una funcion por props, esta funcion va a recibir la cantidad
  const handleCart = (qty) => {
    console.log("La cantidad es", qty);
  };

  return (
    <div>
      <NavBar />
     {/*  <Home />  */}
      <Detail />
      {/* Al ser una funcion que pasa como props se puede poner directamente el nombre de la funcion
      y pasarlo a su hijo. OJO no se ejecuta solo es el nombre. En este caso solo es handleCart y no handleCart() */}
     {/*  <div className="container">
        <ItemCount stock={10} onAdd={handleCart} />
      </div> */}
      {/*   <ItemCount stock={0} onAdd={handleCart} /> */}
    </div>
  );
}

export default App;
