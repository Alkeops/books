import { createContext, useContext, useEffect, useState, useMemo } from "react";
//Value por defecto createContext([]) <- []
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);
/* 
    Añadir
    Leer
    Eliminar

    Limpiar
*/

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
 
   //Funcion para buscar un item, explorar otras formas de hacerlo más practico
  const itemInCart = (id) => cart.find((product) => product.id === id);
  // AÑADIR
  const addProduct = (item, qty) => {
    //Se busca el elemento
    const element = itemInCart(item.id);
    //Si no existe directamente se agrega
    if (!element) return setCart([...cart, { ...item, qty }]);
    //Si existe se crea un nuevo array y al elemento que coincida con el item.id recibido por parametros se le suma la cantidad recibida por parametros
    const newCart = cart.map((product) =>
      product.id === item.id ? { ...product, qty: product.qty + qty } : product
    );
    setCart(newCart);
  };
  //ELIMINAR
  const removeProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };
  //LIMPIAR
  const cleanCart = () => setCart([]);

  //Total Items
  //useMemo TODO comentar
  const getCartQty = useMemo(() => cart.reduce((acc, item) => acc + item.qty, 0),[cart]);

  //Precio Total
  const getTotalPrice = useMemo(() =>
    cart.reduce((acc, item) => acc + item.price * item.qty, 0),[cart]);

  /* 
    const valor = useMemo( funcion que retorna valor, [array de dependencias ] )
  */
  //Toda la información que comparte el contexto
  const value = {
    cart,
    addProduct,
    removeProduct,
    cleanCart,
    getCartQty,
    getTotalPrice,
    itemInCart
  };

  return (
    <CartContext.Provider value={value} displayName="CartContext">
      {children}
    </CartContext.Provider>
  );
};
