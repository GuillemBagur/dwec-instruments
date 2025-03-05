import { doc, getDoc } from "firebase/firestore"
import { db } from "../config/firebaseConfig"

export async function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = reject
  })
}


// https://stackoverflow.com/questions/52903386/how-to-get-byte-length-of-a-base64-string-in-node-js
export function checkBase64Size(base64, maxSizeMb) {
  const size = base64?.length / 1_000_000;

  return size <= maxSizeMb;
}

export function checkBase64FileType(base64, allowedTypes) {
  const allowedTypesRegex = new RegExp(`^data:(${allowedTypes.join("|")})`, "");

  return allowedTypesRegex.test(base64);
}

export async function fechInstrumentData(instrumentId, callback) {
    if(!instrumentId) {
      return;
    }

    const snapshot = await getDoc(doc(db, "instruments", instrumentId));

    if(snapshot.exists()) {
      const instrumentData = snapshot.data();

      callback({
        title: instrumentData.title,
        type: instrumentData.type,
        origins: instrumentData.origins,
        img: instrumentData.img,
        sound: instrumentData.sound,
        genres: instrumentData.genres,
      });

    } else {
      console.log("Ha habido un error.");

    }
  }