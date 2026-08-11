import {
  useNavigate,
} from "react-router-dom";

function Configuracoes({
  tema,
  trocarTema,
}) {
  const navigate =
    useNavigate();

  function sair() {
    localStorage.removeItem(
      "logado"
    );

    navigate("/");
  }

  return (
    <div className="container">
      <div className="card">

        <button
          onClick={() =>
            navigate(
              "/dashboard"
            )
          }
        >
          ← Voltar
        </button>

        <br />
        <br />

        <h1>Configurações</h1>

        <br />

        <button
          onClick={() =>
            trocarTema(
              "light"
            )
          }
        >
          ☀️ Tema Claro
        </button>

        <button
          onClick={() =>
            trocarTema(
              "dark"
            )
          }
        >
          🌙 Tema Escuro
        </button>

        <br />
        <br />

        <button
          onClick={sair}
        >
          Sair
        </button>

      </div>
    </div>
  );
}

export default Configuracoes;