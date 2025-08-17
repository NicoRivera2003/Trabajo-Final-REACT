import "./App.css"; /*Css predeterminado del proyecto*/
import Header from "./Components/Header";
import ProductList from "./Components/ProductsList";
import AbuelaHistoria from "./Components/AbuelaHistoria"; /*Importo los componentes que vaya creando*/
import Footer from "./Components/Footer";
import Catalogo from "./Pages/Catalogo";
import Contacto from "./Pages/Contacto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
