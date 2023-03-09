let miNombre = "Leo";
console.log("1) Mi Nombre : " + miNombre);

let miApellido = "Rodriguez";
console.log("2) Mi Apellido : " + miApellido);

let miEdad = 31;
console.log("3) Mi Edad : " + miEdad);

let miMascota = "Paco";
console.log("4) Mi Mascota : " + miMascota);

let edadMascota = 3;
console.log("5) Edad de Mi Mascota : " + edadMascota);

console.log(`6) ${miNombre}, ${miApellido}, ${miEdad}, ${miMascota}, ${edadMascota}`);

let nombreCompleto = miNombre + " " + miApellido;
console.log("7) Nombre Completo: " + nombreCompleto);

let textoPresentacion =
    console.log(`8)
A) Mi Nombre : ${miNombre}
B) Mi Apellido : ${miApellido}
C) Mi Edad : ${miEdad}
D) Mi Mascota : ${miMascota}
E) Edad de Mi Mascota : ${edadMascota}
F) Nombre Completo: ${nombreCompleto}`);

let sumaEdades = miEdad + edadMascota;

let restaEdades = miEdad - edadMascota;

let productoEdades = miEdad * edadMascota;

let divisionEdades = miEdad / edadMascota;


console.log(`9)
Suma edades : ${sumaEdades}
Resta edades : ${restaEdades}
Producto edades : ${productoEdades}
Division edades : ${divisionEdades}`);

//Ejercicio 10

// miNombre  = prompt("Ingrese nombre");
// console.log("1) Mi Nombre : " + miNombre);

// miApellido = prompt("Ingrese apellido");
// console.log("2) Mi Apellido : " + miApellido);

// miEdad = prompt("Ingrese edad");
// console.log("3) Mi Edad : " + parseInt(miEdad));

// miMascota = prompt("Ingrese nombre de mascota");
// console.log("4) Mi Mascota : " + miMascota);

// edadMascota = prompt("Ingrese edad de mascota");
// console.log("5) Edad de Mi Mascota : " + parseInt(edadMascota));

console.log(`6) ${miNombre}, ${miApellido}, ${miEdad}, ${miMascota}, ${edadMascota}`);

nombreCompleto = miNombre + " " + miApellido;
console.log("7) Nombre Completo: " + nombreCompleto);

textoPresentacion =
    console.log(`8)
A) Mi Nombre : ${miNombre}
B) Mi Apellido : ${miApellido}
C) Mi Edad : ${miEdad}
D) Mi Mascota : ${miMascota}
E) Edad de Mi Mascota : ${edadMascota}
F) Nombre Completo: ${nombreCompleto}`);

sumaEdades = miEdad + edadMascota;

restaEdades = miEdad - edadMascota;

productoEdades = miEdad * edadMascota;

divisionEdades = miEdad / edadMascota;

console.log(`9)
Suma edades : ${sumaEdades}
Resta edades : ${restaEdades}
Producto edades : ${productoEdades}
Division edades : ${divisionEdades}`);

//Ejercicio 11

let alumno =
{
    "Nombre": "Veronica",
    "Apellido": "Sanchez",
    "Matricula": "123456",
    "Carrera": "Analista de Sistemas",
    "Anio": "Segundo",
}
console.table(alumno);

console.log(alumno.Nombre);
console.log(alumno.Apellido);
console.log(alumno.Matricula);
console.log(alumno.Carrera);
console.log(alumno.Anio);

//Ejercicio 12

let mascota =
{
    "Nombre": "Paco",
    "Edad": "3",
    "Raza": "Ladrador",
    "Altura": "60 cm",
    "Peso": "9 kg",
}

console.table(mascota);
console.log(mascota.Nombre);
console.log(mascota.Edad);
console.log(mascota.Raza);
console.log(mascota.Altura);
console.log(mascota.Peso);

//Ejercicio 13

let frutas = ["Banana", "Manzana", "Pera", "Frutilla", "Melon"];

console.log(frutas);

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

// Ejercicio 14

let numeros = ["Uno", "Diez", "Veinte", "Treinta", "Cuarenta"];

console.log(numeros);

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

// Ejercicio 15

let familia = ["Leo", "Sol", "Mercedes", "Ruben", "Elva"];

console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

// Ejercicio 16

let textoAleatorio = [
    `Compré ${frutas[1]}, caminé ${numeros[3]} minutos y llegué a casa de ${familia[4]}`
]

console.log(textoAleatorio);

//Ejercicio 17

// let edad = prompt("Ingrese su edad");
// console.log(edad);

// let edadCompanero = prompt("Ingrese la edad de mi compañero");
// console.log(edadCompanero);

// let edadesIguales = 0;
// let soyMayor = 0;
// let soyMenor = 0;

// if (edad==edadCompanero) {
//     edadesIguales = edad;
//     console.log ("Mi edad es igual a la de mi compañero: true");
// }
// else{
//     console.log ("Mi edad es igual a la de mi compañero: false");

// };

// if(edad > edadCompanero){
//     soyMayor = edad;
//     console.log ("Mi edad es mayor a la de mi compañero: true");
// }
// else{
//     console.log ("Mi edad es mayor a la de mi compañero: false");

// };

// if (edad < edadCompanero) {
//     soyMenor = edad;
//     console.log ("Mi edad es menor a la de mi compañero: true");
// }
// else{
//     console.log ("Mi edad es menor a la de mi compañero: false");

// };

// //Ejercicio 18 

// let soyMayorDeEdad = 0;

// if (edad>=18) {
//     soyMayorDeEdad = edad;
//     console.log(`Soy mayor de edad. (${soyMayorDeEdad} años)`);
// }

//Ejercicio 19

let edadPersona = prompt("Ingresar la edad de la persona");

let alturaPersona = prompt("Ingresar la altura de una persona en cm");

let puedeSubir = "";

if (edadPersona > 6) {
    if (alturaPersona >= 120) {
        puedeSubir = console.log(`Puede subir a la atracción. (${edadPersona} años y ${alturaPersona} cm de altura.)`);
    }
}

//Ejercicio 20

let pasePersona = prompt("Ingresar pase de persona (VIP/NORMAL/LIMITADO)");

let saldoPersona = prompt("Ingrese saldo");

let puedePasar = "";

if (pasePersona == "VIP") {
    if (saldoPersona > 1000) {
       puedePasar = console.log(`La persona puede pasar. (Pase: ${pasePersona} y Saldo: ${saldoPersona}.)`);
    }
}

















