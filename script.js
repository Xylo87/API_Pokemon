
const pokedex = document.getElementById("pokedex")

const pokemon = document.createElement("div")
const pokeTitle = document.createElement("h1")
const pokeCanva = document.createElement("img")
const pokeButton = document.createElement("button")

pokemon.classList.add("pokemon")
pokeButton.classList.add("btn", "btn-success")
pokeButton.innerText = "Get random Pokemon !"

pokedex.append(pokemon)
pokemon.append(pokeTitle, pokeCanva, pokeButton)

async function call() {

    let randomNumber = Math.floor(Math.random() * 1025) + 1
    
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    let data = await response.json()
    // console.log(data)
    
    let pokeName = data.name
    let pokeFaceURL = data.sprites.front_default
    let pokeFaceURLGif = data.sprites.other.showdown.front_default
    
    pokeTitle.textContent = pokeName

    if (pokeFaceURLGif) {
        pokeCanva.setAttribute("src", pokeFaceURLGif)
    } else {
        pokeCanva.setAttribute("src", pokeFaceURL)
    }
}


call()


pokeButton.addEventListener('click', function () {
    call()
})