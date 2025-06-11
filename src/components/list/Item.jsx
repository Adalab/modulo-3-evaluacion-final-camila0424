import { Link } from "react-router-dom";

function Item({ actor }) {
  return (
    <Link to={`/detail/${actor.name}`} className="white-link">
      <img
        src={actor.image || "./src/images/escudo-hogwarts.png"}
        alt={actor.name}
      />
      <h3>{actor.name}</h3>
      <p>{actor.species}</p>
      <p>{actor.house}</p>
    </Link>
  );
}

export default Item;
