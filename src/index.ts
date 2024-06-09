import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";

// importar los datos del MusicXML
import data from "./data.js";

// Mostrar los datos en la consola del browser
console.log(data);

// crear un elemento de contenedor de HTMl <div>
const container = document.createElement("div");

//Agregar el elemento a la pagina
document.body.appendChild(container);

// Crea una instancia de OpenSheetMusicDisplay y adjuntala
// al contendedor que creamos en el anterior paso
const osmd = new OpenSheetMusicDisplay(container);

// This is an asynchronous IIFE
(async () => {
  // carga el xml a OpenSheetMusicDisplay
  await osmd.load(data);
  // Renderiza la partitura
  osmd.render();
})();
