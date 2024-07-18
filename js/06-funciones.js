// funciones declarativas
function saludar(){
    document.write(`<p>Hola Mundo</p>`)
}
function saludarPersona(nombre, apellido){
    document.write(`<p>Hola ${nombre}, ${apellido} </p>`)
}

// funciones que retornan un valor
// function sumar(numero1, numero2){
//     // const resultado = numero1 + numero2;
//     //  console.log(resultado);
//     // return numero1 + numero2;
// }

// arrow function

const sumar = (numero1, numero2) => numero1 + numero2;


//llamar o invocar a la funcion
saludar()
saludarPersona('Tomas', 'Herrero');

const nombre = prompt('Ingresa un Nombre');
const apellido = prompt('Ingresa un Apellido');

saludarPersona(nombre, apellido)

const resultado = sumar(20,15)
document.write(`<p>El resultado de la suma es: ${resultado}</p>`)
document.write(`<p>El resultado de la suma es: ${sumar(50,45)}</p>`)