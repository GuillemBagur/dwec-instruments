import React, { useState } from "react";
import { fsInstrumentAdd } from "../../js/firestore";
import { getBase64 } from "../../js/functions";

import "./InstrumentAdd.css";
import Multiselect from "../../components/Multiselect";

export default function InstrumentAdd() {
  const [formData, setFormData] = useState({
    title: null,
    type: null,
    origins: null,
    img: null,
    sound: null,
    genres: null,
  });

  function handleChange(e) {
    const field = e.target.id;
    const value = e.target.value;

    setFormData((formData) => {
      return { ...formData, [field]: value };
    });
  }

  async function handleChangeBase64(e) {
    const value = await getBase64(e.target.files[0]);
    const field = e.target.id;

    setFormData((formData) => {
      return { ...formData, [field]: value };
    });
  }

  function handleChangeGenres(value) {
    setFormData((formData) => {
      return { ...formData, "genres": value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log({ ...formData });
    const instrument = await fsInstrumentAdd(formData);
    console.log(instrument);
  }

  return (
    <main className="instrument-add">
      <h1 className="title">Añadir instrumento</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-div">
          <label className="label" htmlFor="title">
            Título
          </label>
          <input
            type="text"
            id="title"
            className="input"
            onChange={handleChange}
          />
        </div>

        <div className="form-div">
          <label className="label" htmlFor="type">
            Tipo
          </label>
          <select id="type" className="input" onChange={handleChange}>
            <option value="">Selecciona una opción</option>
            <option value="cuerdas">Cuerdas</option>
          </select>
        </div>

        <div className="form-div">
          <label className="label" htmlFor="origins">
            Orígenes
          </label>
          <input
            type="text"
            id="origins"
            className="input"
            onChange={handleChange}
          />
        </div>

        <div className="form-div">
          <label className="label" htmlFor="img">
            Imagen
          </label>
          <input
            type="file"
            id="img"
            className="input"
            onChange={handleChangeBase64}
          />
        </div>

        <div className="form-div">
          <label className="label" htmlFor="sound">
            Sonido
          </label>
          <input
            type="file"
            id="sound"
            className="input"
            onChange={handleChangeBase64}
          />
        </div>

        <div className="form-div last">
          <label className="label" htmlFor="genres">
            Géneros
          </label>

          <Multiselect onChange={handleChangeGenres} options={["techno", "house", "rock", "pop"]} />
        </div>

        <button type="submit" className="button block">Crear</button>
      </form>
    </main>
  );
}
