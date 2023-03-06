import beers from './datos.js'
let detailContainer = document.querySelector('#beerDetail')

const queryString = location.search
const params = new URLSearchParams(queryString)
const beerID = params.get('id')
const beer = beers.find( beer => beer.id == beerID )

console.log(beer)

function createDetails(beer, container) {
    let div = document.createElement('div')
    div.classList = 'card-big d-flex bg-light gap-2 rounded p-3'
    div.style = 'width: 90%; heigth: 90%;'
    div.innerHTML = `
    <img  class='bg-light object-fit-contain p-3' src="${beer.image_url}" alt="${beer.name}">
    <div style='heigth: 90%; width: 50%' class='d-flex flex-column align-items-center justify-content-between flex-grow-1'>
        <h3 class="card-title fw-bold">${beer.name}</h3>
        <h4 class="card-text fst-italic">${beer.tagline}</h4>
        <h4 class="card-text text-center"><strong>Description: </strong>${beer.description}</h4>
        <h4 class="card-text"><strong>IBU: </strong>${beer.ibu}</h4>
        <h4 class="card-text"><strong>ABV: </strong>${beer.abv}</h4>
        <h4 class="card-text"><strong>SRM: </strong>${beer.srm}</h4>
        <h4 class="card-text"><strong>Food Pairing:</strong></h4>
        <ul>
            <li>${beer.food_pairing[0]}</li>
            <li>${beer.food_pairing[1]}</li>
            <li>${beer.food_pairing[2]}</li>
        </ul>
        <h4 class="card-text"><strong>Brewer Tips: </strong>${beer.brewers_tips}</h4>
        <img style='height:5rem;' src="./assets/drunkWitch.png" alt="drunkWitch">
    </div>
    `
    container.appendChild(div)
}

createDetails(beer, detailContainer)