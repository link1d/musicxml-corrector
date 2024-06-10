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

  window["osmd"] = osmd;

  const trompetas = osmd.Sheet.Instruments[2].Voices[0].VoiceEntries;

 const voice1 = trompetas.map(function (x){return x.Notes[3]});

 const voice2 = trompetas.map(function (x){return x.Notes[2]});

 

 console.log (voice1);
 console.log (voice2);
})();

