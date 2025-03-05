import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../config/firebaseConfig";
import { Navigate } from "react-router-dom";

export default function InstrumentDelete({ instrumentId, redirectOnDelete }) {
  const [redirect, setRedirect] = useState(null);

  async function handleClick() {
    try {
      await deleteDoc(doc(db, "instruments", instrumentId));
      console.log("Se ha eliminado el instrumento.");

      if(redirectOnDelete) {
        setRedirect(redirectOnDelete);
      }

    } catch(err) {
      console.error(err);
    }
  }

  if(redirect) {
    return <Navigate to={redirectOnDelete} />
  }

  return <button className="button delete" onClick={handleClick}>Eliminar</button>;
}
