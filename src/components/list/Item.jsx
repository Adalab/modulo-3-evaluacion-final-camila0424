function Item({ actor }) {
  return (
    <>
      <img
        src={
          actor.image ||
          "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter"
        }
        alt={actor.name}
      />
      <h3>{actor.name}</h3>
      <p>{actor.species}</p>
      <p>{actor.house}</p>
    </>
  );
}

export default Item;
