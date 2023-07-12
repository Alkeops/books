import { useEffect } from "react";
import { ItemCount } from "../components";

export const Detail = () => {
  useEffect(() => {
    //Peticion detalle producto
  }, []);

  return (
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src="https://m.media-amazon.com/images/I/71yaw5OF7fL._AC_UF1000,1000_QL80_.jpg" />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">Los tres mosqueteros </span>

          <p className="detail__info-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            laborum minima nemo, quam architecto quas eum itaque corrupti sed
            sequi neque asperiores inventore at? Placeat commodi sed beatae
            adipisci quos, nemo voluptatem dicta quis quas tempora fugiat
            corporis esse debitis tenetur modi recusandae impedit quo animi
            voluptatibus! Molestiae, necessitatibus nesciunt!
          </p>

          <span className="detail__info-price">$231.00</span>

          <span className="detail__info-stock">¡Quedan solo 5!</span>

          <ItemCount stock={5} onAdd={() => alert("Comprados")}/>
        </div>
      </div>
    </div>
  );
};
