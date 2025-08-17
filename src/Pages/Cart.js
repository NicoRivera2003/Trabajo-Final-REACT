import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Tu carrito está vacío</h2>
          <button onClick={() => navigate("/catalogo")}>
            {" "}
            Seguir comprando{" "}
          </button>
          <p>
            ¿Tienes una cuenta? <Link to="/login">Inicia sesión</Link> para
            finalizar tus compras con mayor rapidez.
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
