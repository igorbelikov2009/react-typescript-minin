import { Route, Routes } from "react-router-dom";
import AboutPages from "./pages/AboutPages";
import ProductsPage from "./pages/ProductsPage";
import Navigation from "./component/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<ProductsPage />}></Route>
        <Route path="/about" element={<AboutPages />}></Route>
      </Routes>
    </>
  );
}

export default App;
