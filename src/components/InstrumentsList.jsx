import React, { useEffect, useState } from "react";
import Instrument from "./Instrument";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import "./InstrumentsList.css";
import { db } from "../config/firebaseConfig";
import { Link } from "react-router-dom";

export default function InstrumentsList({ search }) {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "instruments"), (snapshot) => {
      let instruments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filtramos la búsqueda en local ya que Firebase no permite este tipo de búsquedas
      instruments = instruments.filter(
        (instrument) =>
          instrument.title.toLowerCase().includes(search.toLowerCase()) ||
          instrument.type.includes(search.toLowerCase()) ||
          instrument.genres.find(genre => genre.includes(search.toLowerCase()))
      );

      setInstruments(instruments);
    });
  }, [search]);

  if (instruments.length === 0) {
    return (
      <>
        <p>No se han encontrado instrumentos todavía.</p>
        <Link to="/editor" className="button">
          Crear el primero
        </Link>
      </>
    );
  }

  return (
    <div className="instruments-list">
      {instruments.map((instrument) => (
        <Instrument key={instrument.id} {...instrument} />
      ))}
    </div>
  );
}
