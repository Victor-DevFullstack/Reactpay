import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EnviarPix() {
  const navigate = useNavigate();

  const [abaSelecionada, setAbaSelecionada] =
    useState("recentes");

  const contatosRecentes = [
    "João Silva",
    "Maria Souza",
    "Pedro Santos",
    "Ana Lima",
  ];

  const contatosFavoritos = [
    "Carlos Oliveira",
    "Lucas Ferreira",
    "Fernanda Costa",
  ];

  const contatos =
    abaSelecionada === "recentes"
      ? contatosRecentes
      : contatosFavoritos;

  return (
    <div className="container">

      {/* Cabeçalho */}

      <div className="card">

        <button
          className="btn-voltar"
          onClick={() =>
            navigate("/pix")
          }
        >
          ←
        </button>

        <h1>Enviar PIX</h1>

      </div>

      {/* Busca */}

      <div className="card">

        <h3>
          Escolha para quem transferir
        </h3>

        <input
          type="text"
          placeholder="CPF, CNPJ, chave PIX ou nome"
          className="input-pix"
        />

        <p
          className="link-pix"
          onClick={() =>
            navigate(
              "/pix/agencia-conta"
            )
          }
        >
          Fazer PIX com agência e conta →
        </p>

      </div>

      {/* Abas */}

      <div className="card">

        <div className="abas-pix">

          <button
            className={
              abaSelecionada ===
              "recentes"
                ? "aba ativa"
                : "aba"
            }
            onClick={() =>
              setAbaSelecionada(
                "recentes"
              )
            }
          >
            Recentes
          </button>

          <button
            className={
              abaSelecionada ===
              "favoritos"
                ? "aba ativa"
                : "aba"
            }
            onClick={() =>
              setAbaSelecionada(
                "favoritos"
              )
            }
          >
            Favoritos
          </button>

        </div>

      </div>

      {/* Contatos */}

      {contatos.map(
        (contato, index) => (
          <div
            key={index}
            className="card contato-card"
          >
            <div className="avatar">
              {contato
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>
              <strong>
                {contato}
              </strong>

              <p>
                Toque para enviar PIX
              </p>
            </div>
          </div>
        )
      )}

    </div>
  );
}

export default EnviarPix;