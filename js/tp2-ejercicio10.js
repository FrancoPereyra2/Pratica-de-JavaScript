//usar rpomt y pesir filas y columnas

//dibujar la tabla

//luego cargar en la primer celda fila x columna

const fila = parseInt(prompt('Ingrese un numero de filas'));
const columna = parseInt(prompt('Ingrese un numero de columnas'));
let celda = fila * columna;

console.log(fila);
console.log(columna);

document.write(`<table><tbody>`);

for(let indiceFilas = 1; indiceFilas <= fila; indiceFilas++){
    document.write(`<tr>`);
    for(let indiceColumna = 1; indiceColumna <= columna; indiceColumna++){
        document.write(`<td>${celda}</td>`);
        celda--;
    }
    document.write(`</tr>`);
}

document.write(`</tbody></table>`);
