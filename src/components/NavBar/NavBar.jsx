import {FaOpencart} from "react-icons/fa";

export const NavBar = () => {
  //Logica
  return (
    <header>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src={
              "https://www.gandhi.com.mx/media/logo/stores/1/logo-gandhi-52-aniv.png"
            }
            className="logo"
            alt="Vite logo"
          />
          <span style={{ fontSize: 18, fontWeight: "bolder" }}>Gandhi</span>
          <FaOpencart style={{fontSize: 50, color: 'red'}} />
          <nav>
            <a>Misterio</a>
            <a>Terror</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
