//Archivo fuente de Javascript: Desafío ciclos/iteraciones

debugger;

//Primer recorrido
let numLimite = prompt("Ingresa Número Límite:");
console.log("-- Inicio primer bucle: F O R --");
for (
  let numSemilla = prompt("Ingresa Número Inicial:");
  numSemilla <= numLimite;
  numSemilla++
) {
  console.log("Resultado (Número Inicial incremento): " + numSemilla);
}
console.log("-- Fin primer bucle: F O R --");

//Segundo recorrido
console.log("-- Inicio segundo bucle: W H I LE --");
let cadenaTexto = prompt("Ingresa Texto:");
while (cadenaTexto != "ESC") {
  console.log("Segmento 1" + cadenaTexto);
}
console.log("-- Fin segundo bucle: W H I LE --");
