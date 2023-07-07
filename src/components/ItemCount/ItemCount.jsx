import { useState } from "react";
import './ItemCount.css';

export const ItemCount = ({ stock, onAdd }) => {
  //Estado para manejar el contador
  const [count, setCount] = useState(1);

  /* Forma tradicional 

    const handleSum = () => {
      Se compara si stock es mayor que count, si asi es se agrega con setCount
       el valor actual + 1. Ejemplo stock = 10, count = 5 10 > 5 entonces setCount(count +1 //6)
      if(stock > count) setCount(count + 1)
    }

    const handleSub = () => {
      Lo mismo que la anterior pero hacia la resta
      if(count > 1) setCount(count - 1)
    } */

  const handleSum = () => {
    //Podemos usar los metodos de Math que ya vienen con JS
    // Math.min retorna el numero mas pequeño por ejemplo  console.log(Math.min(12, 15)); retornaria 12
    // Math.max retorna el numero mas grande por ejemplo  console.log(Math.max(2, 3, 4, 5, 6)); retornaria 6
    setCount(Math.min(stock, count + 1));
  };

  const handleSub = () => {
    //Retornaria el numero mas grande entre 1 y count - 1, quiere decir que si count - 1 es === 0 entonces retornaria 1 al ser 0 mas pequeño que uno
    setCount(Math.max(1, count - 1));
  };

  return (
    <div className="item-count">
      <div className="item-count__buttons">
        <button onClick={() => handleSub()}>-</button>
        <span>{count}</span>
        <button onClick={() => handleSum()}>+</button>
      </div>
      <button className="item-count__add" disabled={!stock} onClick={() => onAdd(count)}>
        Agregar a carrito
      </button>
    </div>
  );
};
