import React from "react";
import "./Header.css";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi"; /*Librería de iconos de React "Fi "*/
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <img src="/Img-alinos/LogoAbuela.png" alt="Logo Abuela" />
        </div>
      </div>

      <div className="header__bottom">
        <nav className="header__nav">
          <Link to="/" className="nav__link">
            Inicio
          </Link>
          <Link to="/catalogo" className="nav__link">
            Catálogo
          </Link>
          <Link to="/contacto" className="nav__link">
            Contacto
          </Link>
        </nav>

        <div className="header__icons">
          <button>
            <FiSearch size={24} />
          </button>
          <button>
            <FiShoppingCart size={24} />
          </button>
          <button>
            <FiUser size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
