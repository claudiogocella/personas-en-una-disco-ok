function generarNumeroAleatorio(min, max): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

let capacidad: number = 270;
let cantidadPersonas: number = generarNumeroAleatorio(1, capacidad);
let personas: number[] = new Array(cantidadPersonas);
console.log(personas);

let indice: number;
let menores21 = 0;
for (indice = 0; indice < capacidad; indice++) {
  personas[indice] = generarNumeroAleatorio(18, 40);
  if (personas[indice] < 21) {
    menores++;
  }
}

completarEdadesPersonas(personas, cantidadPersonas);
menores21 = contarMenores(personas, cantidadPersonas);

/*console.log("Los menores de 21 son: " + menores21);
console.log("Los mayores de 21 son: " + (cantidadPersonas - menores21));
console.log("En total hay " + cantidadPersonas + " personas");
console.log(personas);*/
