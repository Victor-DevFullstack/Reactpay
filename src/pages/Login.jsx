import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  function fazerLogin() {
    const usuario = JSON.parse(
      localStorage.getItem("usuario")
    );

    if (!usuario) {
      alert("Nenhum usuário cadastrado.");
      return;
    }

    if (
      email === usuario.email &&
      senha === usuario.senha
    ) {
      localStorage.setItem(
        "logado",
        "true"
      );

      navigate("/dashboard");
    } else {
      alert("Email ou senha incorretos.");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>ReactPay</h1>

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

        <button onClick={fazerLogin}>
          Entrar
        </button>

        <p>Não possui conta?</p>

        <Link to="/cadastro">
          Criar Conta
        </Link>
      </div>
    </div>
  );
}

export default Login;