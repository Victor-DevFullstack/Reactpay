import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Configuracoes from "./pages/Configuracoes";
import Pix from "./pages/Pix";
import EnviarPix from "./pages/EnviarPix";

import { useState } from "react";

function App() {
  const temaSalvo =
    localStorage.getItem("tema") || "light";

  const [tema, setTema] = useState(temaSalvo);

  function trocarTema(novoTema) {
    setTema(novoTema);

    localStorage.setItem(
      "tema",
      novoTema
    );
  }

  return (
    <div className={tema}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/cadastro"
            element={<Cadastro />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/configuracoes"
            element={
              <Configuracoes
                tema={tema}
                trocarTema={trocarTema}
              />
            }
          />

          <Route
          path="/pix"
          element={<Pix />}
          />

          <Route
          path="/pix/enviar"
          element={<EnviarPix />}
          />    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;