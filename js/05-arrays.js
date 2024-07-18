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

document.write(
  `<h2>Arry de series: cantidad de elementos ${series.length}</h2>`
);
document.write(`<ul>`);
for (let i = 0; i < series.length; i++) {
  document.write(`<li>${series[i]}</li>`);
}
document.write(`</ul>`);

//agregar elementos al final del array
series.push(`El puntero`, 2023);

document.write(
    `<h2>Arry de series: cantidad de elementos ${series.length}</h2>`
  );
  document.write(`<ul>`);
  for (let i = 0; i < series.length; i++) {
    document.write(`<li>${series[i]}</li>`);
  }
  document.write(`</ul>`);

  //agregar elementos en el medio de array
  series.splice(3,0,'Avatar');
  
  document.write(
    `<h2>Arry de series: cantidad de elementos ${series.length}</h2>`
  );
  document.write(`<ul>`);
  for (let i = 0; i < series.length; i++) {
    document.write(`<li>${series[i]}</li>`);
  }
  document.write(`</ul>`);

  //metodos para borrar elementos del array
  series.shift();

  document.write(
    `<h2>Arry de series: cantidad de elementos ${series.length}</h2>`
  );
  document.write(`<ul>`);
  for (let i = 0; i < series.length; i++) {
    document.write(`<li>${series[i]}</li>`);
  }
  document.write(`</ul>`);

  // borrar el último elemento del array
  series.pop();
  
  document.write(
    `<h2>Arry de series: cantidad de elementos ${series.length}</h2>`
  );
  document.write(`<ul>`);
  for (let i = 0; i < series.length; i++) {
    document.write(`<li>${series[i]}</li>`);
  }
  document.write(`</ul>`);

  //borrar elementos en medio del array
  series.splice(4,2);

  document.write(
    `<h2>Arry de series: cantidad de elementos ${series.length}</h2>`
  );
  document.write(`<ul>`);
  for (let i = 0; i < series.length; i++) {
    document.write(`<li>${series[i]}</li>`);
  }
  document.write(`</ul>`);

  //modificar un elementos del array
  series[3] = 'pokemon'

  document.write(
    `<h2>Arry de series: cantidad de elementos ${series.length}</h2>`
  );
  document.write(`<ul>`);
  for (let i = 0; i < series.length; i++) {
    document.write(`<li>${series[i]}</li>`);
  }
  document.write(`</ul>`);