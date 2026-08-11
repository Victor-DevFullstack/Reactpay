function Historico({ historico }) {
  return (
    <>
      {historico.length === 0 ? (
        <p>Nenhuma transação.</p>
      ) : (
        historico.map((item, index) => (
          <div
            className="transacao"
            key={index}
          >
            {item.tipo}: R$ {item.valor}
          </div>
        ))
      )}
    </>
  );
}

export default Historico;