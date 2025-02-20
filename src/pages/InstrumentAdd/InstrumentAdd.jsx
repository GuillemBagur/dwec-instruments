import React, { useState } from "react";
import { fsInstrumentAdd } from "../../js/firestore";
import { getBase64 } from "../../js/functions";

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

    setFormData(formData => {
      return {...formData, [field]: value};
    });
  }

  function handleChangeBase64(e) {
    const value = getBase64(e.target.files[0]);
    const field = e.target.value;

    setFormData(formData => {
      return {...formData, [field]: value};
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();


    console.log({...formData});
    const instrument = await fsInstrumentAdd(formData);
    console.log(instrument);
  }

  return (
    <main className="instrument-add">
      <h1>Añadir instrumento</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título</label>
          <input type="text" id="title" className="input" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="type">Type</label>
          <select id="type" onChange={handleChange}>
            <option value="">Selecciona una opción</option>
            <option value="cuerdas">Cuerdas</option>
          </select>
        </div>

        <div>
          <label htmlFor="origins">Orígenes</label>
          <input type="text" id="origins" className="input" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="img">Imagen</label>
          <input type="file" id="img" className="input" onChange={handleChangeBase64} />
        </div>

        <div>
          <label htmlFor="sound">Sonido</label>
          <input type="file" id="sound" className="input" onChange={handleChangeBase64} />
        </div>

        <div>
          <label htmlFor="genres">Géneros</label>
          <input type="text" id="genres" className="input" onChange={handleChange} />
        </div>

        <div>
          <button type="submit">Crear</button>
        </div>
      </form>
    </main>
  );
}
