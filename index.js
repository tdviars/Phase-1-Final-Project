//Use DomContentLoaded to fetch the reptiles after the DOM loads, it prevents any errors happening before the DOM loads
//Makes a const for 'API'
//Used DomContenetLoaded event listener

document.addEventListener('DOMContentLoaded', fetchReptiles)
const API = "http://localhost:3000/reptiles"

//getting the reptiles using fetch GET

function fetchReptiles(){
    fetch('API')
    .then(res => res.json())
    .then(reptileData => data(reptileData))
}

//using forEach to loop through the reptile data
// then send each reptile through the addReptile function

function data(reptileData){
    reptileData.forEach(reptile => {
        addReptile(reptile)
    })
}

let boardContainer = document.querySelector('.board-container')

function addReptile(reptile) {
    let card = document.createElement('div')
    card.className = 'card'
    let img = document.createElement('img')
    img.src = 'reptile.img'
    img.className = 'reptile-img'
    let species = document.createElement('div')
    species.textContent = species.brand
    brand.className = 'reptile-info'
    let price = document.createElement('div')
    price.textContent = reptile.price
    price.className = 'reptile-info'
    let quantity = document.createElement('div')
    quantity.textContent = 'Quantity: ${reptile.quantity}'
    quantity.className = 'quant'
    let buyBtn = document.createElement('button')
    buyBtn.textContent = 'Buy Now'
    buyBtn.id = reptile.id
    buyBtn.className = 'buy-btn'
    card.append(img, species, price, quantity, buyBtn)
    boardContainer.append(card)
    if(reptile.quantity === 0){
        buyBtn.disabled = true
        card.querySelector('.quant').textContent = 'Sorry, out of stock'
    }
// Used submit event listener

let buy = document.getElementById(`${reptile.id}`)
buy.addEventListener('click', () => {
    board.quantity -= 1
    if (board.quantity === 0){
        card.querySelector('.quant').textContent = 'Sorry, out of stock'
        buyBtn.disabled = true
        update(reptile)
    }else{
        card.querySelector('quant').textContent = `Quantity: ${board.quantity}`
        update(reptile)
    }
})
}

// PATCH method used to send the updated quantity of the reptiles
function update(reptile){
    fetch(`http://localhost:3000/reptiles/${board.id}`,{
        method: 'PATCH',
        headers: {
             'Content-Type': 'application/json',
             Accept: 'application.json'
        },
        body:JSON.stringify(reptile)
    })
}

//Submit event listener

let form = document.querySelector('form')
form.addEventListener('submite', newReptile)

function newReptile(e){
    e.preventDefault()
    let newReptile = {
        'species': e.target.name.value,
        'image': e.target.image.value,
        'price': e.target.price.value,
        'quantity': e.target.quantity.value
    }

    newReptileSubmit(reptile)
    form.reset()
}

//Used POST method to send new reptiles to the database


