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

  //TODO AÑADIR
  const addProduct = (item, qty) => {
    const element = cart.find((product) => product.id === item.id);
    if (!element) return setCart([...cart, { ...item, qty }]);

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
