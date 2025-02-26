import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig.js";

export async function fsInstrumentAdd({title, type, origins, img, sound, genres}) {
  return await addDoc(collection(db, "instruments"), {title, type, origins, img, sound, genres});
}
