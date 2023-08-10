import { useState } from "react";
import { useCartContext } from "../state/Cart.context";
import { AiOutlineDelete } from "react-icons/ai";
import { addOrder } from "../lib/orders.requests";
import { updateManyBooks } from "../lib/books.requests";
import { Input, LocaleString } from "../components";

const BUY_FORM = [
  { label: "Nombre", name: "name", placeholder: "Escribe tu nombre" },
  { label: "Correo", name: "email", placeholder: "Escribe tu email" },
  { label: "Repite correo", name: "email2", placeholder: "Repite tu email" },
  { label: "Teléfono", name: "phone", placeholder: "Escribe tu teléfono" },
];

export const Cart = () => {
  const [form, setForm] = useState({});

  const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

  const createOrder = async () => {
    const items = cart.map(({ id, title, qty, price }) => ({
      id,
      title,
      qty,
      price,
    }));

    const { name, phone, email } = form;

    const order = {
      buyer: { name, phone, email },
      items,
      total: getTotalPrice,
    };

    const id = await addOrder(order);
    console.log(id); //Mostrar ID usuario TAREA <-->

    await updateManyBooks(items);

    cleanCart();
  };

  const handleChange = ({ target: { value, name } }) => {
    /* handleChange = (e) */
    setForm({
      ...form,
      [name]: value,
    });
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
                  <LocaleString num={item.price} />
                  <LocaleString num={item.qty * item.price} />

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
                <span>Total</span> <LocaleString num={getTotalPrice} />
              </div>{" "}
            </div>
            <div className="form">
              {BUY_FORM.map((input) => (
                <Input key={input.name} onChange={handleChange} {...input} />
              ))}
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
