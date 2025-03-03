import React, { isValidElement, useEffect, useState } from "react";
import { checkBase64FileType, checkBase64Size, getBase64 } from "../../js/functions";

import "./InstrumentEditor.css";
import InstrumentTypeSelect from "../../components/InstrumentTypeSelect";
import GenreMultiselect from "../../components/GenreMultiselect";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, documentId, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export default function InstrumentEditor() {
  const {instrumentId} = useParams();

  const [updateMultiselect, setUpdateMultiselect] = useState(false);

  const [formData, setFormData] = useState({
    title: null,
    type: null,
    origins: null,
    img: null,
    sound: null,
    genres: [],
  });

  const [errors, setErrors] = useState({
    title: "",
    type: "",
    origins: "",
    img: "",
    sound: "",
    genres: "",
  });
  
  const [toastVisible, setToastVisible] = useState(false);

  function handleChange(e) {
    const field = e.target.id;
    const value = e.target.value;

    setFormData((formData) => {
      return { ...formData, [field]: value };
    });
  }

  async function handleChangeBase64(e) {
    const value = await getBase64(e.target.files[0]);
    const field = e.target.id;

    setFormData((formData) => {
      return { ...formData, [field]: value };
    });
  }

  function handleChangeGenres(value) {
    setFormData((formData) => {
      return { ...formData, "genres": value };
    });
  }

  function validateForm() {
    let isValid = true;

    // Check all fields have content
    for(let [field, data] of Object.entries(formData)) {
      if(!data || data?.length == 0) {
        isValid = false;
        setErrors(prevErrors => {
          return {...prevErrors, [field]: "Este campo es requerido."};
        });

      } else {
        // Si el campo es válido, la validación solamente seguirá como correcta si antes lo era (un solo campo erróneo no pasa la validación).
        isValid = isValid && true;
        setErrors(prevErrors => {
          return {...prevErrors, [field]: ""};
        });
      }
    }

    if(formData.title?.length > 50) {
      isValid = false;
      setErrors(prevErrors => {
        return {...prevErrors, title: "El título no puede tener más de 50 caracteres."};
      });
    }

    if(formData.origins?.length > 300) {
      isValid = false;
      setErrors(prevErrors => {
        return {...prevErrors, origins: "Los orígenes no pueden tener más de 300 caracteres."};
      });
    }

    if(!checkBase64Size(formData.img, 1)) {
      isValid = false;
      setErrors(prevErrors => {
        return {...prevErrors, img: "La imagen puede pesar 1Mb máximo."};
      });
    }

    if(!checkBase64FileType(formData.img, ["image/png", "image/jpg", "image/jpeg", "image/gif", "image/webp"])) {
      isValid = false;
      setErrors(prevErrors => {
        return {...prevErrors, img: "El tipo de archivo no es válido."};
      });
    }

    if(!checkBase64Size(formData.sound, 1)) {
      isValid = false;
      setErrors(prevErrors => {
        return {...prevErrors, sound: "El sonido puede pesar 1Mb máximo."};
      });
    }

    if(!checkBase64FileType(formData.sound, ["audio/wav", "audio/mpeg"])) {
      isValid = false;
      setErrors(prevErrors => {
        return {...prevErrors, sound: "El tipo de archivo no es válido."};
      });
    }
    
    return isValid;
  }
  
  async function handleSubmit(e) {
    e.preventDefault();

    if(!validateForm()) {
      return;
    }

    console.log({ ...formData });
    const instrument = await addDoc(collection(db, "instruments"), formData);

    if(instrument) {
      setToastVisible(true);
      e.target.reset();
      setUpdateMultiselect(!updateMultiselect);
    }
    
    console.log(instrument);
  }


  useEffect(function() {
    if(toastVisible) {
      setInterval(function() {
        setToastVisible(false);
      }, 3000);
    }
  }, [toastVisible]);

  async function fechInstrumentData(instrumentId) {
    if(!instrumentId) {
      return;
    }

    const snapshot = await getDoc(doc(db, "instruments", instrumentId));

    if(snapshot.exists()) {
      const instrumentData = snapshot.data();

      setFormData({
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

  useEffect(function() {
    fechInstrumentData(instrumentId);

  }, [instrumentId]);

  return (
    <main className="instrument-add">
      <h1 className="title">Editor de instrumentos</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-div">
          <label className="label" htmlFor="title">
            Título
          </label>
          <input
            type="text"
            id="title"
            className="input"
            onChange={handleChange}
            defaultValue={formData.title}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>

        <div className="form-div">
          <label className="label" htmlFor="type">
            Tipo
          </label>
          <InstrumentTypeSelect defaultValue={formData.type} handleChange={handleChange} />
          {errors.type && <span className="error">{errors.type}</span>}
        </div>

        <div className="form-div">
          <label className="label" htmlFor="origins">
            Orígenes
          </label>
          <textarea
            type="text"
            id="origins"
            className="input"
            onChange={handleChange}
            defaultValue={formData.origins}
          />
          {errors.origins && <span className="error">{errors.origins}</span>}
        </div>

        <div className="form-div">
          <label className="label" htmlFor="img">
            Imagen
          </label>
          <input
            type="file"
            id="img"
            className="input"
            onChange={handleChangeBase64}
            defaultValue={formData.img}
          />
          {errors.img && <span className="error">{errors.img}</span>}
        </div>

        <div className="form-div">
          <label className="label" htmlFor="sound">
            Sonido
          </label>
          <input
            type="file"
            id="sound"
            className="input"
            onChange={handleChangeBase64}
            defaultValue={formData.sound}
          />
          {errors.sound && <span className="error">{errors.sound}</span>}
        </div>

        <div className="form-div last">
          <label className="label" htmlFor="genres">
            Géneros
          </label>

          <GenreMultiselect update={updateMultiselect} defaultValue={formData.genres} handleChangeGenres={handleChangeGenres} />
          {errors.genres && <span className="error">{errors.genres}</span>}
        </div>

        <button type="submit" className="button block big">Crear</button>
      </form>

      {toastVisible && <div className="toast">Instrumento añadido correctamente</div>}
    </main>
  );
}
