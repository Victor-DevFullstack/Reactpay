function CardUsuario({ usuario }) {
  return (
    <>
      <img
        src={usuario.picture.large}
        alt="Usuário"
      />

      <h2>
        {usuario.name.first} {usuario.name.last}
      </h2>

      <p>{usuario.email}</p>
    </>
  );
}

export default CardUsuario;