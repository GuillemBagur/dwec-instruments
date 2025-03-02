import React, { useEffect, useState } from 'react';
import Instrument from "./Instrument";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import "./InstrumentsList.css";
import { db } from '../config/firebaseConfig';

export default function InstrumentsList({ searchTitle }) {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "instruments"), (snapshot) => {
      let instruments = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      
      // Filtramos la búsqueda en local ya que Firebase no permite este tipo de búsquedas
      instruments = instruments.filter(instrument => instrument.title.toLowerCase().includes(searchTitle.toLowerCase()));

      setInstruments(instruments);
    });

  }, [searchTitle]);

  return (
    <div className='instruments-list'>{instruments.map(instrument => <Instrument {...instrument} />)}</div>
  )
}
