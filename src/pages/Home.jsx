import { useState, useEffect } from "react";

export const Home = () => {
  const [products, setProducts] = useState([]);
  //Poner en efectos peticiones o cosas asincronas
  useEffect(() => {
    console.log("Montando");
  }, []);

  useEffect(()=>{
    if(products.length) console.log({products})
  },[products])

  return (
    <div>
      Pagina Principal
      <button onClick={() => setProducts([...products, "Producto uno", "Producto dos"])}>
        Agregar Productos
      </button>
    </div>
  );
};
