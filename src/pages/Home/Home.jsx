import React from "react";
import InstrumentsList from "../../components/InstrumentsList";


export default function Home() {
  

  return (
    <main>
      <h1>Inicio</h1>

      <p>
        Este sitio es un repositorio de instrumentos. Aquí encotrarás los más típicos clasificados por tipo, un poco de historia sobre sus orígenes y un listado de los géneros donde se suele usar. Siempre acompañado de una imagen y una muestra del sonido del instrumento. Sistema programado con React y Firebase Firestore.
      </p>

      <h2>Instrumentos</h2>
      
      <InstrumentsList searchTitle="" />
    </main>
  );
}
