import { useEffect, useState } from "react";
import { ItemCount } from "../components";
import { getBook } from "../lib/books.requests";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const {id} = useParams();
  const [book, setBook] = useState({});


  useEffect(() => {
    getBook(+id).then((res) => {
      setBook(res);
    });
  }, []);

  if(!Object.keys(book).length) return

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

          <span className="detail__info-stock">¡Quedan solo {book.stock}!</span>

          <ItemCount stock={book.stock} onAdd={() => alert("Comprados")} />
        </div>
      </div>
    </div>
  );
};
