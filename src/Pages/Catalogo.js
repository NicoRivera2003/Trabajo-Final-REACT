import React, { useEffect, useState } from "react";
import ProductList from "../Components/ProductsList";
import { useLocation } from "react-router-dom";

const Catalogo = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const busquedaUrl = queryParams.get("busqueda") || "";
  const [busqueda, setBusqueda] = useState(busquedaUrl);

  useEffect(() => {
    setBusqueda(busquedaUrl);
  }, [busquedaUrl]);

  return (
    <section>
      <h1>Catálogo completo</h1>

      <div className="buscador-catalogo">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "400px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <ProductList showAll={true} filtro={busqueda} />
    </section>
  );
};

export default Catalogo;
