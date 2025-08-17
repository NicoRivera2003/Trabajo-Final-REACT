import React from "react";
import "./AbuelaHistoria.css";

const AbuelaHistoria = () => {
  return (
    <section className="abuela-section">
      <div className="abuela-container">
        <div className="abuela-texto">
          <h2> Los aliños de doña Eliza</h2>
          <p>
            Los aliños de doña Eliza surgieron gracias a su receta secreta con
            la que creo el producto principal de su emprendimiento de Aliño de
            especias, aquí podras realizar pedidos para que conozcas este
            maravilloso producto hecho con amor y con ingredientes naturales,
            especial para carnes, pollos y asados.
            <p className="firma">- Elizabeth Rivera</p>
          </p>
        </div>

        <div className="abuela-imagen">
          <img
            src={`${process.env.PUBLIC_URL}/Img-alinos/ImagenAbuela.jpg`}
            alt="Elizabeth Rivera - Fundadora"
          />
        </div>
      </div>
    </section>
  );
};

export default AbuelaHistoria;
