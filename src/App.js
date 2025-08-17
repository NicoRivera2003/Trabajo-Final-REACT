/* Trabajo final JavaScript 25%
   Nicolás Acevedo Rivera
   Corporación universitaria remington
   17/08/2025
   GITHUB: https://github.com/NicoRivera2003/Trabajo-Final-REACT.git */

import "./App.css"; /*Css predeterminado del proyecto*/
import Header from "./Components/Header";
import ProductList from "./Components/ProductsList";
import AbuelaHistoria from "./Components/AbuelaHistoria"; /*Importo los componentes que vaya creando*/
import Footer from "./Components/Footer";
import Catalogo from "./Pages/Catalogo";
import Contacto from "./Pages/Contacto"; /* Enlaces a páginas */
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; /* React Router para navegar entre páginas */
import { useState } from "react";

/* función principal */
function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProductList showAll={false} />
                <AbuelaHistoria />
              </>
            }
          />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
