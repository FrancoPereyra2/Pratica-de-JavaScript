//1 - pedir frase
const frase = String(prompt(`Ingresa una frase de 4 caracteres`));
console.log(frase);
console.log(frase.length);
console.log(frase.substring(0, 3));
console.log(frase.charAt(3));

// hola mundo
if (
  frase.charAt(0) === `a` ||
  frase.charAt(0) === `e` ||
  frase.charAt(0) === `i` ||
  frase.charAt(0) === `o` ||
  frase.charAt(0) === `u`
) {
  document.write(frase.charAt(0));
}
if (
  frase.charAt(1) === `a` ||
  frase.charAt(1) === `e` ||
  frase.charAt(1) === `i` ||
  frase.charAt(1) === `o` ||
  frase.charAt(1) === `u`
) {
  document.write(frase.charAt(1));
}
if (
  frase.charAt(2) === `a` ||
  frase.charAt(2) === `e` ||
  frase.charAt(2) === `i` ||
  frase.charAt(2) === `o` ||
  frase.charAt(2) === `u`
) {
  document.write(frase.charAt(2));
}
if (
  frase.charAt(3) === `a` ||
  frase.charAt(3) === `e` ||
  frase.charAt(3) === `i` ||
  frase.charAt(3) === `o` ||
  frase.charAt(3) === `u`
) {
  document.write(frase.charAt(3));
}
