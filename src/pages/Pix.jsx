import { useNavigate } from "react-router-dom";
import iconeVoltar from "../assets/icons/arrow-left-circle.svg"

function Pix() {
  const navigate = useNavigate();

  const usuario = JSON.parse(
    localStorage.getItem("usuario") || "{}"
  );

  const contatos = JSON.parse(
    localStorage.getItem("contatosRecentes") ||
      JSON.stringify([
        {
          nome: "João",
          avatar: "J",
        },
        {
          nome: "Maria",
          avatar: "M",
        },
        {
          nome: "Pedro",
          avatar: "P",
        },
        {
          nome: "Ana",
          avatar: "A",
        },
        {
          nome: "Carlos",
          avatar: "C",
        },
      ])
  );

  const chaves = JSON.parse(
    localStorage.getItem("chavesPix") ||
      JSON.stringify([
        {
          tipo: "E-mail",
          valor:
            usuario.email ||
            "usuario@email.com",
        },
        {
          tipo: "Telefone",
          valor:
            "(16) 99999-9999",
        },
        {
          tipo: "CPF",
          valor:
            "123.456.789-00",
        },
      ])
  );

  return (
    <div className="container">

      {/* CABEÇALHO */}

      <div className="card">

        <button
        className="btn-voltar"
        onClick={() => navigate("/dashboard")}
        >
        {/*<img src={iconeVoltar} alt="Voltar" className="icone-voltar"/>*/}
        ← 
        </button>

        <h1>PIX</h1>

      </div>

      {/* OPÇÕES PIX */}

      <div className="card">

        <h2>Opções PIX</h2>

        <div className="acoes-scroll">

          <div
            className="acao-item"
            onClick={() => navigate("/pix/enviar")}
          >
            <button className="acao-btn">
              💸
            </button>

            <span>Enviar</span>
          </div>

          <div
            className="acao-item"
            onClick={() =>
              navigate("/pix/receber")
            }
          >
            <button className="acao-btn">
              💰
            </button>

            <span>Receber</span>
          </div>

          <div
            className="acao-item"
            onClick={() =>
              navigate("/pix/copiaecola")
            }
          >
            <button className="acao-btn">
              📋
            </button>

            <span>Copia e Cola</span>
          </div>

          <div
            className="acao-item"
            onClick={() =>
              navigate("/pix/chaves")
            }
          >
            <button className="acao-btn">
              🔑
            </button>

            <span>Chaves</span>
          </div>

        </div>

      </div>

      {/* CONTATOS */}

      <div className="card">

        <h2>Meus Contatos</h2>

        <div className="acoes-scroll">

          {contatos.map(
            (contato, index) => (
              <div
                key={index}
                className="acao-item"
              >
                <button className="acao-btn2">
                  {contato.avatar}
                </button>

                <span>
                  {contato.nome}
                </span>
              </div>
            )
          )}

        </div>

        <button
          style={{
            marginTop: "15px",
          }}
        >
          Ver mais
        </button>

      </div>

      {/* CHAVES PIX */}

      <div className="card">

        <h2>Minhas Chaves</h2>

        {chaves.map(
          (chave, index) => (
            <div
              key={index}
              style={{
                marginBottom:
                  "15px",
              }}
            >
              <strong>
                {chave.tipo}
              </strong>

              <p>
                {chave.valor}
              </p>
            </div>
          )
        )}

        <button>
          Cadastrar chave PIX
        </button>

      </div>

    </div>
  );
}

export default Pix;