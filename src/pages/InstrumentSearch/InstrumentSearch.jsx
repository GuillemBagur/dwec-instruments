import React, { useEffect, useState } from 'react';
import InputSearch from '../../components/InputSearch';
import { db } from '../../config/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import Instrument from '../../components/Instrument';

export default function InstrumentSearch() {
  const [instrumentSearch, setInstrumentSearch] = useState("");
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "instruments"), (snapshot) => {
      let fsInstruments = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      fsInstruments = fsInstruments.filter(instrument => {
        return instrument.title.toLowerCase().includes(instrumentSearch.toLowerCase()) ||
        instrument.description.toLowerCase().includes(instrumentSearch.toLowerCase())
      });
      setInstruments();
    });

    return () => unsubscribe();
  }, [instrumentSearch]);

  function handleInput(e) {
    setInstrumentSearch(e.target.value);
  }


  return (
    <main>
      <InputSearch onInput={handleInput} />

      <section>
        {instruments && instruments.map(instrument => <Instrument key={instrument.id} {...instrument} />)}
      </section>
    </main>
  )
}
