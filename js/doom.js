import { encrip } from "./index.js";
//import del encrip de index.js

//seleccion de elementos del DOM para saber si se encripta o desencripta
const myButton = document.getElementById("myButton");

//se le asigna el valor de true para que se encripte por defecto
let isEncrypted = true;

myButton.addEventListener("click", function () {
  //se cambia el valor de isEncrypted al dar click
  isEncrypted = !isEncrypted;
  myButton.innerHTML = isEncrypted ? "Desencriptar" : "Encriptar";

  //se llama a la funcion updateCipher para que se actualice el resultado
  updateCipher(isEncrypted);
});

function updateCipher(isEncrypted) {
  //seleccion de elementos del DOM del range input
  const rot = parseInt(rangeInput.value);
  const result = encrip(ingreso.value, rot, isEncrypted);
  respuesta.value = result;
}

//para actualizar el resultado al mover el range input
rangeInput.addEventListener("input", updateCipher);
