const codigoParada = "";
const id = "aab3cc8e";
const key = "bcb24aaef873d8eb67b6d22a5c15e56b";

const idParada = document.querySelector(".id_parada");
const enviar = document.querySelector(".enviar");
console.log(enviar);
const datosLlegada = document.querySelector(".comprobacion");

enviar.addEventListener(
  "click",
  () => console.log("hola")
  /* codigoParada = idParada.valueAsNumber;
  console.log(codigoParada);
  const liniasBus = fetch(
    `https://api.tmb.cat/v1/ibus/stops/${codigoParada}?app_id=${id}&app_key=${key}`
  )
    .then((respuesta) => respuesta.json())
    .then((datos) => datosDeLineaBus(datos.data.ibus));
  const datosDeLineaBus = (datos) => {
    const liniaTiempo = datos.reduce(
      (contador, buses) => [
        ...contador,
        { linia: buses.line, tiempo: buses["text-ca"] },
      ],
      []
    );

    for (const linia of liniaTiempo) {
      datosLlegada.textContent = `a la linia ${linia.linia} le quedan ${linia.tiempo}`;
    }
  };
  console.log(liniaTiempo);
  for (const linia of liniaTiempo) {
    return console.log(`a la linia ${linia.linia} le quedan ${linia.tiempo}`);
  }
*/
);
