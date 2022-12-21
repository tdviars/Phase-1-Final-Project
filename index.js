//Use DomContentLoaded to fetch the reptiles after the DOM loads, it prevents any errors happening before the DOM loads
//Makes a const for 'API'
document.addEventListener('DOMContentLoaded', fetchReptiles)
const API = "http://localhost:3000/reptiles"

//getting the reptiles using fetch

function fetchReptiles(){
    fetch('API')
    .then(res => res.json())
    .then(reptileData => Data(reptileData))
}

//using forEach to loop through the reptile data
// then send each reptile through the addReptile function



