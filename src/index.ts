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

 // Rule: the primary and secondary voices cannot form a minor 3rd.
  // Buscar Array.prototype.forEach en MDN (voice1 es un array de Note objetos)
  voice1.forEach(function (note1, i) {
    const note2 = voice2[i];
    // Array entries can be undefined if an instrument isn't playing
    // at a given time.
    if (!note1 || !note2) {
      return;
    }
    // Array entries can be rests.
    if (note1.isRest() || note2.isRest()) {
      return;
    }
    const distance = Math.abs(note1.halfTone - note2.halfTone);
    if (distance === 3) {
      note1.NoteheadColor = "#FF0000"; // Hex color code (buscar en MDN)
      note2.NoteheadColor = "#FF0000";
    }
  });

 console.log (voice1);
 console.log (voice2);

 

})();

