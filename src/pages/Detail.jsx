import { useEffect, useState } from "react";
import { ItemCount } from "../components";
import { getBook } from "../lib/books.requests";

//TODO
export const Detail = () => {
  const [book, setBook] = useState({});

  useEffect(() => {
    //Peticion detalle producto
    getBook().then((res) => {
      setBook(res);
    });
  }, []);

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
            {(book.price || 0).toLocaleString("es-CO", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          <span className="detail__info-stock">¡Quedan solo {book.stock}!</span>

          <ItemCount stock={book.stock} onAdd={() => alert("Comprados")} />
        </div>
      </div>
    </div>
  );
};
