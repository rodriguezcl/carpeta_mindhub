import beers from "./datos.js"
let beerContainer = document.querySelector("#beerContainer")

function printCards(array, contenedor) {
    let fragmento = document.createDocumentFragment()
    for (const item of array) {
        let div = document.createElement('div')
        div.className = 'card'
        div.style = 'width: 18rem; height: 25rem'
        div.innerHTML = `
        <img src="${item.image_url}" class="card-img-top bg-light h-50 object-fit-contain" alt="${item.name}">
        <div class="card-body d-flex flex-column gap-1">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text flex-grow-1">${item.tagline}</p>
            <a href="../details.html?id=${item.id}" class="btn btn-primary align-self-end justify-self-end">Details</a>
        </div>`
        fragmento.appendChild(div)
    }
    contenedor.appendChild(fragmento)
}

printCards(beers, beerContainer)