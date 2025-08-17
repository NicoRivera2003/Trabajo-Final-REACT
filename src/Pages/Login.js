import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [codigoUsuario, setCodigoUsuario] = useState("");
  const [codigoGenerado, setCodigoGenerado] = useState("");

  const enviarCodigo = (e) => {
    e.preventDefault();

    const codigo = Math.floor(100000 + Math.random() * 900000).toString();
    setCodigoGenerado(codigo);

    const templateParams = {
      to_email: email,
      subject: "Tu código de verificación es:",
      codigo: codigo,
    };

    emailjs
      .send(
        "service_a65ucrp",
        "template_b89gy2b",
        templateParams,
        "ik4K7Oeb49PDHq4Lv"
      )
      .then(() => {
        setCodigoEnviado(true);
        alert("📧 Código enviado a tu correo.");

        localStorage.setItem("usuario", email);
      })
      .catch((error) => {
        console.error("Error enviando correo:", error);
        alert("❌ Error enviando el código. Intenta de nuevo.");
      });
  };

  const verificarCodigo = (e) => {
    e.preventDefault();
    if (codigoUsuario === codigoGenerado) {
      alert("✅ Código correcto. Sesión iniciada.");
    } else {
      alert("❌ Código incorrecto.");
    }

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>

      {!codigoEnviado ? (
        <form onSubmit={enviarCodigo}>
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Enviar código</button>
        </form>
      ) : (
        <form onSubmit={verificarCodigo}>
          <input
            type="text"
            placeholder="Ingresa el código recibido"
            value={codigoUsuario}
            onChange={(e) => setCodigoUsuario(e.target.value)}
            required
          />
          <button type="submit">Verificar código</button>
        </form>
      )}
    </div>
  );
};

export default Login;
