import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fechInstrumentData } from "../../js/functions.js";
import InstrumentEdit from "../../components/InstrumentEdit.jsx";
import InstrumentDelete from "../../components/InstrumentDelete.jsx";
import PlaySound from "../../components/PlaySound.jsx";
import "./InstrumentGet.css";


export default function InstrumentGet() {
  const { instrumentId } = useParams();
  const [instrument, setInstrument] = useState({});
  const { title, type, origins, img, sound, genres } = instrument;

  useEffect(
    function () {
      fechInstrumentData(instrumentId, setInstrument);
    },
    [instrumentId]
  );

  return (
    <main className="instrument-get">
      <h1>{title} <PlaySound sound={sound} /></h1>
      <span className="type">{type}</span>

      <img src={img} alt={title} />

      <section className="content">
        <h4 className="subtitle">Historia</h4>
        <p className="p">{origins}</p>
        <h4 className="subtitle">Géneros</h4>
        <ul className="genres">
          {genres?.map((genre, i) => (
            <li className="genre" key={i}>
              {genre}
            </li>
          ))}
        </ul>
      </section>

      <section className="buttons">
        <InstrumentEdit instrumentId={instrumentId} />
        <InstrumentDelete redirectOnDelete={"/search"} instrumentId={instrumentId} />
      </section>
    </main>
  );
}
