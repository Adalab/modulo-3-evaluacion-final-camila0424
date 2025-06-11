import { Link, useParams } from "react-router-dom";

function ActorDetail({ allActors }) {
  const objetoDeParams = useParams();
  console.log(objetoDeParams);
  const { name } = objetoDeParams;
  const actorToShow = allActors.find(
    (eachActorObj) => eachActorObj.name === name
  );
  if (!actorToShow) {
    return (
      <div>
        <p>Actor no encontrado.</p>
        <Link to="/">Volver</Link>
      </div>
    );
  }

  return (
    <>
      <div className="detailActors">
        <img
          src={actorToShow.image || "./src/images/escudo-hogwarts.png"}
          alt={actorToShow.name}
        />
        <div>
          <h3>{actorToShow.name}</h3>
          <p>Species: {actorToShow.species}</p>
          <p>House: {actorToShow.house}</p>
          <p>Patronus: {actorToShow.patronus}</p>
          <p>Alternate names: {actorToShow.alternate_names}</p>
          <p className="alive">
            {actorToShow.alive ? (
              <>
                <img src="./src/images/vivo.png" alt="está vivo" />
                <span>Con vida</span>
              </>
            ) : (
              <>
                <img src="./src/images/muerto.png" alt="está muerto" />
                <span>Sin vida</span>
              </>
            )}
          </p>
        </div>
        <Link to="/" className="white-link-detail">
          Volver
        </Link>
      </div>
    </>
  );
}

export default ActorDetail;
