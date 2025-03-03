import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../config/firebaseConfig";

export default function InstrumentDelete({ instrumentId }) {
  async function handleClick() {
    try {
      await deleteDoc(doc(db, "instruments", instrumentId));
      console.log("Se ha eliminado el instrumento.");

    } catch(err) {
      console.error(err);
    }
  }

  return <button className="button delete" onClick={handleClick}>Eliminar</button>;
}
