import React, { useState, useEffect } from "react";
import "../styles/App.scss";

function RenderOneActor({ oneActor }) {
  return (
    <li className="listObj">
      <img src={oneActor.image} alt={oneActor.name} />
      <h3>{oneActor.name}</h3>
      <p>{oneActor.species}</p>
      <p>{oneActor.house}</p>
    </li>
  );
}

function App() {
  const [allActors, setAllActors] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setAllActors(data); // data ya es el array
      });
  }, []);

  return (
    <>
      <header className="header">
        <img src="../src/images/pngegg.png" alt="Logo de Harry poter" />
        <div className="form-group">
          <label htmlFor="">Busca por personaje</label>
          <input type="text" name="name" id="name" />
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
      </header>

      <ul className="listActors">
        {allActors.map((actor) => (
          <RenderOneActor key={actor.id} oneActor={actor} />
        ))}
      </ul>
    </>
  );
}

export default App;
