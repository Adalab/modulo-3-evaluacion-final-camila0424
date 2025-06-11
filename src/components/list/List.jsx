import Item from "./Item";

function List({ allActors, filterName }) {
  if (allActors.length === 0) {
    return (
      <p>No hay ningún personaje que coincida con la palabra "{filterName}"</p>
    );
  }
  return (
    <ul className="listActors">
      {allActors.map((eachActor) => (
        <li key={eachActor.id} className="listObj">
          <Item actor={eachActor} />
        </li>
      ))}
    </ul>
  );
}

export default List;
