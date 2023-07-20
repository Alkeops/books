import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Outlet } from "react-router-dom";

export const NavBar = () => {
  //Logica
  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="navbar__content">
            <NavLink to="/">
              <img
                className="navbar__logo"
                src={
                  "https://www.gandhi.com.mx/media/logo/stores/1/logo-gandhi-52-aniv.png"
                }
              />
            </NavLink>
            <nav className="navbar__items">
              <NavLink
                to={"/category/aventura"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Aventura
              </NavLink>
              <NavLink
                to={"/category/terror"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Terror
              </NavLink>
              <NavLink
                to={"/category/fantasia"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Fantasia
              </NavLink>
            </nav>
            <CartWidget />
          </div>
        </div>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};
