import React, { useState } from "react";
import "./Contacto.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentario, setComentario] = useState("");

  const handleEnviar = (e) => {
    e.preventDefault();

    const mensaje = `Hola, soy ${nombre}. Mi correo es ${correo}, mi número es ${telefono}. Comentario: ${comentario}`;
    const numero = "573043052568";
    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <div className="contacto-wrapper">
      <h2>Contacto</h2>
      <p className="contacto-descripcion">
        Llena el siguiente formulario si quieres aplicar como distribuidor,
        ponerte en contacto para alianzas o tienes alguna duda.
      </p>

      <form className="formulario-contacto" onSubmit={handleEnviar}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Número de teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <textarea
          placeholder="Comentario"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        ></textarea>
        <button type="submit">Enviar por WhatsApp</button>
      </form>
    </div>
  );
};

export default Contacto;
