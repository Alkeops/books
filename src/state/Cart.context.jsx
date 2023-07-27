import { createContext, useContext, useState } from "react";
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

  // AÑADIR
  const addProduct = (item, qty) => {
    //Se busca el elemento
    const element = cart.find((product) => product.id === item.id);
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
  const getCartQty = () => cart.reduce((acc, item) => acc + item.qty, 0);

  //Precio Total
  const getTotalPrice = () =>
    cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  //Toda la información que comparte el contexto
  const value = {
    cart,
    addProduct,
    removeProduct,
    cleanCart,
    getCartQty,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={value} displayName="CartContext">
      {children}
    </CartContext.Provider>
  );
};
