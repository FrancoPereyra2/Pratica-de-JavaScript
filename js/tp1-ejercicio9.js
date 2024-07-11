//1 - pedir frase
const frase = prompt(`Ingresa una frase de 4 caracteres`).toLowerCase();
console.log(frase);
console.log(frase.toLowerCase()); // convierte en minuscula
console.log(frase.toUpperCase()); // convierte en mayuscula
console.log(frase.length);
console.log(frase.substring(0, 3));
console.log(frase.charAt(3));

// hola mundo
for(let caracter = 0; caracter < frase.length; caracter++){
    if (
  frase.charAt(caracter) === `a` ||
  frase.charAt(caracter) === `e` ||
  frase.charAt(caracter) === `i` ||
  frase.charAt(caracter) === `o` ||
  frase.charAt(caracter) === `u`
) {
  document.write(frase.charAt(caracter));
}
}

// if (
//   frase.charAt(1) === `a` ||
//   frase.charAt(1) === `e` ||
//   frase.charAt(1) === `i` ||
//   frase.charAt(1) === `o` ||
//   frase.charAt(1) === `u`
// ) {
//   document.write(frase.charAt(1));
// }
// if (
//   frase.charAt(2) === `a` ||
//   frase.charAt(2) === `e` ||
//   frase.charAt(2) === `i` ||
//   frase.charAt(2) === `o` ||
//   frase.charAt(2) === `u`
// ) {
//   document.write(frase.charAt(2));
// }
// if (
//   frase.charAt(3) === `a` ||
//   frase.charAt(3) === `e` ||
//   frase.charAt(3) === `i` ||
//   frase.charAt(3) === `o` ||
//   frase.charAt(3) === `u`
// ) {
//   document.write(frase.charAt(3));
// }
