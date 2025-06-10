import { useState, useEffect } from "react";
import "../styles/App.scss";
import List from "./list/List";

function App() {
  const [allActors, setAllActors] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setAllActors(data);
      });
  }, []);

  const handleInputFilterName = (ev) => {
    setFilterName(ev.target.value);
  };

  const filteredActors = allActors.filter(
    (actor) =>
      actor.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()) ||
      actor.lastname
        .toLocaleLowerCase()
        .includes(filterName.toLocaleLowerCase())
  );

  return (
    <>
      <header className="header">
        <img src="../src/images/pngegg.png" alt="Logo de Harry poter" />
        <form action="">
          <div className="form-group">
            <label htmlFor="">Busca por personaje</label>
            <input
              onInput={handleInputFilterName}
              value={filterName.name}
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Selecciona una casa</label>
            <select name="house" id="house">
              <option value="">Selecciona</option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
            </select>
          </div>
        </form>
      </header>

      <List allActors={filteredActors} />
    </>
  );
}

export default App;
