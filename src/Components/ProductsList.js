import React from 'react';
import "./ProductsList.css";

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
];

const ProductList = () => {

  return (
    <section className="product-section">
      <h2>PRODUCTOS</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <a className="product-name">{product.name}</a>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn">VER TODO</button>
    </section>
  );
};

export default ProductList;