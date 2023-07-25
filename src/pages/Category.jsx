import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBooks } from "../lib/books.requests";
import { ItemListContainer } from "../components";

export const Category = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    getBooks(id).then((res) => {
      setIsLoading(false);
      setProducts(res);
    });
  }, [id]);

  return (
    <div>
      <div className="container">
        <h5>{isLoading ? "Cargando ..." : "Listo"}</h5>
        <ItemListContainer products={products} />
      </div>
    </div>
  );
};
