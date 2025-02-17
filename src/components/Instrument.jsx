import { Volume2 } from "lucide-react";
import React from "react";

import "./Instrument.css";

export default function Instrument({
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
        <button className="play-sound">
          <Volume2 />
        </button>
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
    </div>
  );
}
