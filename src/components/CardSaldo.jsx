function CardSaldo({
  saldo,
  mostrarSaldo,
  setMostrarSaldo,
}) {
  return (
    <>
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
          onClick={() =>
            setMostrarSaldo(
              !mostrarSaldo
            )
          }
        >
          {mostrarSaldo
            ? "👁️"
            : "🙈"}
        </button>
      </div>

      <h1 className="saldo">
        {mostrarSaldo
          ? `R$ ${saldo.toFixed(2)}`
          : "••••••"}
      </h1>
    </>
  );
}

export default CardSaldo;