import Item from "./Item";

function List({ allActors }) {
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
