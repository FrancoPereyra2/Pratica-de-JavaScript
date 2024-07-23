// como declarar un array vacio
const peliculas = [];

// como declarar un array con datos
const series = [
  "friends",
  4,
  true,
  "the big bang theory",
  "the nanny",
  "bridgerton",
];

function mostrarSeries() {
  document.write(
    `<h2>Arry de series: cantidad de elementos ${series.length}</h2>`
  );
  document.write(`<ul>`);
  for (let i = 0; i < series.length; i++) {
    document.write(`<li>${series[i]}</li>`);
  }
  document.write(`</ul>`);
}
console.log(peliculas);
console.log(series);
//cantidad de elementos en el array
document.write(
  `<p>Cantidad de elementos en el array de series: ${series.length}</p>`
);
document.write(`<p>Primer elemento del array: ${series[0]}</p>`);
document.write(
  `<p>Primer elemento del array: ${series[series.length - 1]}</p>`
);
document.write(`<p>Array de series: ${series}</p>`);

//mostrar los elementos del array
document.write(
  `<h2>Arry de series: cantidad de elementos ${series.length}</h2>`
);
document.write(`<ul>`);
for (let i = 0; i < series.length; i++) {
  document.write(`<li>${series[i]}</li>`);
}
document.write(`</ul>`);

//agregar elementos en el array
series.unshift(`okupas`, 2024);
mostrarSeries();

//agregar elementos al final del array
series.push(`El puntero`, 2023);

mostrarSeries();
//agregar elementos en el medio de array
series.splice(3, 0, "Avatar");

mostrarSeries();

//metodos para borrar elementos del array
series.shift();

mostrarSeries();

// borrar el último elemento del array
series.pop();

mostrarSeries();

//borrar elementos en medio del array
series.splice(4, 2);

mostrarSeries();

//modificar un elementos del array
series[3] = "pokemon";

mostrarSeries();

series.push(
  "La casa de papel",
  "Rambo 1",
  "Rambo 2",
  "Harry Potter y la camara secreta",
  "Rambo 3",
  "Harry Potter y el prisionero de Azkaban",
  "Harry Potter y el caliz de fuego",
  "Harry Potter y la Piedra Filosofal",
  "Harry Potter y el misterio del principe"
);
mostrarSeries();

const harryPotter = series.find(
  (item) => item === "Harry Potter y la camara secreta"
);
const Vengadores = series.find((item) => item === "Vengadores: Infinity War");

const harryPotter2 = series.find((item) =>
  item.toString().includes("Harry Potter")
);

// console.log(series[0].toLowerCase())
console.log(harryPotter);
console.log(Vengadores);
console.log(harryPotter2);
document.write(`<p>Peli Buscada: ${harryPotter}</p>`);
// document.write(`<p>Peli Buscada: ${Vengadores}</p>`)

//existe un valoir en vengadores
// if (Vengadores) {
//   document.write(`<p>Peli Buscada: ${Vengadores}</p>`);
// } else {
//   document.write(`<p>Peli Buscada: No se encontro Vengadores</p>`);
// }

//operador ternario  (condicion logica) ? todo lo que quiero si se cumple la condicion : todo lo que quiero si no se cumple la condicion

(Vengadores)? (document.write(`<p>Peli Buscada: ${Vengadores}</p>`)): (document.write
(`<p>Peli Buscada: No se encontro Vengadores</p>`));

document.write(`<p>Peli Buscada: ${(Vengadores)? Vengadores : "No se encontro Vengadores"}</p>`);

const peli = "harry potter y el prisionero de azkaban";
console.log(peli.includes("potter"));
console.log(peli.includes("voldemort"));

//buscar toda la saga de rambo

// const sagadeRambo = series.filter((elemento) => elemento.includes('Rambo'));
// console.log(sagadeRambo)

// document.write(
//   `<h2>Arry de rambo: cantidad de elementos ${sagadeRambo.length}</h2>`);

// document.write(`<ol>`);
// sagadeRambo.map((item, posicion) => document.write(`<li>${item} - posicion: ${posicion}</li>`))
// document.write(`</ol>`);

//forEach
series.forEach((item) => console.log("forEach - " + item));
