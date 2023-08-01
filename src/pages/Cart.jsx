import { useEffect } from "react";
import { useCartContext } from "../state/Cart.context";
import { AiOutlineDelete } from "react-icons/ai";
export const Cart = () => {
  const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  return (
    <div className="cart">
      <div className="container cart__container">{cart.length ?
      <>
        <div className="cart__item" style={{ border: "none" }}>
          <button className="cart__item-button" onClick={cleanCart}>
            Vaciar carrito
          </button>
        </div>
        <div className="cart__products">
          <div
            className="cart__item"
            style={{ border: "none", padding: "0 16px" }}
          >
            <span>Producto</span>
            <span>Cantidad</span>
            <span>Precio</span>
            <span>Subtotal</span>
          </div>
          {cart.map((item) => (
            <div className="cart__item" key={item.id}>
              <span>{item.title}</span>

              <span>{item.qty}</span>
              <span>
                $
                {item.price.toLocaleString("es-CO", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </span>
              <span>
                $
                {(item.qty * item.price).toLocaleString("es-CO", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </span>
              <button
                className="cart__item-delete"
                onClick={() => removeProduct(item.id)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
        </div>
        <div className="cart__item" style={{ border: "none" }}>
          <div className="cart__total">
            <span>Total</span>{" "}
            <span>
              $
              {getTotalPrice.toLocaleString("es-CO", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </span>
          </div>{" "}
        </div></>  : <h1>EL carrito esta vacio</h1>}
      </div>
    </div>
  );
};
