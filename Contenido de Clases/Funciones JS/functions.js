// Funciones MDN = https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
// Hoisting MDN = https://developer.mozilla.org/es/docs/Glossary/Hoisting
// Scope MDN = https://developer.mozilla.org/es/docs/Glossary/Scope

//Declaracion de Funciones
// saludar()

function saludar(){
    console.log('hola, dsd una funcion')
}

//Expresion de funciones

const saludo = () => console.log('hola dsd una expresion de funcion')

// saludo()

//Parametros
let nombre = 'Lucas'
function saludarPorNombre(nombreASaludar){
    console.log('Hola ' + nombreASaludar)
}
// saludarPorNombre('Lucas')

//Parametros por default


function saludarPorDefault( nombre='Cinthya' ){
    console.log('Hola ' + nombre)
}
// saludarPorDefault()

//Arrays ejemplo
const mentores = [
    {
        nombre: 'Lucre',
        edad: 28,
        genero: 'Femenino'
    },
    {
        nombre: 'Kevin',
        edad: 30,
        genero: 'Masculino'
    },
    {
        nombre: 'Lucas',
        edad: 24,
        genero: 'Masculino'
    },
    {
        nombre: 'Nico',
        edad: 29,
        genero: 'Masculino'
    },
    {
        nombre: 'Igna',
        edad: 32,
        genero: 'Masculino'
    },
    {
        nombre: 'Cami',
        edad: 29,
        genero: 'Femenino'
    },
]
const alumnos = [
    {
        nombre: 'Ariana',
        edad: 28,
        genero: 'Femenino'
    },
    {
        nombre: 'Federico',
        edad: 30,
        genero: 'Masculino'
    },
    {
        nombre: 'Andres',
        edad: 24,
        genero: 'Masculino'
    },
    {
        nombre: 'Julia',
        edad: 25,
        genero: 'Femenino'
    },
    {
        nombre: 'Juan',
        edad: 32,
        genero: 'Masculino'
    },
    {
        nombre: 'Flor',
        edad: 29,
        genero: 'Femenino'
    },
]

const buscarNombre = array => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].nombre)
    }
}
// buscarNombre(mentores)
// buscarNombre(alumnos)

function filtrarPorGenero(array, genero){
    let arrayFiltrado = []
    for(let i = 0; i < array.length; i++){
        if(array[i].genero === genero){
            arrayFiltrado.push(array[i])
        }
    }
    return arrayFiltrado
}

let arrayMujeres = filtrarPorGenero(mentores, 'Femenino')
// console.log(arrayMujeres)
let arrayHombres = filtrarPorGenero(mentores, 'Masculino')
// console.log(arrayHombres)



// Practico
// 1. Sacar el total de cada compra y guardarlo en variables
// 2. Sacar las ganancias del dia

let carrito1 = [
    {
        nombre: 'prod1',
        precio: 35,
        cantidad: 4
    },
    {
        nombre: 'prod2',
        precio: 5,
        cantidad: 3
    },
    {
        nombre: 'prod3',
        precio: 103,
        cantidad: 2
    },
    {
        nombre: 'prod4',
        precio: 800,
        cantidad: 1
    }
]
let carrito2 = [
    {
        nombre: 'prod1',
        precio: 500,
        cantidad: 2
    },
    {
        nombre: 'prod2',
        precio: 20,
        cantidad: 3
    },
    {
        nombre: 'prod3',
        precio: 30,
        cantidad: 1
    },
    {
        nombre: 'prod4',
        precio: 77,
        cantidad: 5
    }
]
let carrito3 = [
    {
        nombre: 'prod1',
        precio: 200,
        cantidad: 3
    },
    {
        nombre: 'prod2',
        precio: 230,
        cantidad: 1
    },
    {
        nombre: 'prod3',
        precio: 320,
        cantidad: 1
    },
    {
        nombre: 'prod4',
        precio: 70,
        cantidad: 5
    }
]

function sumarCarrito(array){
    let total = 0
    for(let item of array){
        total = total + item.precio * item.cantidad
    }
    return total
}

let carritoSumado1 = sumarCarrito(carrito1)
let carritoSumado2 = sumarCarrito(carrito2)
let carritoSumado3 = sumarCarrito(carrito3)

function gananciasTotales(a, b, c){
    return a + b + c
}

let totalDeLosTotales = gananciasTotales(carritoSumado1, carritoSumado2)

// console.log(totalDeLosTotales)