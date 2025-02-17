import React from "react";
import Instrument from "../../components/Instrument";

export default function Home() {
  return (
    <div>
      <h1>Inicio</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quasi hic
        voluptate cumque enim eum distinctio, praesentium nesciunt atque aliquid
        at. Architecto, atque. Obcaecati optio accusamus, temporibus vitae ullam
        consequuntur. Veritatis numquam qui quod deserunt, enim soluta dolorum
        in odio sed eveniet labore aut pariatur praesentium doloribus voluptas
        odit, culpa recusandae, reprehenderit repudiandae molestiae provident?
        Optio ex non ab dolores?
      </p>

      <h2>Instrumentos</h2>
      <Instrument
        title="Guitarra"
        type="Cuerdas"
        origins="Es un instrumento muy antiguo."
        img="https://musicopolix.com/200249/valencia-guitarra-clasica-vc103-3-4-nat.jpg"
        sound=""
        genres={["flamenco", "pop", "country"]}
      />
    </div>
  );
}
