import "./Item.css";

export const Item = () => {
  //Aqui pueden pasar cosas
  return (
    <div className="item">
      <div className="item__img">
        <img src="https://imagessl4.casadellibro.com/a/l/t5/64/9788497408264.jpg" />
      </div>
      <div className="item__content">
        <div className="item__content-info">
          <span className="item__content-category">DRAMA</span>
          <span className="item__content-title">El conde de montecristo</span>
        </div>
        <span className="item__content-price">$59.99</span>
      </div>
    </div>
  );
};
