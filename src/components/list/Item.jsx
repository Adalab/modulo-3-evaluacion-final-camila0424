function Item({ actor }) {
  return (
    <>
      <img
        src={actor.image || "./src/images/escudo-hogwarts.png"}
        alt={actor.name}
      />
      <h3>{actor.name}</h3>
      <p>{actor.species}</p>
      <p>{actor.house}</p>
    </>
  );
}

export default Item;
