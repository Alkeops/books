import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";


export const NavBar = () => {
  //Logica
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__content"
        >
          <img
            className="navbar__logo"
            src={
              "https://www.gandhi.com.mx/media/logo/stores/1/logo-gandhi-52-aniv.png"
            }
          />
          <nav className="navbar__items">
            <a>Misterio</a>
            <a>Terror</a>
          </nav>
          <CartWidget />
        </div>
      </div>
    </header>
  );
};
