//ejercicio 1

// let numero1 = parseInt(prompt("Ingrese el primer número"));
// let numero2 = parseInt(prompt("Ingrese el segundo número"));


// if (numero1 > numero2) {
//     console.log(`${numero1} es mayor que ${numero2}`);
// }

//ejercicio 2


// if (numero1 == numero2) {
//     console.log(`${numero1} es igual que ${numero2}`);
// }
// else {
//     console.log(`${numero1} no es igual que ${numero2}`);
// }

//ejercicio 3

// if (numero1 > numero2) {
//     console.log(`${numero1} es mayor que ${numero2}`);
// }
// else {
//     if (numero1 < numero2) {
//         console.log(`${numero1} es menor que ${numero2}`);
//     } else {
//         console.log(`${numero1} es igual que ${numero2}`);
//     }
// }

//ejercicio 4

// let numero3 = parseInt(prompt("Ingrese el tercer número"));

// if (numero1 < numero2 && numero1 < numero3) {
//     console.log(`${numero1} es el menor.`);
// }
// else {
//     if (numero2 < numero1 && numero2 < numero3) {
//         console.log(`${numero2} es el menor.`);
//     }
//     else {
//         console.log(`${numero3} es el menor.`);
//     }
// }

//ejercicio 5

// let persona1 = {
//     nombre: "Juan",
//     edad: "20",
//     altura: "180"
// }

// let persona2 = {
//     nombre: "Carlos",
//     edad: "40",
//     altura: "155"
// }

// if (persona1.altura > persona2.altura) {
//     console.log(`${persona1.nombre} es el más alto`);
// } else {
//     console.log(`${persona2.nombre} es el más alto`);
// }

// if (persona1.edad > persona2.edad) {
//     console.log(`${persona1.nombre} es el de mayor edad`);
// } else {
//     console.log(`${persona2.nombre} es el de mayor edad`);
// }

//ejercicio 6

// let nombre = prompt("Ingrese nombre");
// let edad = parseInt(prompt("Ingrese edad"));
// let altura = parseInt(prompt("Ingrese altura"));
// let vision = parseInt(prompt("Ingrese vision"));

// if (edad >= 18 && altura > 150 && vision >= 8) {
//     console.log(`${nombre} está capacitado para conducir`);
// }
// else {
//     console.log(`${nombre} NO está capacitado para conducir`);

// }

//ejercicio 7

// let nuevoNombre = prompt("Ingrese nombre");
// let pase = prompt("Ingrese tipo de pase (vip o normal)");
// let tieneEntrada = "";
// let deseaUtilizarla = "";
// let deseaComprar = "";
// let dineroDisponible = "";


// if (nuevoNombre.toLowerCase() == "leo" || pase.toLowerCase() == "vip") {
//     console.log("Bienvenido");
// }
// else {
//     tieneEntrada = prompt("Posee entrada? (si/no, s/n, true/false)");
//     if (tieneEntrada.toLowerCase() == "si" || tieneEntrada.toLowerCase() == "s" || tieneEntrada.toLowerCase() == "true") {
//         deseaUtilizarla = prompt("Desea utilizarla? (si/no, s/n, true/false)");
//         if (deseaUtilizarla.toLowerCase() == "si" || deseaUtilizarla.toLowerCase() == "s" || deseaUtilizarla.toLowerCase() == "true") {
//             console.log("Bienvenido");
//         }
//     } else {
//         deseaComprar = prompt("Desea comprar una entrada? (si/no, s/n, true/false)");
//         if (deseaComprar.toLowerCase() == "si" || deseaComprar.toLowerCase() == "s" || deseaComprar.toLowerCase() == "true") {
//             dineroDisponible = parseInt(prompt("Ingrese dinero disponible"));
//             if (dineroDisponible >= 1000) {
//                 console.log("La compra se ha realizado con exito. Bienvenido");
//             } else {
//                 console.log("La compra ha sido rechazada");

//             }
//         } else {
//             console.log("Hasta luego");
//         }
//     }
// }


//ejercicio 8

//ejercicio 9

// let programaEdad = prompt("Ingrese una edad");

// if (programaEdad >= 0 && programaEdad <= 12) {
// console.log("Eres un infante");
// }
// else {
//     if (programaEdad >= 13 && programaEdad <= 18) {
//         console.log("Eres un adolescente");
//     }
//     else{
//         if (programaEdad >= 19 && programaEdad <= 45) {
//             console.log("Eres un mayor joven");
//         }
//         else{
//             if (programaEdad > 45 && programaEdad <= 100) {
//                 console.log("Eres un anciano");
//             }
//             else{
//                 console.log("¿En realidad tienes esa edad?");

//             }
//         }  
//     }

// }

//ejercicio 10

//ejercicio 11


// let color = prompt("Ingrese un color");

// switch (color) {
//     case "blanco":
//         console.log("falta de color");
//         break;

//     case "negro":
//         console.log("falta de color");
//         break;

//     case "verde":
//         console.log("el color de la naturaleza");
//         break;

//     case "azul":
//         console.log("el color del agua");
//         break;

//     case "amarillo":
//         console.log("el color del sol");
//         break;

//     case "rojo":
//         console.log("el color del fuego");
//         break;

//     case "marron":
//         console.log("el color de la tierra");
//         break;

//     default:
//         console.log("excelente elección, no lo teniamos pensado");
//         break;
// }

//ejercicio 12

// let valor1 = prompt("Ingrese el primer valor");
// let valor2 = prompt("Ingrese el segundo valor");
// let operacion = prompt("Ingrese una operación");

// switch (operacion) {
//     case "suma":
//         console.log(valor1 + valor2);
//         break;
//     case "resta":
//         console.log(valor1 - valor2);
//         break;
//     case "multiplicacion":
//         console.log(valor1 * valor2);
//         break;
//     case "division":
//         if (valor2 != 0) {
//             console.log(valor1 / valor2);
//         }
//         else {
//             console.log("ERROR");
//         }

//         break;

//     default:
//         break;
// }

//ejercicio 13











