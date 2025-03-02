import React, { useEffect, useState } from 'react';
import InputSearch from '../../components/InputSearch';
import { db } from '../../config/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import Instrument from '../../components/Instrument';
import InstrumentsList from '../../components/InstrumentsList';

export default function InstrumentSearch() {
  const [instrumentSearch, setInstrumentSearch] = useState("");

  function handleInput(e) {
    setInstrumentSearch(e.target.value);
  }

  return (
    <main className='instrument-search'>
      <InputSearch onInput={handleInput} />

      <section className='instruments'>
        <InstrumentsList searchTitle={instrumentSearch} />
      </section>
    </main>
  )
}
