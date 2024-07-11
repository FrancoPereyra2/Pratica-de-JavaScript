// 0 = domingo
// 1 = lunes
// 2 = martes
// 3 = miercoles
// 4 = jueves
// 5 = viernes
// 6 = sabado


// if (opcion === 0){
//     document.write(`<p>Hoy es domingo</p>`);
// }else if (opcion === 1){
//     document.write(`<p>Hoy es lunes</p>`);
// }else if (opcion === 2){
//     document.write(`<p>Hoy es martes</p>`);
// }else if (opcion === 3){
//     document.write(`<p>Hoy es miercoles</p>`);
// }else if (opcion === 4){
//     document.write(`<p>Hoy es jueves</p>`);
// }else if (opcion === 5){
//     document.write(`<p>Hoy es viernes</p>`);
// }else if (opcion === 6){
//     document.write(`<p>Hoy es sabado</p>`);
// }else{
//     document.write(`<p>No es una opcion valida</p>`);
// }

do{
    let opcion = parseInt(prompt(`Ingresa un valor: 0 = domingo, 1 = lunes, 2 = martes, 3 = miercoles`));

switch(opcion){
    case 0:
        document.write(`<p>Hoy es domingo</p>`);
        console.log(`Hoy es domingo`);
        break;
    case 1:
        document.write(`<p>Hoy es lunes</p>`);
        console.log(`Hoy es lunes`);
        break;
    case 2:
        document.write(`<p>Hoy es martes</p>`);
        console.log(`Hoy es martes`);
        break;
    case 3:
        document.write(`<p>Hoy es miercoles</p>`);
        console.log(`Hoy es miercoles`);
        break;
    default:
        document.write(`<p>No es una opcion valida</p>`);
        console.log(`No es una opcion valida`);
}
}while(confirm(`Quieres realizar esta accion nuevamente?`))

