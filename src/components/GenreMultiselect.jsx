import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import Multiselect from "./Multiselect";

export default function GenreMultiselect({handleChangeGenres, update, defaultValue}) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "genres"), (snapshot) => {
      setGenres(snapshot.docs.map((doc) => (doc.data().title)));
    });

  }, []);

  return (<Multiselect update={update} defaultValue={defaultValue} onChange={handleChangeGenres} options={genres} />)
}
