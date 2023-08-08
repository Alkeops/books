import { useState, useEffect } from "react";
import { getBooks } from "../lib/books.requests";
import { ItemListContainer, Loader } from "../components";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //Poner en efectos peticiones o cosas asincronas
  useEffect(() => {
    getBooks() //Se simula una peticion
      .then(
        (res) => {
          setIsLoading(false); //Cuando esta se resuelve cambia al estado para dejar de cargar
          setProducts(res);
        } //Ademas setea productos con lo que resolvio la promesa (no hay catch porque estamos segurods de que siempre hay algo)
      );
  }, []);

  //Condicional Retorno temprano
  /* if(isLoading) return <Loader /> */

  return (
    <div>
      {/* {isLoading && <Loader />} */}
      {/*   {isLoading || <div>Hola</div>} */}
      {/* {!!0 && <Loader />} */}
      {/*  {0 ? <Loader /> : null} */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <ItemListContainer products={products} />
        </div>
      )}
    </div>
  );
};
