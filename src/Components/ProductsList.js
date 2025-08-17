import React from "react";
import "./ProductsList.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Fuse from "fuse.js";

const products = [
  {
    id: 1,
    name: "Aliño especias naturales 220ml / Especialidad doña Eliza",
    price: "$10.000,00 COP",
    image: `${process.env.PUBLIC_URL}/Img-alinos/A220ml.jpeg`,
  },
  {
    id: 2,
    name: "Aliño especias naturales 550ml / Especialidad doña Eliza",
    price: "$15.000,00 COP",
    image: `${process.env.PUBLIC_URL}/Img-alinos/A550ml.jpeg`,
  },
  {
    id: 3,
    name: "Guacamole especial / frasco 550 ml",
    price: "$15.000,00 COP",
    image: `${process.env.PUBLIC_URL}/Img-alinos/Guacamole.jpeg`,
  },
  {
    id: 4,
    name: "Vinagreta especial / Especialidad de doña Eliza",
    price: "$10.000,00 COP",
    image: `${process.env.PUBLIC_URL}/Img-alinos/Vinagreta.jpeg`,
  },
  {
    id: 5,
    name: "Sal con especias",
    price: "$10.000,00 COP",
    image: `${process.env.PUBLIC_URL}/Img-alinos/SalConEspecias.jpeg`,
  },
  {
    id: 6,
    name: "Miel pura de doña Eliza",
    price: "$20.000,00 COP",
    image: `${process.env.PUBLIC_URL}/Img-alinos/MielPura.jpeg`,
  },
  {
    id: 7,
    name: "Galleticas de doña Eliza / Chocolate",
    price: "$12.000,00",
    image: `${process.env.PUBLIC_URL}/Img-alinos/Galleticas.jpeg`,
  },
  {
    id: 8,
    name: "Café de doña Eliza/ 250gr",
    price: "$15.000,00",
    image: `${process.env.PUBLIC_URL}/Img-alinos/Cafe.jpeg`,
  },
  {
    id: 9,
    name: "Sazón de Hogar / Selección Casera de Doña Eliza",
    price: "$50.000,00",
    image: `${process.env.PUBLIC_URL}/Img-alinos/Ancheta.jpeg`,
  },
  {
    id: 10,
    name: "Ritual de Café / Caja de regalo",
    price: "$40.000,00",
    image: `${process.env.PUBLIC_URL}/Img-alinos/CajaRegalo.jpeg`,
  },
];

const ProductList = ({ showAll, filtro = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const normalizeText = (text) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const productosFiltrados = (showAll ? products : products.slice(0, 4)).filter(
    (producto) => normalizeText(producto.name).includes(normalizeText(filtro))
  );

  const hayBusquedaYResultados = filtro && productosFiltrados.length > 0;

  return (
    <section
      className={`product-section ${
        hayBusquedaYResultados ? "resultados-busqueda" : ""
      }`}
    >
      <h2>PRODUCTOS</h2>
      <div className="product-grid">
        {productosFiltrados.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <a className="product-name">{product.name}</a>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <button className="view-all-btn" onClick={() => navigate("/catalogo")}>
          VER TODO
        </button>
      )}
    </section>
  );
};

export default ProductList;
