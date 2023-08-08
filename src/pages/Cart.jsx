import { useEffect, useState } from "react";
import { useCartContext } from "../state/Cart.context";
import { AiOutlineDelete } from "react-icons/ai";
import { addOrder } from "../lib/orders.requests";
import { updateManyBooks } from "../lib/books.requests";

/*
  ORDEN

  {
    buyer: { name: '', email: '', phone: '' },
    items: [{id, title, qty, price}],
    total: 0
  }

*/

export const Cart = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");

  const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

  const createOrder = async () => {
    /* 
      CART = [ 
        { 
          id, description, category, img, title, qty, price
        }
      ]
    */
    /*  items: [{id, title, qty, price}], */
    const items = cart.map(({ id, title, qty, price }) => ({
      id,
      title,
      qty,
      price,
    }));

    const order = {
      buyer: { name, phone, email },
      items,
      total: getTotalPrice,
    };

    const id = await addOrder(order);
    console.log(id); //Mostrar ID usuario TAREA <-->

    await updateManyBooks(items); //NO es obligatorio


    cleanCart();

  };

  return (
    <div className="cart">
      <div className="container cart__container">
        {cart.length ? (
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
            </div>
            <div className="form">
              <div>
                <span>Nombre</span>
                <input
                  className="form__input"
                  placeholder="Nombre"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <span>Correo</span>
                <input
                  className="form__input"
                  placeholder="Correo"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <span>Repetir correo</span>
                <input
                  className="form__input"
                  placeholder="Repetir correo"
                  onChange={(e) => setEmail2(e.target.value)}
                />
              </div>
              <div>
                <span>Teléfono</span>
                <input
                  className="form__input"
                  placeholder="Teléfono"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button
                className="cart__item-button form__button"
                onClick={createOrder}
              >
                Realizar pedido
              </button>
            </div>
          </>
        ) : (
          <h1>EL carrito esta vacio</h1>
        )}
      </div>
    </div>
  );
};
