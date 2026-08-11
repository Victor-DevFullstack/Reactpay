import { useEffect, useState } from "react";

function Cotacao() {
  const [dolar, setDolar] =
    useState(null);

  useEffect(() => {
    buscarCotacao();
  }, []);

  async function buscarCotacao() {
    try {
      const resposta =
        await fetch(
          "https://economia.awesomeapi.com.br/json/last/USD-BRL"
        );

      const dados =
        await resposta.json();

      setDolar(
        dados.USDBRL.bid
      );
    } catch {
      console.log(
        "Erro ao carregar cotação"
      );
    }
  }

  return (
    <div>
      <h2>Cotação</h2>

      <p>
        Dólar Hoje:
        {" "}
        {dolar
          ? `R$ ${Number(
              dolar
            ).toFixed(2)}`
          : "Carregando..."}
      </p>
    </div>
  );
}

export default Cotacao;