function FormInput({
  handleInputFilterName,
  selectedHouse,
  filterName,
  handleChange,
}) {
  return (
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
        <label htmlFor="house">Selecciona una casa</label>
        <select
          name="house"
          id="house"
          value={selectedHouse}
          onChange={handleChange}
        >
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="">Sin casa</option>
        </select>
      </div>
    </form>
  );
}

export default FormInput;
