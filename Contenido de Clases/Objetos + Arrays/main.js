let nuevoObj = new Object({
    nombre: 'Cinthya',
    edad: 30,
    trabajo: 'Mentora Front-End',
    michis: ['Kirito', 'Mayu', 'Miku'],
    saludar(){
        console.log('Hola, mi nombre es ' + this.nombre)
    }
})

let mentor = {
    nombre: 'Lucas',
    edad: 23,
    trabajo: 'Mentor Front-End'
}

// let mentor2 = mentor

// console.log({} === {})
// console.log(mentor === mentor2)

// mentor.colorPelo = 'rubio'


// delete nuevoObj.saludar

// console.log(nuevoObj)

// Object.keys(mentor)

// console.log(Object.keys(mentor))

// console.log(Object.values(mentor))

// console.table(Object.keys(mentor))

// console.log(Object.entries(mentor))



let arrayNuevo = new Array(['espinaca', 'zanahoria', 'rucula', 'brocoli', 'berenjena'])

// let longitud = numeros.length
// console.log(longitud)

// frutas[1] = 'limon'

// let compras = frutas.concat(arrayNuevo)

// let fruta = frutas.pop()
// arrayNuevo.push('perejil')

// let numero = numeros.shift()
// numeros.unshift(95)

// let cadena = frutas.toString()

// let rejunte = frutas.join(` "" `)

// let indice = frutas.indexOf('kiwi')

// let longitudDeCadena = cadena.length
// console.log(longitudDeCadena)


// let numero = prompt('Ingrese un numero')
// if(!numeros.includes(Number(numero))){
    //     numeros.push(Number(numero))
    //     alert('Numero agregado a la coleccion')
    //     console.log(numeros)
// } else {
    //     alert('Ese numero ya lo tengo')
    // }

let numeros = [1, 5, 82, 9, 76, 32, 4, 5, 77]

let frutas = ['pera', 'anana', 'frutilla', 'manzana', 'kiwi', 'sandia']
let ejemplo = frutas[frutas.length -1]

let ejemplo2 = frutas[3].length * numeros[5]