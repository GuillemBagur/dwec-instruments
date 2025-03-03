import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";

import "./InstrumentTypeSelect.css";

export default function InstrumentTypeSelect({handleChange, defaultValue}) {
  const [instrumentTypes, setInstrumentTypes] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "instrumentTypes"), (snapshot) => {
      setInstrumentTypes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

  }, []);

  return (
    <select id="type" className="input instrument-type-select" onChange={handleChange}>
      <option value="">Selecciona una opción</option>
      {instrumentTypes.map(instrumentType => <option key={instrumentType.key} selected={defaultValue == instrumentType.title} value={instrumentType.title}>{instrumentType.title}</option>)}
    </select>
  );
}
