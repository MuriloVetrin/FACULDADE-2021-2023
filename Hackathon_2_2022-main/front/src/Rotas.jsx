import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pagina/Home";
import Sobre from "./pagina/Sobre";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rotas;