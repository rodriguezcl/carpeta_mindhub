let container = document.getElementById("container")
//container.className="container" //asigno "container" a propiedad "className" de container
//let miParrafo = document.createElement("p")
//miParrafo.textContent = "Hola chiques de Argentina Programa"
//let miTexto = document.createTextNode("Hola chiques de Argentina Programa 2")
//miParrafo.appendChild(miTexto) //Agregamos el nodo texto a el parrafo
//container.appendChild(miParrafo) //Agregamos el elemento HTML p a el div
let productos = [
    {
        id: 1,
        nombre: "Gaseosa",
        precio: 120,
        imagen:"http://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/77908950004301-80602de5b61cff11bb15890782195412-640-0.jpg"
    },
    {
        id: 2,
        nombre: "Aguacate",
        precio: 80,
        imagen:"https://exoticfruitbox.com/wp-content/uploads/2015/10/aguacate.jpg"
    },
    {
        id: 3,
        nombre: "Pan con semillas",
        precio: 200,
        imagen:"https://www.recetasdesbieta.com/wp-content/uploads/2018/09/pan-multigrano_01.jpg"
    },
    {
        id: 4,
        nombre: "Pizza",
        precio: 150,
        imagen:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg"
    },
]

/* function imprimirCards(array, container){
    for(let producto of array){
        let div = document.createElement("div");
        div.className = "card"
        div.innerHTML += `
        <div class="header-card">
            <p>${producto.nombre}</p>
            <p>${producto.precio}</p>
        </div>
        <img src="${producto.imagen}"/>
                ` 
        container.appendChild(div)
    }
}
imprimirCards(productos,container) */

const fragment = document.createDocumentFragment();

function imprimirCards(array, contenedor){
    for(let producto of array){
        let div = document.createElement('div');
        div.className = "card"
        div.innerHTML += `
        <div class="header-card">
            <p>${producto.nombre}</p>
            <p>${producto.precio}</p>
        </div>
        <img src="${producto.imagen}"/>
                ` 
        fragment.appendChild(div)
    }
    contenedor.appendChild(fragment)
}
imprimirCards(productos, container)