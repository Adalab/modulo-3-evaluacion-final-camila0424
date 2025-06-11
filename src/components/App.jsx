import { useState, useEffect } from "react";
import "../styles/App.scss";
import List from "./list/List";
import { Routes, Route } from "react-router";
import FormInput from "./list/Form";
import ActorDetail from "./pages/ActorDetail";

function App() {
  const [allActors, setAllActors] = useState([]);
  const [filterName, setFilterName] = useState("");

  const [selectedHouse, setSelectedHouse] = useState("Gryffindor");

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

  function handleChange(event) {
    setSelectedHouse(event.target.value);
  }

  const filteredActors = allActors.filter(
    (actor) =>
      actor.house === selectedHouse &&
      actor.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
  );

  return (
    <>
      <header className="header">
        <img src="../src/images/pngegg.png" alt="Logo de Harry poter" />
        <FormInput
          handleInputFilterName={handleInputFilterName}
          selectedHouse={selectedHouse}
          filterName={filterName}
          handleChange={handleChange}
        />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<List allActors={filteredActors} />} />
          <Route
            path="/detail/:name"
            element={<ActorDetail allActors={allActors} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
