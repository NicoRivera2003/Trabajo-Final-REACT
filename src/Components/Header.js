import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiChevronDown,
} from "react-icons/fi"; /*Librería de iconos de React "Fi "*/
import { Link } from "react-router-dom";

const Header = () => {
  const [busqueda, setBusqueda] = useState("");
  const [mostrarInput, setMostrarInput] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();
  const usuario = localStorage.getItem("usuario");

  const handleBuscar = () => {
    if (busqueda.trim() !== "") {
      navigate(`/catalogo?busqueda=${encodeURIComponent(busqueda)}`);
      setMostrarInput(false);
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <img
            src={`${process.env.PUBLIC_URL}/Img-alinos/LogoAbuela.png`}
            alt="Logo Abuela"
          />
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
          <div className={`search-container ${mostrarInput ? "active" : ""}`}>
            {mostrarInput && (
              <input
                type="text"
                className="header__search-input"
                placeholder="Buscar producto"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleBuscar();
                }}
                autoFocus
              />
            )}
            <button
              onClick={() => {
                if (mostrarInput && busqueda.trim() !== "") {
                  handleBuscar();
                } else {
                  setMostrarInput(!mostrarInput);
                }
              }}
              aria-label="Buscar"
              className="search-btn"
            >
              <FiSearch size={24} />
            </button>
          </div>

          <button onClick={() => navigate("/cart")}>
            <FiShoppingCart size={24} />
          </button>

          {usuario ? (
            <div className="usuario-dropdown">
              <button
                className="icono-usuario"
                onClick={() => setMenuAbierto(!menuAbierto)}
              >
                <FiUser size={24} />
                <FiChevronDown size={16} />
              </button>
              {menuAbierto && (
                <div className="dropdown-menu">
                  <button onClick={() => navigate("/perfil")}>Perfil</button>
                  <button onClick={() => navigate("/configuración")}>
                    Configuración
                  </button>
                  <button onClick={cerrarSesion}>Cerrar Sesión</button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="icono-usuario"
              onClick={() => navigate("/login")}
            >
              <FiUser size={24} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
