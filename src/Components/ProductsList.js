import React from "react";
import "./ProductsList.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Aliño especias naturales 220ml / Especialidad doña Eliza",
    price: "$10.000,00 COP",
    image: "/Img-alinos/A220ml.jpeg",
  },
  {
    id: 2,
    name: "Aliño especias naturales 550ml / Especialidad doña Eliza",
    price: "$15.000,00 COP",
    image: "/Img-alinos/A550ml.jpeg",
  },
  {
    id: 3,
    name: "Guacamole especial / frasco 550 ml",
    price: "$15.000,00 COP",
    image: "/Img-alinos/Guacamole.jpeg",
  },
  {
    id: 4,
    name: "Vinagreta especial / Especialidad de doña Eliza",
    price: "$10.000,00 COP",
    image: "/Img-alinos/Vinagreta.jpeg",
  },
  {
    id: 5,
    name: "Sal con especias",
    price: "$10.000,00 COP",
    image: "Img-alinos/SalConEspecias.jpeg",
  },
  {
    id: 6,
    name: "Miel pura de doña Eliza",
    price: "$20.000,00 COP",
    image: "/Img-alinos/MielPura.jpeg",
  },
  {
    id: 7,
    name: "Galleticas de doña Eliza / Chocolate",
    price: "$12.000,00",
    image: "Img-alinos/Galleticas.jpeg",
  },
  {
    id: 8,
    name: "Café de doña Eliza/ 250gr",
    price: "$15.000,00",
    image: "Img-alinos/Cafe.jpeg",
  },
  {
    id: 9,
    name: "Sazón de Hogar / Selección Casera de Doña Eliza",
    price: "$50.000,00",
    image: "Img-alinos/Ancheta.jpeg",
  },
  {
    id: 10,
    name: "Ritual de Café / Caja de regalo",
    price: "$40.000,00",
    image: "Img-alinos/CajaRegalo.jpeg",
  },
];

const ProductList = ({ showAll }) => {
  const navigate = useNavigate();
  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="product-section">
      <h2>PRODUCTOS</h2>
      <div className="product-grid">
        {displayedProducts.map((product) => (
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
