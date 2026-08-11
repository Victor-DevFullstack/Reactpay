import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Historico from "../components/Historico";
import Cotacao from "../components/Cotacao";

import pixIcon from "../assets/icons/pix.svg";
import pagamentoIcon from "../assets/icons/receipt.svg";
import cofrinhoIcon from "../assets/icons/cofrinho.svg";
//import investimentoIcon from "../assets/icons/investimentos.svg";
//import maisIcon from "../assets/icons/mais.svg";

import eyeIcon from "../assets/icons/eye.svg";
import eyeOffIcon from "../assets/icons/eye-slash.svg";

function Dashboard() {
  const navigate = useNavigate();

  const usuario = JSON.parse(
    localStorage.getItem("usuario")
  );

  if (!localStorage.getItem("logado")) {
    navigate("/");
    return null;
  }

  const [saldo] = useState(
    Number(localStorage.getItem("saldo")) || 1000
  );

  const [historico] = useState(
    JSON.parse(
      localStorage.getItem("historico")
    ) || []
  );

  const [mostrarSaldo, setMostrarSaldo] =
    useState(
      localStorage.getItem(
        "mostrarSaldo"
      ) !== "false"
    );

  const [historicoAberto, setHistoricoAberto] =
    useState(true);

  const acoes = [
    {
      nome: "PIX",
      icone: pixIcon,
      rota: "/pix",
    },
    {
      nome: "Pagamentos",
      icone: pagamentoIcon,
      rota: "/pagamentos",
    },
    {
      nome: "Cofrinho",
      icone: cofrinhoIcon,
      rota: "/cofrinho",
    },
    //{
      //nome: "Investimentos",
      //icone: investimentoIcon,
      //rota: "/investimentos",
    //},
    //{
      //nome: "Ver Mais",
      //icone: maisIcon,
    //},
  ];

  function alternarSaldo() {
    const novoValor = !mostrarSaldo;

    setMostrarSaldo(novoValor);

    localStorage.setItem(
      "mostrarSaldo",
      novoValor
    );
  }

  return (
    <div className="container">
      <div className="topo">
        <h1>ReactPay</h1>

        <Link to="/configuracoes">
          ⚙️
        </Link>
      </div>

      <div className="card">
        <h2>
          Olá, {usuario?.nome} 👋
        </h2>

        <p>{usuario?.email}</p>
      </div>

      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
          }}
        >
          <h2>Saldo</h2>

          <button
            className="btn-olho"
            onClick={alternarSaldo}
          >
            <img
              src={
                mostrarSaldo
                  ? eyeIcon
                  : eyeOffIcon
              }
              alt="Mostrar saldo"
              className="icone-olho"
            />
          </button>
        </div>

        <h1 className="saldo">
          {mostrarSaldo
            ? `R$ ${saldo.toFixed(2)}`
            : "••••••"}
        </h1>
      </div>

      <div className="card">
        <div className="acoes-scroll">
          {acoes.map((acao) => (
            <div
              key={acao.nome}
              className="acao-item"
              onClick={() =>
                navigate(acao.rota)
              }
            >
              <button className="acao-btn">
                <img
                  src={acao.icone}
                  alt={acao.nome}
                  className="icone-acao"
                />
              </button>

              <span>{acao.nome}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <Cotacao />
      </div>

      <div className="card">
        <div className="historico-topo">
          <h2>Histórico</h2>

          <button
            className="btn-historico"
            onClick={() =>
              setHistoricoAberto(
                !historicoAberto
              )
            }
          >
            {historicoAberto
              ? "▲"
              : "▼"}
          </button>
        </div>

        {historicoAberto && (
          <Historico
            historico={historico}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;