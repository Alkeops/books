import { Item } from "../Item/Item";
import "./ItemListContainer.css";

//ItemListContainer esta renderizando una lista de productos, es independiente porque el contenedor de los items tiene sus propios estilos.
export const ItemListContainer = ({ products }) => (
  <div className="item-list">
    {products.map((product) => (
      <Item
        key={product.id}
        // Normal
        img={product.img}
        category={product.category}
        title={product.title}
        price={product.price}
        // {...product}
      />
    ))}
  </div>
);
