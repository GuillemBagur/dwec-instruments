import React from "react";
import "./InputSearch.css";

export default function InputSearch({onInput}) {
  return (
    <div className="input-search">
      <label htmlFor="instrument-search">Busca un instrumento por su nombre</label>
      <input className="input" id="instrument-search" type="text" onInput={onInput} />
    </div>
  );
}
