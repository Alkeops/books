import { useEffect } from "react";

export const Detail = () => {

  useEffect(() => {
    //Peticion detalle producto
  }, []);
  
  return (
    <div>
      <div>Foto o fotos</div>
      <div>Nombre</div>
      <div>Descripcion</div>
      <div>Precio</div>
      <div>Stock disponible</div> <div>Contador</div>
    </div>
  );
};
