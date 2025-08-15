import "./App.css"; /*Css predeterminado del proyecto*/
import Header from "./Components/Header";
import ProductList from "./Components/ProductsList";
import AbuelaHistoria from "./Components/AbuelaHistoria"; /*Importo los componentes que vaya creando*/
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductList />
        <AbuelaHistoria />
        <Footer />
      </main>
    </>
  );
}

export default App;
