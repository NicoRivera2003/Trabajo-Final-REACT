import React from "react";
import ProductList from "../Components/ProductsList";

const Catalogo = () => {
  return (
    <section>
      <h1>Catálogo completo</h1>
      <ProductList showAll={true} />
    </section>
  );
};

export default Catalogo;
