import { useEffect, useState, useCallback } from "react";
import { Item, ItemCount, Loader } from "../components";
import { getBook } from "../lib/books.requests";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";


export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  const { addProduct, itemInCart } = useCartContext();

  useEffect(() => {
    getBook(id).then((res) => {
      if(!res) return navigate('/');
      setBook(res);
    });
  }, []);

  //useCallback //
  /* 
    const funcion = useCallback(() => {},[array de dependencias ])
  */

  const handleAdd = useCallback(
    (qty) => {
      addProduct(book, qty);
    },
    [addProduct, book]
  );

  if (!Object.keys(book).length) return <Loader />;

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src={book.img} />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{book.title} </span>

          <p className="detail__info-description">{book.description}</p>

          <span className="detail__info-price">
            $
            {(book.price || 0).toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          <span className="detail__info-stock">¡Ultimas piezas! Quedan {book.stock}</span>

          <ItemCount
            stock={book.stock - (itemInCart?.(id)?.qty || 0)} //Se obtiene el item si existe en el cart y se le resta al stock la cantidad que este en el cart (si no existe le resta 0 para evitar errores)
            onAdd={handleAdd}
          />
        </div>
      </div>
    </div>
  );
};
