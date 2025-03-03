import { Volume2 } from "lucide-react";
import React, { useEffect, useState } from "react";

import "./Instrument.css";
import InstrumentDelete from "./InstrumentDelete";
import InstrumentEdit from "./InstrumentEdit";

export default function Instrument({
  id,
  title,
  type,
  origins,
  img,
  sound,
  genres,
}) {
  let isPlaying = false;
  let audio = new Audio(sound);

  function handlePlay() {
    isPlaying = !isPlaying;
    
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

  }

  return (
    <div className="instrument">
      <section className="image-wrapper">
        <img src={img} alt={title} />
        <span className="type">{type}</span>
      </section>
      <section className="content">
        <h3 className="title">{title}</h3>
        <button className={`play-sound ${!sound && "disabled"}`} onClick={handlePlay}>
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

      <section className="buttons">
        <InstrumentEdit instrumentId={id} />
        <InstrumentDelete instrumentId={id} />
      </section>
    </div>
  );
}
