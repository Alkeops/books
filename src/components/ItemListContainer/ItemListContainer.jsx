import { Item } from "../Item/Item";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => (
  <div className="item-list">
    <h1>{greeting}</h1>
  </div>
);
