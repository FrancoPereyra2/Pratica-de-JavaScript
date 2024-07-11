let numero = 100;
while (numero <= 10) {
  document.write(`<p> Linea numero ${numero}</p>`);
  numero = numero + 1;
}

/*
do{
todas las lineas de codigo que quiero repetir
agregar una linea que haga la condicion logica se deje de cumplir
}while(condicion logica)
*/

let renglon = 1;
do {
  document.write(`<p> Renglon numero ${renglon}</p>`);
   renglon++; //renglon = renglon + 1;
} while (renglon <= 5);
