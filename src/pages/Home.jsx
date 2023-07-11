import { useState, useEffect } from "react";
import { getBooks } from "../lib/books.requests";
import { ItemListContainer } from "../components";

export const Home = () => {
  const [products, setProducts] = useState([]); //Importante iniciar en array para que no falle el metodo map
  const [isLoading, setIsLoading] = useState(true);
  //Poner en efectos peticiones o cosas asincronas
  useEffect(() => {

   getBooks() //Se simula una peticion
    .then(res => {
      setIsLoading(false); //Cuando esta se resuelve cambia al estado para dejar de cargar
      setProducts(res)} //Ademas setea productos con lo que resolvio la promesa (no hay catch porque estamos segurods de que siempre hay algo)
      
      ) 

  }, []);



  return (
    <div>
      Pagina Principal
      <div className="container">
        <h5>{isLoading ? "Cargando ..." : "Listo"}</h5>
        <ItemListContainer products={products} />
      </div>
    </div>
  );
};
