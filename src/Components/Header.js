import React from 'react';
import "./Header.css";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi"; /*Librería de iconos de React "Fi "*/

const Header = () =>  {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <img src="/Img-alinos/LogoAbuela.png" alt="Logo Abuela" />
        </div>
      </div>

      <div className="header__bottom">
        <nav className="header__nav">
          <a href="#">Inicio</a>
          <a href="#">Catálogo</a>
          <a href="#">Contacto</a>
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
  )
}

export default Header;