import { Volume2 } from "lucide-react";
import React, { useEffect, useState } from "react";

import "./Instrument.css";
import InstrumentDelete from "./InstrumentDelete";
import InstrumentEdit from "./InstrumentEdit";
import { Link } from "react-router-dom";
import PlaySound from "./PlaySound";

export default function Instrument({
  id,
  title,
  type,
  origins,
  img,
  sound,
  genres,
}) {

  return (
    <div className="instrument">
      <section className="image-wrapper">
        <img src={img} alt={title} />
        <span className="type">{type}</span>
      </section>
      <section className="content">
        <h3 className="title">{title}</h3>
        <PlaySound sound={sound} />
        <h4 className="subtitle">Historia</h4>
        <p className="p">{origins}</p>
        <h4 className="subtitle">Géneros</h4>
        <ul className="genres">
          {genres.map((genre, i) => (
            <li className="genre" key={i}>
              {genre}
            </li>
          ))}
        </ul>
      </section>

      <section className="buttons">
        <Link className="button" to={`/instrument/${id}`}>Ver más</Link>
        <InstrumentEdit instrumentId={id} />
        <InstrumentDelete instrumentId={id} />
      </section>
    </div>
  );
}
