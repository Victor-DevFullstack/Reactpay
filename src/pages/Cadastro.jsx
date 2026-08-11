import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] =
    useState("");
  const [senha, setSenha] =
    useState("");

  const navigate = useNavigate();

  function cadastrar() {
    const usuario = {
      nome,
      email,
      senha,
    };

    localStorage.setItem(
      "usuario",
      JSON.stringify(usuario)
    );

    alert(
      "Conta criada com sucesso!"
    );

    navigate("/");
  }

  localStorage.setItem(
  "saldo",
  1000
);

localStorage.setItem(
  "historico",
  JSON.stringify([])
);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Criar Conta</h1>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) =>
            setNome(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) =>
            setSenha(e.target.value)
          }
        />

        <button onClick={cadastrar}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default Cadastro;