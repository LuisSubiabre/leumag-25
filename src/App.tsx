import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import InformacionesPage from "@/pages/informaciones";
import ContactoPage from "@/pages/contacto";
import EstamentosPage from "@/pages/estamentos";
import NosotrosPage from "@/pages/nosotros";
import NoticiasPage from "./pages/noticias";
import NoticiaDetalle from "./pages/noticia/[slug]";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<NosotrosPage />} path="/nosotros" />
      <Route element={<EstamentosPage />} path="/estamentos" />
      <Route element={<InformacionesPage />} path="/informaciones" />
      <Route element={<ContactoPage />} path="/contacto" />
      <Route element={<NoticiasPage />} path="/noticias" />
      <Route element={<NoticiaDetalle />} path="/noticia/:slug" />
    </Routes>
  );
}

export default App;
