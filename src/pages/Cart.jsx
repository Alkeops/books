import { useEffect } from "react";
import { useCartContext } from "../state/Cart.context";

export const Cart = () => {
  const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  return (
    <div>
      <button onClick={cleanCart}>Vaciar carrito</button>
      <span>
        Total{" "}
        {getTotalPrice().toLocaleString("es-CO", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </span>
      {cart.map((item) => (
        <div
          style={{
            padding: 50,
            background: "#121212",
            margin: "10px 0",
          }}
          key={item.id}
          onClick={() => removeProduct(item.id)}
        >
          Nombre {item.title}
        </div>
      ))}
    </div>
  );
};
