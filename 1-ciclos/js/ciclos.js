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
  console.log("Segmento: " + cadenaTexto);
  cadenaTexto = prompt("Ingresa Texto:");
}
console.log("-- Fin segundo bucle: W H I LE --");

//Tercer recorrido
console.log("-- Inicio tercer bucle: D O  W H I LE --");
let numRep = parseInt(prompt("Ingresa número de repeticiones:"))
let numIni = 1

do {
    console.log("Hola - número: " + numIni )
    numIni++
} while (numIni <= numRep);

console.log("-- Fin tercer bucle: D O  W H I LE --");

