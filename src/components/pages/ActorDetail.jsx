import { Link, useParams } from "react-router";

function ActorDetail({ allActors }) {
  const params = useParams();

  const actorToShow = allActors.find(
    (eachActorObj) => eachActorObj.name === params.name
  );

  return (
    <>
      <div>
        <img
          src={actorToShow.image || "./src/images/escudo-hogwarts.png"}
          alt={actorToShow.name}
        />
        <h3>{actorToShow.name}</h3>
        <p>{actorToShow.species}</p>
        <p>{actorToShow.house}</p>
        <p>{actorToShow.patronus}</p>
        <p>{actorToShow.alternate_names}</p>
        <p>{actorToShow.alive}</p>
        <Link to="/">Volver</Link>
      </div>
    </>
  );
}

export default ActorDetail;
